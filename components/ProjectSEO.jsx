import Head from 'next/head';

const ProjectSEO = ({
  projectName,
  description,
  technologies,
  demoUrl,
  githubUrl,
  imageUrl,
  projectUrl
}) => {
  const title = `${projectName} - Mahmoud Kalekish Portfolio`;
  const canonical = `https://mahmoud-kalekish.vercel.app${projectUrl}`;
  
  // Project structured data
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": projectName,
    "description": description,
    "creator": {
      "@type": "Person",
      "name": "Mahmoud Kalekish",
      "url": "https://mahmoud-kalekish.vercel.app"
    },
    "dateCreated": new Date().getFullYear().toString(),
    "programmingLanguage": technologies,
    "url": demoUrl,
    "codeRepository": githubUrl,
    "image": imageUrl
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mahmoud-kalekish.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://mahmoud-kalekish.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": projectName,
        "item": canonical
      }
    ]
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${projectName}, ${technologies.join(', ')}, Mahmoud Kalekish, Portfolio Project`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Project Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectStructuredData)
        }} 
      />
      
      {/* Breadcrumb Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }} 
      />
    </Head>
  );
};

export default ProjectSEO;
