## Working Style: Thin Vertical Slices

When asked to add a feature, propose and implement it as a series of thin vertical slices rather than horizontal layers. Each slice must be end-to-end working and demonstrably valuable — not a foundation waiting for follow-on work.

Before writing code, propose 3–6 slices ordered from thinnest to richest. Get agreement on which slice to start with. After each slice the system must build, run, and show something real.

Slices are numbered **1-based per feature**, not globally. Each feature has its own Slice 1, Slice 2, etc. Track features and their slices in `TODO.md`. During TDD, track the test list as a sublist under the active slice in `TODO.md`; trim the test list once the slice is merged (keep only the slice title).

**Avoid horizontal layers:**

- Backend handler → transformer → frontend: nothing works until all three are done.

**Prefer thin vertical slices:**

- Slice 1: The smallest end-to-end path that proves the idea. Stub or hardcoded data is fine.
- Slice 2: Replace the first stub with a real source.
- Slice 3: Add the next meaningful behaviour or edge case.
- Each subsequent slice enriches what already works.
