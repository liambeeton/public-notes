'use client';

import { useEffect, useId, useState } from 'react';

type MermaidProps = {
  chart: string;
};

type MermaidTheme = 'dark' | 'neutral';

function getTheme(): MermaidTheme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'neutral';
}

export function Mermaid({ chart }: MermaidProps) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<MermaidTheme>('neutral');
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');

  useEffect(() => {
    const updateTheme = () => {
      setTheme(getTheme());
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function renderDiagram() {
      try {
        const mermaid = (await import('mermaid')).default;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme,
          fontFamily: 'inherit',
        });

        const { svg: nextSvg } = await mermaid.render(`mermaid-${id}`, chart);
        if (cancelled) return;

        setSvg(nextSvg);
        setError(null);
      } catch (nextError) {
        if (cancelled) return;

        setSvg('');
        setError(
          nextError instanceof Error
            ? nextError.message
            : 'Failed to render Mermaid diagram.',
        );
      }
    }

    void renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [chart, id, theme]);

  if (error) {
    return (
      <div className="my-6 rounded-xl border bg-fd-card p-4 not-prose">
        <p className="mb-3 text-sm font-medium text-fd-card-foreground">
          Mermaid diagram failed to render.
        </p>
        <p className="mb-3 text-sm text-fd-muted-foreground">{error}</p>
        <pre className="overflow-x-auto rounded-lg bg-fd-muted p-4 text-sm text-fd-card-foreground">
          <code>{chart}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="my-6 overflow-x-auto rounded-xl border bg-fd-card p-4 not-prose">
      {svg ? (
        <div
          className="[&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <p className="text-sm text-fd-muted-foreground">Rendering diagram...</p>
      )}
    </div>
  );
}
