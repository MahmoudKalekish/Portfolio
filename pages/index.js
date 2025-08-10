import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mahmoud Kalekish | Full-Stack Software Engineer | Web & Mobile Developer</title>
        <meta name="description" content="I'm Mahmoud Kalekish, a Full-Stack Software Engineer specializing in building scalable web and mobile applications using Angular, Spring Boot, React, Flutter, and modern DevOps tools like Docker and Kubernetes." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
 
    <Skills />
   
  
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}
