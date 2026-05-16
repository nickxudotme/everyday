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

export function dailyStreak<T extends Note>(entries: T[]) {
  if (entries.length === 0) {
    return 0;
  }

  const dates = [...new Set(entries.map((entry) => entry.slug))].sort().reverse();
  let streak = 1;

  for (let index = 1; index < dates.length; index += 1) {
    const current = new Date(`${dates[index - 1]}T00:00:00Z`);
    const previous = new Date(`${dates[index]}T00:00:00Z`);
    const dayGap = (current.valueOf() - previous.valueOf()) / 86400000;

    if (dayGap !== 1) {
      break;
    }

    streak += 1;
  }

  return streak;
}

export function monthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export function formatMonth(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long'
  }).format(date);
}
