import Image from 'next/image';
import React from 'react';
import avonImg from '../public/assets/projects/avon.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Avon = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[50vh] relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={avonImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>AVON</h2>
                    <h3>ReactJS / Bootstrap / NodeJS / ExpressJS / MongoDB</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I built this app using the MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB).
                    </p>
                    <p>An e-commerce website to sell facial and skin-care products for customers
                        worldwide. The website includes various categories and an add to cart feature.</p>
                    {/* <a
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a> */}
                    <a
                        href='https://avon-skin-care.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>

                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1 '>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> ReactJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Bootstrap
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> NodeJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> ExpressJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> MongoDB
                            </p>

                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default Avon;
