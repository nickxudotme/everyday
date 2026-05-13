---
name: everyday-note
description: Use this skill when adding a new note to the everyday Astro project from user-provided prose. It creates the dated Markdown file, prepares frontmatter metadata, preserves the body text verbatim, verifies the note renders, starts local preview, and waits for approval before commit/push.
metadata:
  short-description: Add everyday notes without editing the body
---

# Everyday Note

Use this workflow for `/Users/nx/everyday` when the user provides a note/article and asks to add it to everyday.

## Non-negotiable rule

Do not rewrite, polish, correct, re-punctuate, reorder, trim, or otherwise edit the body text the user provides.

Only add required Markdown/frontmatter around it. The body must be copied verbatim after the closing `---`.

## File and URL

- Notes live in `src/content/notes/`.
- Filename must be the note date: `YYYY-MM-DD.md`.
- Public URL is `https://everyday.nickxu.me/YYYY-MM-DD` with no trailing slash.
- If the target file already exists, ask before overwriting or appending.

## Date selection

- Use an explicitly requested date when provided.
- Otherwise use the current time in `Asia/Shanghai`.
- If the current local time is before 06:00, use the previous calendar date.
- From 06:00 onward, use the current calendar date.

## Frontmatter

Prepare this frontmatter:

```yaml
---
title: <user title>
date: YYYY-MM-DD
summary: <one short summary>
tags:
  - <tag>
---
```

Rules:

- Generate a concise `summary` from the content unless the user provides one.
- Generate 1-4 lowercase tags unless the user provides tags.
- Do not include `draft: false`.
- Do not include `mood` unless the user asks for it.

## Body handling

After frontmatter, insert exactly one blank line, then paste the user's body exactly.

Allowed changes outside the body:

- Add frontmatter.
- Create the dated `.md` file.
- Run validation commands.

Disallowed changes to the body:

- No grammar fixes.
- No typo fixes.
- No paragraph splitting or joining.
- No Markdown formatting unless the user included it.
- No conversion of product names or dates.

## Validation

After creating the note:

1. Run `npm run build` from `/Users/nx/everyday`.
2. Confirm the generated route includes `/<YYYY-MM-DD>`.
3. Start the local dev server with `npm run dev` from `/Users/nx/everyday` so the user can preview the note.
4. Report the created file path, local preview URL, and public URL.

## Publish handoff

- After the dev preview is running, wait for the user to inspect the note.
- Do not commit or push until the user explicitly confirms the preview looks good.
- After confirmation, commit and push only the intended note and related skill changes. Do not include unrelated working tree changes.

Do not commit or push unless the user explicitly asks.
