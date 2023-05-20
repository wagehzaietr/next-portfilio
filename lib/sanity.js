import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'anwi6xvu',
  dataset: 'production',
  apiVersion: '2021-10-21', // Replace with the appropriate API version
  useCdn: true, // Enable if you want to use the CDN
});
