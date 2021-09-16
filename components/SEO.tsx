import Head from 'next/head';

type SEOProps = {
  title?: string;
  description?: string;
};

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
