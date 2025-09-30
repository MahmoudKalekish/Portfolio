import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Main = () => {
  return (
    <section id='home' className='w-full h-screen text-center pt-20 md:pt-36' aria-labelledby='hero-heading'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center md:items-center items-start'>
        <div className='md:mt-16'>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 id='hero-heading' className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Mahmoud Kalekish</span>
          </h1>
          <h2 className='py-2 text-gray-700'>A Full-Stack Software Engineer</h2>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I build scalable web and mobile applications using Angular, Spring Boot, React, Flutter, and modern DevOps practices like Docker and Kubernetes.  
          Driven by clean architecture, performance, and problem-solving, I bring real-world ideas to life — from freelance projects to research-backed systems.
          </p>
          <nav aria-label='Social media links' className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/mahmoud-kalekish/'
              target='_blank'
              rel='noreferrer'
              aria-label='Visit Mahmoud Kalekish LinkedIn profile'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn aria-hidden='true' />
              </div>
            </a>
            <a
              href='https://github.com/MahmoudKalekish'
              target='_blank'
              rel='noreferrer'
              aria-label='Visit Mahmoud Kalekish GitHub profile'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub aria-hidden='true' />
              </div>
            </a>
            {/* <Link href='/#contact'> */}
            <a
              href='mailto:mahmoudkalekish18@gmail.com'
              rel='noreferrer'
              aria-label='Send email to Mahmoud Kalekish'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail aria-hidden='true' />
              </div>
              </a>
            {/* </Link> */}
            <Link href='/resume' aria-label='View Mahmoud Kalekish resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill aria-hidden='true' />
              </div>
            </Link>
          </nav>
          
          <a
    href='/Mahmoud-CV.pdf'
    download
    className='inline-block mt-6 px-6 py-2 border border-[#5651e5] text-[#5651e5] font-medium rounded-md hover:bg-[#5651e5] hover:text-white transition duration-300'
  >
    Download Resume
  </a>

          <div className='flex justify-center py-12 '>
          <Link href='/#about'>
            {/* <a> */}
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleDown
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            {/* </a> */}
          </Link>
        </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Main;