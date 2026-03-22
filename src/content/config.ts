import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

const experiencesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string(),
    order: z.number(),
    points: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectsCollection,
};
