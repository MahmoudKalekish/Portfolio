import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';
import Footer from '../components/Footer';

const resume = () => {
  return (
    <>
      <Head>
        <title>Mahmoud | Resume</title>
        <meta
          name='description'
          content='I’m a full-stack web developer specializing in building responsive and scalable web applications.'
        />
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
          Full stack web developer with experience in building responsive and scalable web applications
          using the MERN stack and AGILE development methodologies. Proficient in HTML, C++, C#,
          CSS, JavaScript, Java, Spring Boot, ReactJS, PHP, PL/SQL, Laravel, NodeJS, ExpressJS and MongoDB.
          Strong understanding of web development principles and a passion for creating user-friendly
          and visually appealing websites.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
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
          </p>
          <p className='py-2'>
            <span className='font-bold'>Cloud Deployment Platforms</span>
            <span className='px-2'>|</span> Netlify
            <span className='px-2'>|</span> Surge
            <span className='px-2'>|</span> Render
            <span className='px-2'>|</span> Railway
            <span className='px-2'>|</span> Vercel

          </p>
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
        </div>


        {/* Education */}
        <div className='py-6'>
          <h5 className='text-center underline text-[18px] py-4'>
            Education
          </h5>
          <p className='py-2'>
            <span className='font-bold'>Lebanese University</span>
            <span className='px-2'>|</span>BA in Management Information System<span className='px-2'>|</span>Beirut, Lebanon
          </p>
          <p className='py-2'>
            <span className='font-bold'>Lebanese University</span>
            <span className='px-2'>|</span>MA in Management Information System<span className='px-2'>|</span>Beirut, Lebanon
          </p>
        </div>

        {/* Languages */}
        <div className='py-6'>
          <h5 className='text-center underline text-[18px] py-4'>
            Languages
          </h5>
          <p className='py-2'>
            Native in Arabic; Proficient in English; and Proficient in French
          </p>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default resume;
