# everyday

`everyday.nickxu.me` is a lightweight writing space for short notes and slower essays.

## Content

- `src/content/notes`: short, frequent fragments.
- `src/content/essays`: longer, more durable reflections.

Create a Markdown file with frontmatter:

```md
---
title: 今天想到的一件事
date: 2026-05-06
summary: 一句话摘要，可选。
tags:
  - life
---

正文。
```

Drafts can be hidden with `draft: true`.

## Commands

```bash
npm install
npm run dev
npm run build
```
