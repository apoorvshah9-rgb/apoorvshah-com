import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const links = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    category: z.enum(['Articles', 'Podcasts', 'Research', 'Videos']),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { blog, links };
