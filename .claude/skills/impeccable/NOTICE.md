# Impeccable — source and known limitation

Copied from [pbakaus/impeccable](https://github.com/pbakaus/impeccable)
(`.claude/skills/impeccable/`), by Paul Bakaus, licensed Apache 2.0 (see
`LICENSE-APACHE-2.0.txt`).

**Running without the compiled binary.** The official installer
(`npx impeccable install`) downloads a signed platform binary that powers
`impeccable context`, the automated anti-pattern detector, and Live Mode.
That download endpoint wasn't reachable from the environment this was set
up in, so only the prompt-level skill (`SKILL.md` + `reference/*.md`) was
copied — no `scripts/impeccable` launcher binary.

This isn't a hack: the skill explicitly documents this as a supported
fallback ("Launcher unavailable" in `SKILL.md`'s Setup section) — skip the
binary-dependent context/detector step, read any existing `PRODUCT.md` /
`DESIGN.md` directly, and follow the rest of the relevant command's
reference file. `reference/degraded/` holds the playbooks written
specifically for this mode.

To get the full experience (automated detector, hooks, Live Mode's browser
picker) later, run `npx impeccable install` from a network that can reach
their release CDN.

Pulled in on 2026-09-23.
