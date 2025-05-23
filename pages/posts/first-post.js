import Link from 'next/link';
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          {/* metadata */}
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy='lazyOnLoad'
          onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}>
        </Script>
        <h1>First post h1</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
