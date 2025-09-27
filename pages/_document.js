import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* Favicon */}
      <link rel="icon" href="/assets/navLogo.png" />
      <link rel="apple-touch-icon" href="/assets/navLogo.png" />
      
      {/* Performance optimizations - Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Mahmoud Kalekish" />
      <meta name="keywords" content="Mahmoud Kalekish, محمود كلاكش, Mahmoud Kalakech, Mahmoud Kalekesh, Mahmud Kalekish, Merix Co-founder, merixlb.com, Full Stack Developer, Full Stack Engineer, Software Engineer, Java Spring Boot Developer, Angular React Developer, Flutter Mobile Developer, Lebanon Software Engineer, Beirut Developer, Middle East Tech Expert, Arabic Developer محمود مطور, Software Consultant, Digital Solutions Expert, Web Mobile App Developer, DevOps Engineer Docker Kubernetes, JavaScript TypeScript Expert, Database MySQL MongoDB, API REST Developer, Scalable Applications, International Software Projects, Remote Developer, Freelance Engineer, Tech Entrepreneur, Startup Co-founder, Lebanese Programmer, Arabic Software Engineer, مهندس برمجيات, مطور تطبيقات, Full Stack Lebanon Dubai, Software Portfolio CV Resume, Hire Mahmoud Kalekish, Contact Developer Lebanon" />
      <meta name="description" content="Official portfolio of Mahmoud Kalekish – Co-founder of Merix (merixlb.com) and Full Stack Software Engineer building scalable web & mobile apps with Java, Angular, React, Flutter, and DevOps." />
      <meta property="og:title" content="Mahmoud Kalekish | Co-founder of Merix | Full Stack Software Engineer" />
      <meta property="og:description" content="Explore Mahmoud's projects, resume, and contact info. Co-founder of Merix (merixlb.com). Java, Spring Boot, Angular, Flutter, MERN, Docker, Kubernetes." />
      <meta property="og:image" content="https://mahmoud-kalekish.vercel.app/assets/navLogo.png" />
      <meta property="og:url" content="https://mahmoud-kalekish.vercel.app" />
      <meta name="google-site-verification" content="YNK3UkkySF2_NT8B0CydOHeLZS5eeYPkvO1ueh1I1dM" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Kalekish",
    "url": "https://mahmoud-kalekish.vercel.app",
    "image": "https://mahmoud-kalekish.vercel.app/assets/navLogo.png",
    "sameAs": [
      "https://www.linkedin.com/in/mahmoud-kalekish",
      "https://github.com/MahmoudKalekish"
    ],
    "jobTitle": "Co-founder & Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Merix",
      "url": "https://merixlb.com"
    }
  })
}} />

      <link rel="canonical" href="https://mahmoud-kalekish.vercel.app" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Additional meta tags for better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Mahmoud Kalekish" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}