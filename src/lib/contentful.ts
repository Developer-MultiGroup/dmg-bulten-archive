import { createClient } from "contentful";
import type { Entry } from "contentful";
import type { BlogPostSkeleton } from "../types/contentful";

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const getBlogPosts = async (): Promise<Entry<BlogPostSkeleton>[]> => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "dmgBulten",
  });

  console.log(res.items);

  return res.items;
};

export const getPostBySlug = async (
  slug: string
): Promise<Entry<BlogPostSkeleton> | null> => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "dmgBulten",
    // 👇 safely assert it as any
    "fields.slug": slug,
    locale: 'en-US',
  } as any); // acceptable in this specific case

  return res.items[0] ?? null;
};