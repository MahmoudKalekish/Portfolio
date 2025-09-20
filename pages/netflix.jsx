import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectSEO from '../components/ProjectSEO';

const netflix = () => {
  return (
    <>
      <ProjectSEO
        projectName="Netflix App Clone"
        description="A Netflix clone built with Next.js, Tailwind CSS, and Firebase. Features user authentication, movie data from TMDB API, horizontal sliding, and featured selections."
        technologies={['Next.js', 'Tailwind CSS', 'Firebase', 'TypeScript', 'TMDB API']}
        demoUrl="https://netflix-redesign-seven.vercel.app/login"
        githubUrl="https://github.com/MahmoudKalekish/Netflix-Redesign"
        imageUrl="https://mahmoud-kalekish.vercel.app/assets/projects/netflix.jpg"
        projectUrl="/netflix"
      />
      
      <article className='w-full overflow-hidden'>
      <div className='w-screen h-[50vh] relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden' />
        <Image
          className='absolute z-1'
          fill
          style={{ objectFit: 'cover' }}
          src={netflixImg}
          alt='Netflix App Clone - Next.js streaming application with Firebase authentication'
          priority
          quality={85}
        />
        <header className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h1 className='py-2'>Netflix App Clone</h1>
          <p className='text-lg'>Next.js / Tailwind CSS / Firebase</p>
        </header>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <nav aria-label='Breadcrumb' className='mb-4'>
            <ol className='flex space-x-2 text-sm text-gray-600'>
              <li><Link href='/' className='hover:text-[#5651e5]'>Home</Link></li>
              <li>/</li>
              <li><Link href='/#projects' className='hover:text-[#5651e5]'>Projects</Link></li>
              <li>/</li>
              <li className='text-gray-900'>Netflix App Clone</li>
            </ol>
          </nav>
          <p className='text-[#5651e5] text-sm uppercase tracking-wide'>Project</p>
          <h2 className='text-2xl font-bold mb-4'>Overview</h2>
          <p className='mb-4 text-gray-700 leading-relaxed'>
            I built this Netflix clone application using Next.js and deployed it on Vercel.
            This app features comprehensive user authentication with Firebase as well as the
            Firestore cloud storage database. The application pulls movie data from the TMDB movie API
            and displays different categories with horizontal sliding functionality and a featured selection system.
            The UI closely mimics Netflix&apos;s design with responsive layouts and smooth animations.
          </p>
          <div className='flex gap-4 mt-6'>
            <a
              href='https://github.com/MahmoudKalekish/Netflix-Redesign'
              target='_blank'
              rel='noreferrer'
              aria-label='View Netflix clone source code on GitHub'
            >
              <button className='px-8 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors'>View Code</button>
            </a>
            <a
              href='https://netflix-redesign-seven.vercel.app/login'
              target='_blank'
              rel='noreferrer'
              aria-label='View live demo of Netflix clone'
            >
              <button className='px-8 py-2 bg-[#5651e5] text-white rounded hover:bg-[#4a47d1] transition-colors'>Live Demo</button>
            </a>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects' className='col-span-full'>
          <p className='underline cursor-pointer hover:text-[#5651e5] transition-colors'>← Back to Projects</p>
        </Link>
      </div>
    </article>
    </>
  );
};

export default netflix;
