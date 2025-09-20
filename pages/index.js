import SEO from '../components/SEO'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/SkillsOptimized'
import Footer from '../components/Footer'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Kalekish",
    "url": "https://mahmoud-kalekish.vercel.app",
    "image": "https://mahmoud-kalekish.vercel.app/assets/navLogo.png",
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
    <>
      <SEO 
        title="Mahmoud Kalekish | Full-Stack Software Engineer | Web & Mobile Developer"
        description="I'm Mahmoud Kalekish, Co-founder of Merix and a Full-Stack Software Engineer specializing in building scalable web and mobile applications using Angular, Spring Boot, React, Flutter, and modern DevOps tools like Docker and Kubernetes."
        canonical="https://mahmoud-kalekish.vercel.app"
        structuredData={structuredData}
        keywords="Mahmoud Kalekish, Full Stack Developer, Software Engineer, Angular Developer, Spring Boot, React Developer, Flutter Developer, Next.js, DevOps Engineer, Docker, Kubernetes, Web Developer, Mobile App Developer, Merix Co-founder"
      />
      
      <main role="main">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}
