import { createClient, EntrySkeletonType } from 'contentful';

// Define fields structure
interface PortfolioEntryFields {
  siteTitle: string;
  description: string;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  tags?: string;
}

// Define EntrySkeletonType
type PortfolioEntrySkeleton = EntrySkeletonType<PortfolioEntryFields>;

// Create Contentful client
const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

// Fetch portfolio entries
export async function fetchPortfolioEntries(locale: string = 'en-US') {
  const query = {
    content_type: 'delfinoPortfolio',
    locale,
  };

  try {
    const response =
      await contentfulClient.getEntries<PortfolioEntrySkeleton>(query);

    // Map response to transform data
    return response.items.map((item) => ({
      siteTitle: item.fields.siteTitle || '',
      description: item.fields.description || '',
      imageUrl: item.fields.image?.fields?.file?.url,
      tags: item.fields.tags || '',
    }));
  } catch (error) {
    console.error('Error fetching portfolio entries:', error);
    return [];
  }
}
