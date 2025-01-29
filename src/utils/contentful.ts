import { createClient, EntrySkeletonType, Asset } from 'contentful';

// Define the expected structure for a portfolio entry
export type PortfolioEntry = {
  siteTitle: string;
  description: string;
  imageUrl: string | null;
  tags: string[];
};

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export async function fetchPortfolioEntries(): Promise<PortfolioEntry[]> {
  const response = await client.getEntries<EntrySkeletonType>({
    content_type: 'delfinoPortfolio',
  });

  return response.items.map((item) => {
    const fields = item.fields as Record<string, unknown>; // Ensure fields is an object

    return {
      siteTitle: typeof fields.siteTitle === 'string' ? fields.siteTitle : '',
      description:
        typeof fields.description === 'string' ? fields.description : '',
      imageUrl:
        fields.image &&
        (fields.image as Asset)?.fields?.file?.url &&
        (fields.image as Asset).fields?.file?.url
          ? `https:${(fields.image as Asset)?.fields?.file?.url}`
          : null,
      tags: Array.isArray(fields.tags)
        ? fields.tags.map((tag) => String(tag))
        : typeof fields.tags === 'string'
          ? fields.tags.split(',')
          : [],
    };
  });
}
