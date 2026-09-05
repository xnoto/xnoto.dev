import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["maintained", "reference", "archived"]),
    source: z.string().url(),
    themes: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
