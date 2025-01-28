import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

export async function fetchPortfolioEntries(locale: string = 'en-US') {
  const query = {
    content_type: 'delfinoPortfolio', // Correct Content Type ID
    locale,
  };

  try {
    const response = await contentfulClient.getEntries(query);

    return response.items.map((item) => ({
      siteTitle: item.fields.siteTitle, // Matches "id": "siteTitle"
      description: item.fields.description, // Matches "id": "description"
      imageUrl: item.fields.image?.fields?.file?.url, // Matches "id": "image"
      tags: item.fields.tags, // Matches "id": "tags"
    }));
  } catch (error) {
    console.error('Error fetching portfolio entries:', error);
    return [];
  }
}
