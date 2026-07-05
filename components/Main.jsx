import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Main = () => {
  return (
    <section id='home' className='w-full min-h-screen text-center flex items-center pt-24 sm:pt-28 pb-8' aria-labelledby='hero-heading'>
      <div className='max-w-[1240px] w-full mx-auto p-2'>
        <div className='animate-fade-up'>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 id='hero-heading' className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Mahmoud Kalekish</span>
          </h1>
          <h2 className='py-2 text-gray-700'>
            Full-Stack Software Engineer <span className='text-[#5651e5]'>&amp;</span> PhD Researcher in Generative AI
          </h2>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          With 4+ years of experience, I build scalable web and mobile applications using Angular, Spring Boot, React, Flutter, and modern DevOps practices like Docker and Kubernetes —
          while advancing research in Generative AI and Digital Twins. Driven by clean architecture, performance, and problem-solving, I bring real-world ideas to life, from production systems to research-backed innovation.
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
            <a
              href='mailto:mahmoudkalekish18@gmail.com'
              rel='noreferrer'
              aria-label='Send email to Mahmoud Kalekish'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail aria-hidden='true' />
              </div>
            </a>
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
          <Link href='/#about' aria-label='Scroll down to the About section'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 animate-bounce'>
                <HiOutlineChevronDoubleDown
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default Main;