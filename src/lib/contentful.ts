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
    include: 2, // Include linked assets (for cover images)
    limit: 1000, // Set a high limit to get all posts
  });

  // Sort by custom date field (newest first)
  const sortedItems = res.items.sort((a, b) => {
    const dateA = a.fields.date ? new Date(String(a.fields.date)).getTime() : new Date(a.sys.createdAt).getTime();
    const dateB = b.fields.date ? new Date(String(b.fields.date)).getTime() : new Date(b.sys.createdAt).getTime();
    return dateB - dateA; // Newest first
  });

  console.log(sortedItems);

  return sortedItems;
};

export const getPostBySlug = async (
  slug: string
): Promise<Entry<BlogPostSkeleton> | null> => {
  const res = await client.getEntries<BlogPostSkeleton>({
    content_type: "dmgBulten",
    // 👇 safely assert it as any
    "fields.slug": slug,
    locale: 'en-US',
    include: 2, // Include linked assets (for cover images)
    limit: 1, // Only need one post
  } as any); // acceptable in this specific case

  return res.items[0] ?? null;
};