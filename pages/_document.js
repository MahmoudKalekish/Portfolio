import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/fav.png" />
        <link rel="apple-touch-icon" href="/fav.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <meta name="google-site-verification" content="YNK3UkkySF2_NT8B0CydOHeLZS5eeYPkvO1ueh1I1dM" />

        {/* Mobile / PWA hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mahmoud Kalekish" />
        <meta name="theme-color" content="#5651e5" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
