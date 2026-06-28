import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  summary: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  visibility: z.enum(['public', 'private']).default('public')
});

const notes = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    mood: z.string().optional()
  })
});

export const collections = { notes };
