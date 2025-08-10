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
        Full-Stack Software Engineer with expertise in building scalable web and mobile applications using Angular, Spring Boot, React, Flutter, and Firebase. Experienced in deploying robust backend systems, crafting responsive UIs, and leveraging DevOps tools like Docker, Kubernetes, and Helm. Passionate about delivering real-world solutions through clean, maintainable code and continuous learning.

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

        {/* <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        /* Experience 
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              IN2
            </span>
            <span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-1 italic'> Full-Stack Engineer <span className='px-2'>|</span>October 2023 - Present</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Spearheading the development of end-to-end solutions using Angular for the frontend and Java with Spring Boot for the backend.
            </li>
            <li>
            Identified and resolved critical bugs promptly, ensuring the uninterrupted stability and reliability of mission-critical applications.
            </li>
            <li>
            Implemented advanced debugging techniques, streamlining the development process and reducing time-to-resolution.
            </li>
            <li>
            Played a key role in the development of new features and enhancements, consistently adhering to best practices and coding standards.
            </li>
            <li>
            Collaborated seamlessly with cross-functional teams, contributing to on-time delivery of high-quality solutions.
            </li>
            <li>
            Implemented Liquibase for systematic database schema management, maintaining version control and ensuring consistent database changes.
            </li>
            <li>
            Led database migration efforts, providing critical support for seamless updates and enhancements.
            </li>
            <li>
            Successfully integrated and optimized third-party APIs, expanding the functionality of applications and improving overall performance.
            </li>
            <li>
            Evaluated and selected APIs based on project requirements, demonstrating a deep understanding of integration complexities.
            </li>
            <li>
            Actively collaborated with team members to achieve project goals, contributing valuable insights during code reviews.
            </li>
            <li>
            Participated in daily stand-up meetings, fostering a collaborative environment and ensuring effective communication within the team.
            </li>
            <li>
            Adapted seamlessly to Agile methodologies, playing a pivotal role in sprint planning, retrospectives, and ensuring the timely delivery of software solutions.
            </li>
            <li>
            Demonstrated flexibility in responding to evolving project requirements and maintaining a focus on iterative development.
            </li>
            <li>
            Proactively pursued ongoing learning initiatives, staying abreast of the latest technologies and integrating them into projects for enhanced efficiency.
            </li>
            <li>
            Rapidly adapted to changing project dynamics, showcasing a commitment to continuous improvement.
            </li>
            <li>
            Maintained meticulous documentation for the codebase, configurations, and API integrations, facilitating knowledge transfer and future collaboration.
            </li>
            <li>
            Applied a strong analytical mindset and problem-solving skills to address complex issues efficiently, contributing to the overall stability of the software ecosystem.
            </li>
          </ul>
        </div>

        
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              BEANZ
            </span>
            <span className='px-2'>|</span>Abu Dhabi Emirate, United Arab Emirates
          </p>
          <p className='py-1 italic'> Software Engineer <span className='px-2'>|</span>July 2023 - October 2023</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Developed dynamic and responsive user interfaces using ReactJS, TypeScript, and Tailwind CSS.
            </li>
            <li>
            Collaborated remotely with a cross-functional team, utilizing tools such as Jira, Bitbucket, and Git for version control and project tracking.
            </li>
            <li>
            Implemented multilingual support, including Arabic language, using the React i18n library, enhancing user experiences for a diverse audience.
            </li>
            <li>
            Dockerized web applications for streamlined deployment, ensuring consistency and reliability across various environments.
            </li>
            <li>
            Contributed to the successful development and deployment of various web applications and projects, ensuring optimal performance, accessibility, and efficient containerization.
            </li>
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
            <li>
              Used various Backend technologies including Laravel, PhpMyAdmin, Express.js, MongoDB,
              Postman API, REST APIs, API Development, SQLite, Node.js, PHP.
            </li>
            <li>
              Developed the Frontend of several projects using various libraries and frameworks such as
              React.js, HTML5, Cascading Style Sheets (CSS), JavaScript, React Native.
            </li>
            <li>
              Worked on administering and maintaining the server hardware and software using LAMP Stack
              and Linux.
            </li>
            <li>
              Implemented Docker to containerize applications, ensuring consistent deployment across
              different environments.
            </li>
            <li>
              Applied the AGILE Methodology of Project Management to plan, organize, and control the flow of
              work through my projects.
            </li>
            <li>
              Worked on WordPress, a Content Management System, that allows users to create, manage and
              publish digital content, typically on the web.
            </li>
          </ul>
        </div> */}

<h5 className='text-center underline text-[18px] py-4'>
  Professional Experience
</h5>

