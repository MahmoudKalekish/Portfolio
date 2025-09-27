import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

const resume = () => {
  return (
    <>
      <Head>
      <title>Mahmoud Kalekish | Resume | Full-Stack Software Engineer</title>
      <meta name="description" content="Resume of Mahmoud Kalekish – Full-Stack Software Engineer specializing in scalable web & mobile development, cloud deployments, and modern DevOps tools." />

        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center name'>Mahmoud Kalekish</h2>

          <div className='flex'>

            <a
              href='tel:+96176734358'
              target='_blank'
              rel='noreferrer'
            >
              <FaPhone size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='mailto:mahmoudkalekish18@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaEnvelope size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://www.linkedin.com/in/mahmoud-kalekish/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/MahmoudKalekish'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <h5 className='text-center underline text-[18px] py-2'>Profile</h5>

          </div>
          <div className='block sm:hidden'>
            <h5 className='text-center underline text-[18px] py-2'>Profile</h5>
          </div>
        </div>
        <p>
        Full-Stack Software Engineer with 3+ years of experience designing and delivering scalable web and mobile solutions. Skilled in Angular, Spring Boot, MERN, and Flutter, with a growing focus on DevOps (Docker, Kubernetes) and applied AI research through ongoing PhD studies in Generative AI and Digital Twins. Proven ability to work across the full development lifecycle, contribute to digital twin simulations, and deliver high-impact freelance projects for startups and businesses. Eager to leverage technical expertise and research-driven approach to deliver innovative, efficient solutions that align with company goals and drive long-term growth.

        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          {/* <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> TailwindCSS
            <span className='px-2'>|</span> MaterialUI
            <span className='px-2'>|</span> Bootstrap
            <span className='px-2'>|</span> JavaScript
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span> ReactJS
            <span className='px-2'>|</span> Redux
            <span className='px-2'>|</span> NextJS
            <span className='px-2'>|</span> ReactNative
            <span className='px-2'>|</span> Angular
            <span className='px-2'>|</span> EmberJS
            <span className='px-2'>|</span> Back-End Web Developer
            <span className='px-2'>|</span> NodeJS
            <span className='px-2'>|</span> ExpressJS
            <span className='px-2'>|</span> MongoDB
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> StrapiJS
            <span className='px-2'>|</span> WordPress
            <span className='px-2'>|</span> C
            <span className='px-2'>|</span> C++
            <span className='px-2'>|</span> C#
            <span className='px-2'>|</span> Asp.net
            <span className='px-2'>|</span> Vb.net
            <span className='px-2'>|</span> Java
            <span className='px-2'>|</span> Spring Boot
            <span className='px-2'>|</span> Liquibase
            <span className='px-2'>|</span> SQL
            <span className='px-2'>|</span> PHP
            <span className='px-2'>|</span> Laravel
            <span className='px-2'>|</span> Blade
            <span className='px-2'>|</span> Ruby on rails
            <span className='px-2'>|</span> Phpmyadmin
            <span className='px-2'>|</span> NoSQL
            <span className='px-2'>|</span> SQLite
            <span className='px-2'>|</span> Python
            <span className='px-2'>|</span> Git
            <span className='px-2'>|</span> GitHub
            <span className='px-2'>|</span> GitLab
            <span className='px-2'>|</span> Docker
            <span className='px-2'>|</span> Kubernetes
            <span className='px-2'>|</span> Android Studio
            <span className='px-2'>|</span> Redis
            <span className='px-2'>|</span> Web Services
            <span className='px-2'>|</span> Flutter
          </p>
          <p className='py-2'>
            <span className='font-bold'>Cloud Deployment Platforms</span>
            <span className='px-2'>|</span> Netlify
            <span className='px-2'>|</span> Surge
            <span className='px-2'>|</span> Render
            <span className='px-2'>|</span> Railway
            <span className='px-2'>|</span> Vercel

          </p> */}

<h5 className='text-center underline text-[18px] py-2'>Skills</h5>
<p className='py-2'><span className='font-bold'>Frontend:</span> HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Angular, Next.js, Material UI, Bootstrap, Redux, React Native</p>
<p className='py-2'><span className='font-bold'>Backend:</span> Node.js, Express.js, Laravel, PHP, Java, Spring Boot, .NET, Firebase, REST APIs, GraphQL, SQLite</p>
<p className='py-2'><span className='font-bold'>Databases:</span> MongoDB, MySQL, PostgreSQL, PL/SQL, Firestore, Redis, PhpMyAdmin</p>
<p className='py-2'><span className='font-bold'>DevOps & Tools:</span> Docker, Kubernetes, Helm, Grafana, GitHub, GitLab, Bitbucket, Postman, CI/CD, Nginx</p>
<p className='py-2'><span className='font-bold'>Mobile Development:</span> Flutter, Android Studio (Java), React Native</p>
<p className='py-2'><span className='font-bold'>CMS & UI/UX:</span> WordPress, Figma, StrapiJS</p>
<p className='py-2'><span className='font-bold'>Languages:</span> Java, C++, C#, PHP, Python</p>

        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              IN2
            </span>
            <span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-1 italic'> Full-Stack Engineer <span className='px-2'>|</span>October 2023 - Present</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Architecting and delivering end-to-end solutions using Angular (frontend) and Spring Boot (backend).</li>
            <li>Integrated ZKTeco BioTime, BioTimeCloud, BioSecurity & BioAccess, boosting access control and time-tracking efficiency by ~30%, reducing manual interventions.</li>
            <li>Led database migration efforts and implemented Liquibase for schema version control, cutting deployment errors by 40%.</li>
            <li>Resolved critical bugs using advanced debugging techniques, improving system stability and reducing downtime by 25%.</li>
            <li>Integrated and optimized third-party APIs, enhancing overall performance.</li>
            <li>Collaborated in cross-functional Agile teams — sprint planning, retrospectives, daily stand-ups.</li>
            <li>Participated in code reviews and peer mentoring, ensuring high-quality, maintainable code.</li>
            <li>Maintained thorough documentation of codebase, configs, and API integrations, reducing onboarding time for new developers by ~50%.</li>
          </ul>
        </div>

        
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              BEANZ
            </span>
            <span className='px-2'>|</span>Abu Dhabi, United Arab Emirates
          </p>
          <p className='py-1 italic'> Remote Software Engineer <span className='px-2'>|</span>July 2023 - October 2023</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Built responsive, dynamic user interfaces using React.js, TypeScript, and Tailwind CSS.</li>
            <li>Integrated multilingual support (including Arabic) using React i18n, enhancing accessibility for a diverse user base.</li>
            <li>Dockerized applications for consistent and efficient deployment across environments.</li>
            <li>Collaborated in a fully remote, cross-functional team using Jira, Bitbucket, and Git for task management and version control.</li>
            <li>Contributed to the successful delivery of high-performance web applications with a focus on accessibility, localization, and containerization best practices.</li>
          </ul>
        </div>



        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Codi Tech
            </span>
            <span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-1 italic'>Full Stack Web Developer <span className='px-2'>|</span>Nov 2022 - June 2023</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Developed full-stack applications using a range of backend technologies including Laravel, Express.js, Node.js, MongoDB, PHP, SQLite, and REST APIs.</li>
            <li>Designed and built responsive frontends using React.js, React Native, JavaScript, HTML5, and CSS.</li>
            <li>Built and tested APIs with Postman, and implemented efficient API-driven architectures.</li>
            <li>Containerized applications with Docker ensuring consistent deployment across environments.</li>
            <li>Administered and maintained server environments using LAMP Stack on Linux.</li>
            <li>Followed Agile methodologies for project planning, task tracking, and team collaboration.</li>
            <li>Managed and customized websites using WordPress CMS, focusing on usability and content publishing.</li>
            <li>Delivered 5+ production-ready applications within tight deadlines.</li>
          </ul>
        </div>

        {/* Merix Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Merix</span>
            <span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-1 italic'>Full-Stack Software Engineer <span className='px-2'>|</span>October 2021 – Present</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Delivered 10+ full-stack web and mobile applications for startups and businesses, accelerating product launches and supporting scalability.</li>
            <li>Collaborated directly with clients to define requirements, translating business needs into tailored technical solutions with high client satisfaction and repeat engagements.</li>
            <li>Built scalable systems using Spring Boot, Angular, Flutter, React, and Firebase, supporting applications with hundreds of active users.</li>
            <li>Integrated REST APIs, payment gateways, Firebase Auth, and third-party services.</li>
            <li>Deployed applications using Docker, Kubernetes, AWS, and Hostinger.</li>
          </ul>
        </div>

        {/* Education Section */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>PhD in Generative AI and Digital Twins (Ongoing)</span>
            <span className='px-2'>|</span>Lebanese University
          </p>
          <p className='py-1 italic'>Beirut, Lebanon <span className='px-2'>|</span>2025 - Present</p>
          <p className='py-2'>
            Advanced research in Generative AI applications and Digital Twin simulations, contributing to cutting-edge AI research and practical implementations.
          </p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>MA in Management Information System</span>
            <span className='px-2'>|</span>Lebanese University
          </p>
          <p className='py-1 italic'>Beirut, Lebanon <span className='px-2'>|</span>2022 - 2024</p>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>BA in Management Information System</span>
            <span className='px-2'>|</span>Lebanese University
          </p>
          <p className='py-1 italic'>Beirut, Lebanon <span className='px-2'>|</span>2019 - 2022</p>
        </div>

        {/* Languages */}
        <div className='py-6'>
          <h5 className='text-center underline text-[18px] py-4'>
            Languages
          </h5>
          <p className='py-2'>
            Arabic (Native), English (Proficient), French (Proficient), German (Beginner – currently learning)
          </p>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default resume;
