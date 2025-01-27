import { createClient } from 'contentful';

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '', // Add Contentful Space ID here
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '', // Add Contentful Access Token here
});

export async function fetchEntries(contentType: string) {
  const entries = await contentfulClient.getEntries({
    content_type: contentType,
  });
  return entries.items.map((item) => item.fields);
}
