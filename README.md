# everyday

`everyday.nickxu.me` is a lightweight writing space for short notes.

## Content

- `src/content/notes`: short, frequent fragments.

Create a Markdown file with frontmatter:

```md
---
title: 今天想到的一件事
date: 2026-05-06
summary: 一句话摘要，可选。
tags:
  - life
visibility: public
---

正文。
```

Drafts can be hidden completely with `draft: true`.

Published notes can be marked as `visibility: private` to show only an "不公开" hint on the home page without generating a public detail page. The default is `visibility: public`.

## Commands

```bash
npm install
npm run dev
npm run build
```
