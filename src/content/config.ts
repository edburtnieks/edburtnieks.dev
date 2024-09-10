import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const employments = defineCollection({
    loader: file("src/data/employments.json"),
    schema: z.object({
        company: z.string(),
        description: z.string(),
        date: z.string(),
    }),
});

const mentoring = defineCollection({
    loader: file("src/data/mentoring.json"),
    schema: z.object({
        company: z.string(),
        position_title: z.string(),
        description: z.string(),
        date: z.string(),
    }),
});

export const collections = {
    employments,
    mentoring,
};
