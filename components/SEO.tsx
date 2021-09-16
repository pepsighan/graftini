import Head from 'next/head';

type SEOProps = {
  title?: string;
  description?: string;
};

// TODO: Use next-seo for all purpose SEO solution.
export default function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title ?? 'Graftini'}</title>
      <meta
        name="description"
        content={description ?? 'A wordpress theme builder using NextJS.'}
      />
    </Head>
  );
}
