import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={'en'} dir={'ltr'}>
      <Head>
        {/* Google AdSense */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-1642567097359739",
              enable_page_level_ads: true
            });
            `
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1642567097359739"
           crossOrigin="anonymous"></script>
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          }
          rel={'stylesheet'}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