{/* IN2 Experience */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>IN2</span>
    <span className='px-2'>|</span>Beirut, Lebanon
  </p>
  <p className='py-1 italic'>Full-Stack Engineer <span className='px-2'>|</span>October 2023 – Present</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Developed end-to-end enterprise solutions using Angular and Spring Boot.</li>
    <li>Integrated biometric systems including ZKTeco BioTime, BioSecurity, and BioAccess for time and access management.</li>
    <li>Implemented Liquibase for schema version control and managed database migrations.</li>
    <li>Resolved critical bugs and performance issues using advanced debugging techniques.</li>
    <li>Integrated and optimized third-party APIs to extend system capabilities.</li>
    <li>Participated in Agile ceremonies and collaborated closely with cross-functional teams.</li>
    <li>Maintained clean, well-documented code and contributed actively to code reviews.</li>
  </ul>
</div>

{/* Merix Experience */}
<div className='py-6'>
  <p className='italic'>
  <span className='font-bold italic'>Freelance (Self-Employed)</span>
  {/* <span className='px-2'>|</span>Remote */}
    {/* <span className='font-bold italic'>Merix</span>
    <span className='px-2'>|</span>merixlb.com */}
  </p>
  <p className='py-1 italic'>Freelance Software Engineer <span className='px-2'>|</span>October 2021 – Present</p>
  {/* <p className='py-1 italic'>Co-founder & Software Engineer <span className='px-2'>|</span>October 2023 – Present</p> */}
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Delivered full-stack mobile and web applications from design to deployment.</li>
    <li>Collaborated with clients to define technical requirements and build custom solutions.</li>
    <li>Built scalable systems using Spring Boot, Angular, Flutter, React, and Firebase.</li>
    <li>Integrated REST APIs, payment gateways, Firebase Auth, and Google Maps services.</li>
    <li>Deployed apps using Docker, Kubernetes, AWS, and Hostinger.</li>
    <li>Notable Projects:
      <ul className='list-disc list-inside ml-4'>
        <li><strong>Quest It:</strong> A mobile app and web dashboard connecting users with freelance service providers.</li>
        <li><strong>TreatYouBatter:</strong> A business management platform for product & service oversight with role-based access and real-time dashboards.</li>
      </ul>
    </li>
  </ul>
</div>

{/* BEANZ Experience */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>BEANZ</span>
    <span className='px-2'>|</span>Abu Dhabi Emirate, United Arab Emirates (Remote)
  </p>
  <p className='py-1 italic'>Software Engineer <span className='px-2'>|</span>July 2023 – October 2023</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Developed responsive UIs using ReactJS, TypeScript, and Tailwind CSS.</li>
    <li>Enabled multilingual support using React i18n, including Arabic localization.</li>
    <li>Dockerized applications for consistent, production-grade deployments.</li>
    <li>Collaborated remotely with a cross-functional team using Jira and Bitbucket.</li>
    <li>Delivered performant, accessible, and scalable web applications across multiple environments.</li>
  </ul>
</div>

{/* Codi Tech Experience */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>Codi Tech</span>
    <span className='px-2'>|</span>Beirut, Lebanon
  </p>
  <p className='py-1 italic'>Full-Stack Developer <span className='px-2'>|</span>Nov 2022 – October 2023</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Developed full-stack web apps using Laravel, Express.js, Node.js, and MongoDB.</li>
    <li>Built frontend interfaces with React.js, React Native, HTML5, and JavaScript.</li>
    <li>Managed WordPress-based websites and implemented custom CMS features.</li>
    <li>Containerized applications using Docker and maintained LAMP stack servers.</li>
    <li>Practiced Agile project management and contributed to sprint planning and task tracking.</li>
  </ul>
</div>

{/* Teaching Experience */}
<div className='py-6'>
  <p className='italic'>
    <span className='font-bold italic'>Lebanese University (Self-Employed)</span>
    <span className='px-2'>|</span>Beirut, Lebanon
  </p>
  <p className='py-1 italic'>University Tutor <span className='px-2'>|</span>July 2021 – Present</p>
  <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
    <li>Delivered private tutoring sessions to university students in technical subjects.</li>
    <li>Specialized in Data Structures (C), Algorithms, System Analysis, Web Development, and .NET applications.</li>
    <li>Helped students build practical project skills and pass core programming courses.</li>
    <li>Provided guidance on database modeling, UML, and problem-solving techniques.</li>
  </ul>
</div>



        {/* Education */}
        <div className='py-6'>
          {/* <h5 className='text-center underline text-[18px] py-4'>
            Education
          </h5>
          <p className='py-2'>
            <span className='font-bold'>Lebanese University</span>
            <p className='py-2'><span className='font-bold'>Master’s in Management Information Systems</span> <span className='px-2'>|</span> Lebanese University, Beirut <span className='px-2'>|</span> 2023 – 2024</p>
            </p>
          <p className='py-2'>
            <span className='font-bold'>Lebanese University</span>
            <p className='py-2'><span className='font-bold'>Bachelor’s in Management Information Systems</span> <span className='px-2'>|</span> Lebanese University, Beirut <span className='px-2'>|</span> 2019 – 2022</p>
            </p> */}
            <h5 className='text-center underline text-[18px] py-4'>Education</h5>
<p className='py-2'><span className='font-bold'>Master’s in Management Information Systems</span> <span className='px-2'>|</span> Lebanese University, Beirut <span className='px-2'>|</span> 2022 – 2024</p>
<p className='py-2'><span className='font-bold'>Bachelor’s in Management Information Systems</span> <span className='px-2'>|</span> Lebanese University, Beirut <span className='px-2'>|</span> 2019 – 2022</p>

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
