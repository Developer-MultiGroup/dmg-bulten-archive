import type { EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: string;
  slug: string;
  description: string;
  writers: string[];
  body: Document;
  date?: string;
  cover?: {
    fields: {
      file: {
        url: string;
        details: {
          image: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
  category?: string;
}

// ✅ This satisfies Contentful's constraint
export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'dmgBulten'>;