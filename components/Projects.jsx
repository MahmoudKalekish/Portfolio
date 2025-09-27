import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/lights.png';
import joncoImg from '../public/assets/projects/jonco.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import dashboardImg from '../public/assets/projects/dashboard.png'
import avonImg from '../public/assets/projects/avon.png'
import nolimitsImg from '../public/assets/projects/nolimits.png'
import nourImg from '../public/assets/projects/nour.png'
import youtubeImg from '../public/assets/projects/youtube.png'
import enigmaImg from '../public/assets/projects/enigma.png';
import portfolioImg from '../public/assets/projects/portfolio.png';
import needImg from '../public/assets/projects/need.png';
import merixImg from '../public/assets/projects/merix.png';
import treatYouBetterImg from '../public/assets/projects/tyb-cookie.png';
import questItImg from '../public/assets/projects/quest-it.png';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full py-16'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Merix - Digital Solutions Company'
            backgroundImg={merixImg}
            projectUrl='/merix'
            tech='Full-Stack Solutions'
          />
          <ProjectItem
            title='Treat You Batter - Coffee Shop System'
            backgroundImg={treatYouBetterImg}
            projectUrl='/treat-you-better'
            tech='Spring Boot & Angular'
          />
          <ProjectItem
            title='Quest It - Service Marketplace'
            backgroundImg={questItImg}
            projectUrl='/quest-it'
            tech='Flutter & Firebase'
          />
          <ProjectItem
            title='Need'
            backgroundImg={needImg}
            projectUrl='/need'
            tech='MERN Stack'

          />

          <ProjectItem
            title='Lights Out'
            backgroundImg={propertyImg}
            projectUrl='/lights-out'
            tech='React JS'
          />
          <ProjectItem
            title='JONCO-MET Portfolio'
            backgroundImg={joncoImg}
            projectUrl='/jonco'
            tech='MERN Stack'

          />
          <ProjectItem
            title='Financial App'
            backgroundImg={dashboardImg}
            projectUrl='/dashboard'
            tech='LAMP Stack'

          />
          <ProjectItem
            title='AVON'
            backgroundImg={avonImg}
            projectUrl='/avon'
            tech='MERN Stack'

          />
          <ProjectItem
            title='No Limits'
            backgroundImg={nolimitsImg}
            projectUrl='/nolimits'
            tech='React JS & Strapi JS'

          />
          <ProjectItem
            title='Nour International'
            backgroundImg={nourImg}
            projectUrl='/nour'
            tech='WordPress'

          />
          <ProjectItem
            title='Youtube Clone'
            backgroundImg={youtubeImg}
            projectUrl='/youtube'
            tech='React JS'

          />
          <ProjectItem
            title='Enigma'
            backgroundImg={enigmaImg}
            projectUrl='/enigma'
            tech='Html, Css & JavaScript'

          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={portfolioImg}
            projectUrl='/portfolio'
            tech='Next JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='Next JS'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
