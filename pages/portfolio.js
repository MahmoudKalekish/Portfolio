import Image from 'next/image';
import React from 'react';
import portfolioImg from '../public/assets/projects/portfolio.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className='w-screen h-[50vh] relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={portfolioImg}
                    alt="Mahmoud Kalekish Full Stack Portfolio Screenshot"
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Portfolio App</h2>
                    <h3>NextJS / TailwindCss</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        I built this app using NextJS and TailwindCss.
                    </p>
                    <p>Allow me to introduce my comprehensive portfolio, which encompasses 
                        my skill set, detailed resume, and an impressive collection of projects 
                        I have successfully contributed to, providing a clear demonstration of my abilities and accomplishments.
                    </p>
                    {/* <a
                        href='https://github.com/MahmoudKalekish/Youtube-Clone'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a> */}
                    <a
                        href='https://mahmoud-kalekish.vercel.app/'
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
                                <RiRadioButtonFill className='pr-1' /> NextJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> TailwindCSS
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

export default Portfolio;
