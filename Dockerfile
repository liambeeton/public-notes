# syntax = docker/dockerfile:1

FROM node:22-slim AS base

ARG PORT=3000

ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

FROM base AS dependencies

COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ARG NEXT_PUBLIC_ANALYTICS_ID
ENV NEXT_PUBLIC_ANALYTICS_ID=$NEXT_PUBLIC_ANALYTICS_ID

RUN pnpm run build

FROM base AS run

ENV NODE_ENV=production
ENV PORT=$PORT

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE $PORT

ENV HOSTNAME="0.0.0.0"
CMD [ "node", "server.js" ]
