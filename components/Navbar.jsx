import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  // const [navBg, setNavBg] = useState('#ecf0f3');
  // const [navBg, setNavBg] = useState('#C4DFDF');
  const [navBg, setNavBg] = useState('white');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };



  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);




  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-white'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          {/* <a> */}
          <Image
            src={NavLogo}
alt='Mahmoud Kalekish Logo'
            width='125'
            height='50'
            className='cursor-pointer p-[10px]'
          />
          {/* </a> */}
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden xl:flex'>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/'>Home</Link>
              <div className='btm_brdr'></div>
            </li>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/#about'>About</Link>
              <div className='btm_brdr'></div>
            </li>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/#skills'>Skills</Link>
              <div className='btm_brdr'></div>
            </li>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/#projects'>Projects</Link>
              <div className='btm_brdr'></div>
            </li>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/certifications'>Certifications</Link>
              <div className='btm_brdr'></div>
            </li>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/recommendations'>Recommendations</Link>
              <div className='btm_brdr'></div>
            </li>
          
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/resume'>Resume</Link>
              <div className='btm_brdr'></div>
            </li>
            <li className='ml-6 text-sm uppercase group relative li_wrp'>
              <Link href='/#contact'>Contact</Link>
              <div className='btm_brdr'></div>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='xl:hidden cursor-pointer'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'xl:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              // ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[white] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500 '
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                {/* <a> */}
                <Image
                  src={NavLogo}
                  width='87'
                  height='35'
      alt='Mahmoud Kalekish Logo'
                  className='ml-[-5px]'
                />
                {/* </a> */}
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3  cursor-pointer  '
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Home
                  <div className='btm_brdr'></div>

                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  About
                  <div className='btm_brdr'></div>

                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Skills
                  <div className='btm_brdr'></div>

                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Projects
                  <div className='btm_brdr'></div>

                </li>
              </Link>
              <Link href='/certifications'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Certifications
                  <div className='btm_brdr'></div>

                </li>
              </Link>
              <Link href='/recommendations'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Recommendations
                  <div className='btm_brdr'></div>

                </li>
              </Link>
             
              <Link href='/resume'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Resume
                  <div className='btm_brdr'></div>

                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm group relative li_wrp'>
                  Contact
                  <div className='btm_brdr'></div>

                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/mahmoud-kalekish/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/MahmoudKalekish'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                {/* <Link href='/#contact'> */}
                <a
              href='mailto:mahmoudkalekish18@gmail.com'
              // target='_blank'
              rel='noreferrer'
            >
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                  </a>
                {/* </Link> */}
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;