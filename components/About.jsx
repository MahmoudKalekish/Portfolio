import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/Blue.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center pt-16 '>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 pb-[15rem]'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a highly skilled and dedicated full stack web developer based in Beirut, Lebanon. 
          With a passion for creating responsive and visually appealing web applications, 
          I bring a wealth of knowledge and experience in the MERN stack and AGILE development methodologies. 
          I also have hands-on experience with Java Spring Boot for backend development and Angular for frontend development.


          </p>
          <p className='py-2 text-gray-600'>
          Throughout my professional journey, I have demonstrated expertise in various backend technologies, including Laravel,
           PhpMyAdmin, Express.js, MongoDB, and Node.js. I have also excelled in frontend development, utilizing libraries
            and frameworks such as React.js, HTML5, CSS, and JavaScript. My proficiency extends to other programming languages 
            such as C++, C#, and PHP, showcasing my versatility and adaptability in different technological landscapes.

          </p>
          <p className='py-2 text-gray-600'>
          Beyond my technical prowess, I hold a Bachelor and Masters degree in Management Information Systems from
           the Lebanese University. Fluent in Arabic, English, and French, I possess excellent communication skills,
            enabling me to collaborate effectively with cross-functional teams and clients from diverse backgrounds.



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
