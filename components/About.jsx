import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/Blue.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I&rsquo;m Mahmoud Kalekish, Co-founder of <a href='https://merixlb.com' target='_blank' rel='noopener noreferrer' className='text-[#5651e5] hover:underline'>Merix</a> and a Full-Stack Software Engineer based in Beirut, Lebanon. I specialize in building scalable web and mobile applications using modern technologies like Angular, Spring Boot, React, Flutter, and Firebase — with solid backend systems and DevOps practices like Docker, Kubernetes, Helm, and Grafana.
          </p>
          <p className='py-2 text-gray-600'>
          Through Merix and my freelance work, I&rsquo;ve delivered projects for startups, contributed to AI-powered digital twin research, and led full-cycle product development in both professional and academic settings. Whether it&rsquo;s crafting responsive UIs, building robust APIs, or deploying distributed apps, I enjoy solving real-world problems through clean, maintainable code.
          </p>
          <p className='py-2 text-gray-600'>
          I hold a Bachelor&rsquo;s and Master&rsquo;s degree in Management Information Systems from the Lebanese University. Fluent in Arabic, English, and French — and currently learning German — I value clear communication, continuous learning, and collaborative teamwork. I&rsquo;m always open to new opportunities — whether it&rsquo;s full-time roles, freelance collaborations, or research-driven innovation.
    


          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
