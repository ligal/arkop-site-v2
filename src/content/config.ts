import { defineCollection, z } from 'astro:content';

const stones = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    order: z.number(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    category: z.string(),
    images: z.array(z.string()),
    year: z.number(),
  }),
});

export const collections = { stones, projects };
