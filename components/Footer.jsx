import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/footer.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center bg-black text-white px-4 md:px-20 pb-4 md:pb-0'>
      <div className='mb-4 md:mb-0'>
        <div className='w-20 md:w-30 mx-auto'>
        <Link href='/'>
          <Image src={logo} alt="footer pic" layout="responsive" />
          </Link>
        </div>
      </div>
      <p className='mb-4 md:mb-0 text-center md:text-left'>
        <a href="https://www.instagram.com/mahmoud_kalekish/?igshid=ZGUzMzM3NWJiOQ%3D%3D" target='_blank'>
          © 2023 @mahmoud_kalekish
        </a>
      </p>
      <div className='flex gap-4 md:gap-10 justify-center md:justify-start'>
        <a
          href='https://www.facebook.com/people/Mahmoud-Kalekish/pfbid0t2EEG3MWgUc1aVb66vpHkYN4H6Pd8ZvJ6Jz2b3Dsma1zJsHacXmG3tzDVVaHw9sKl/?mibextid=ZbWKwL'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebook />
        </a>
        <a
          href='https://www.instagram.com/mahmoud_kalekish/?igshid=ZGUzMzM3NWJiOQ%3D%3D'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram />
        </a>
        <a
          href='https://www.linkedin.com/in/mahmoud-kalekish/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/MahmoudKalekish'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer
