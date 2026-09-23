# taste-skill — source and scope note

`design-taste-frontend` is copied from [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)
(`skills/taste-skill/SKILL.md` in that repo), licensed MIT:

```
MIT License

Copyright (c) 2026 Leonxlnx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

**Scope note.** `npx skills add Leonxlnx/taste-skill` installs that repo's
entire 13-skill suite (brandkit, four different single-aesthetic UI skills,
image-generation skills for other tools, an output-formatting skill, etc.),
not just one skill. Only `design-taste-frontend` — the core anti-slop
landing-page/portfolio/redesign skill — was kept here; the other 12 were
removed deliberately to avoid clutter and conflicting design directions
(e.g. `industrial-brutalist-ui` vs `minimalist-ui` vs `gpt-taste`) sitting
alongside this project's already-established warm/premium brand.

Pulled in on 2026-09-23. To add any of the other 12 skills back later, run
`npx skills add Leonxlnx/taste-skill` again and keep only what you want from
`.agents/skills/` (each has a matching symlink installed under
`.claude/skills/`).
