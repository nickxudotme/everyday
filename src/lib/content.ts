import type { CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

export function isPublished<T extends Note>(entry: T) {
  return !entry.data.draft;
}

export function byDateDesc<T extends Note>(a: T, b: T) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

export function readingTime(body = '') {
  const chars = body.replace(/\s/g, '').length;
  return Math.max(1, Math.ceil(chars / 500));
}
