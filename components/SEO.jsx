import Head from 'next/head';

const SEO = ({
  title = "Mahmoud Kalekish | Full-Stack Software Engineer | Web & Mobile Developer",
  description = "I'm Mahmoud Kalekish, Co-founder of Merix and a Full-Stack Software Engineer specializing in building scalable web and mobile applications using Angular, Spring Boot, React, Flutter, and modern DevOps tools like Docker and Kubernetes.",
  canonical = "https://mahmoud-kalekish.vercel.app",
  ogImage = "https://mahmoud-kalekish.vercel.app/assets/navLogo.png",
  ogType = "website",
  structuredData = null,
  noindex = false,
  keywords = "Mahmoud Kalekish, Full Stack Developer, Software Engineer, Angular Developer, Spring Boot, React Developer, Flutter Developer, Next.js, DevOps Engineer, Docker, Kubernetes, Web Developer, Mobile App Developer"
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Kalekish",
    "url": canonical,
    "image": ogImage,
    "sameAs": [
      "https://www.linkedin.com/in/mahmoud-kalekish",
      "https://github.com/MahmoudKalekish",
      "https://merixlb.com"
    ],
    "jobTitle": "Co-founder & Full-Stack Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Merix",
      "url": "https://merixlb.com"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Lebanese University"
    },
    "knowsAbout": [
      "Full-Stack Development",
      "Angular",
      "Spring Boot",
      "React",
      "Flutter",
      "DevOps",
      "Docker",
      "Kubernetes",
      "JavaScript",
      "TypeScript",
      "Java",
      "Mobile Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Beirut",
      "addressCountry": "Lebanon"
    }
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mahmoud Kalekish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta charSet="UTF-8" />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Mahmoud Kalekish Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@MahmoudKalekish" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#5651e5" />
      <meta name="msapplication-TileColor" content="#5651e5" />
      
      {/* Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }} 
      />
      
      {/* Favicon */}
      <link rel="icon" href="/fav.png" />
      <link rel="apple-touch-icon" href="/fav.png" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
};

export default SEO;
