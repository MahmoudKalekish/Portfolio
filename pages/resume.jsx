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
          <h2 className='text-center'>Mahmoud Kalekish</h2>

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
          CSS, JavaScript, Java, ReactJS, PHP, PL/SQL, Laravel, NodeJS, ExpressJS and MongoDB.
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
            <span className='px-2'>|</span> EmberJS
            <span className='px-2'>|</span> ReactNative
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
              BEANZ
            </span>
            <span className='px-2'>|</span>Abu Dhabi Emirate, United Arab Emirates
          </p>
          <p className='py-1 italic'> Web Developer <span className='px-2'>|</span>July 2023 - Present</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Utilized ReactJS, TypeScript, and Tailwind CSS to develop dynamic and responsive user interfaces.
            </li>
            <li>
              Collaborated remotely with a team using Jira, Bitbucket, and Git for version control and project tracking.
            </li>
            <li>
              Contributed to the development of various web applications and projects.
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
