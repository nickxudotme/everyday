# everyday Agent Notes

This is an Astro site for short daily notes at `everyday.nickxu.me`.

## Everyday note workflow

When adding a new note from user-provided prose, use the `everyday-note` skill:

- Canonical skill path: `.agents/skills/everyday-note/SKILL.md`
- Codex skill path: `.codex/skills/everyday-note/SKILL.md`
- Claude Code skill path: `.claude/skills/everyday-note/SKILL.md`

The body text of a user-provided note must be preserved verbatim. Do not polish, correct, re-punctuate, reorder, trim, or split the body unless the user explicitly asks.

## Commands

- Validate: `npm run build`
