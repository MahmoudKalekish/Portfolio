import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import MongoDB from '../public/assets/skills/mongo.png';
import Nodejs from '../public/assets/skills/node.png';
import Laravel from '../public/assets/skills/laravel.png';
import Postman from '../public/assets/skills/postman.png';
import Docker from '../public/assets/skills/Docker.png';
import MUI from '../public/assets/skills/mui.png';
import Redux from '../public/assets/skills/redux.png';
import TS from '../public/assets/skills/ts.png';
import PHP from '../public/assets/skills/php.png';
import MySQL from '../public/assets/skills/mysql.png';
import c from '../public/assets/skills/c++.png';
import csharp from '../public/assets/skills/csharp.png';
import wordpress from '../public/assets/skills/wordpress.png';
import java from '../public/assets/skills/java.png';
import net from '../public/assets/skills/net.png';
import angular from '../public/assets/skills/angular.png';
import springboot from '../public/assets/skills/springboot.png';
import android from '../public/assets/skills/android.png';
import redis from '../public/assets/skills/redis.png';
import kubernetes from '../public/assets/skills/kubernetes.png';
import Navicat from '../public/assets/skills/navicat.jpg';
import flutter from '../public/assets/skills/flutter.png';
import dart from '../public/assets/skills/dart.png';
import ditto from '../public/assets/skills/ditto.png';
import hono from '../public/assets/skills/hono.png';
import grafana from '../public/assets/skills/grafana.png';
import influx from '../public/assets/skills/influx.png';
import swagger from '../public/assets/skills/swagger.png';
import figma from '../public/assets/skills/figma.png';
import helm from '../public/assets/skills/helm.png';
import hostinger from '../public/assets/skills/hostinger.png';
import junit from '../public/assets/skills/junit.png';
import jwt from '../public/assets/skills/jwt.png';
import nginx from '../public/assets/skills/nginx.png';
import iot from '../public/assets/skills/iot.png';
import mosquitto from '../public/assets/skills/mosquitto.png';
import telegraf from '../public/assets/skills/telegraf.png';
import kafka from '../public/assets/skills/kafka.png';
import carla from '../public/assets/skills/carla.png';
import unity from '../public/assets/skills/unity.png';
import shopify from '../public/assets/skills/shopify.png';
// Skill data with proper alt text for SEO
const skillsData = [
  { image: Html, name: 'HTML', alt: 'HTML5 programming language logo' },
  { image: Css, name: 'CSS', alt: 'CSS3 styling language logo' },
  { image: Javascript, name: 'JavaScript', alt: 'JavaScript programming language logo' },
  { image: ReactImg, name: 'React', alt: 'React JavaScript library logo' },
  { image: Tailwind, name: 'Tailwind', alt: 'Tailwind CSS framework logo' },
  { image: Nodejs, name: 'NodeJS', alt: 'Node.js runtime environment logo' },
  { image: MongoDB, name: 'MongoDB', alt: 'MongoDB NoSQL database logo' },
  { image: Laravel, name: 'Laravel', alt: 'Laravel PHP framework logo' },
  { image: Firebase, name: 'Firebase', alt: 'Firebase backend platform logo' },
  { image: Github, name: 'Github', alt: 'GitHub version control platform logo' },
  { image: Postman, name: 'Postman', alt: 'Postman API testing tool logo' },
  { image: Docker, name: 'Docker', alt: 'Docker containerization platform logo' },
  { image: MUI, name: 'Material UI', alt: 'Material-UI React component library logo' },
  { image: Redux, name: 'Redux', alt: 'Redux state management library logo' },
  { image: TS, name: 'TypeScript', alt: 'TypeScript programming language logo' },
  { image: PHP, name: 'PHP', alt: 'PHP server-side scripting language logo' },
  { image: MySQL, name: 'MySQL', alt: 'MySQL relational database logo' },
  { image: c, name: 'C++', alt: 'C++ programming language logo' },
  { image: csharp, name: 'C#', alt: 'C# programming language logo' },
  { image: wordpress, name: 'WordPress', alt: 'WordPress content management system logo' },
  { image: angular, name: 'Angular', alt: 'Angular web framework logo' },
  { image: java, name: 'Java', alt: 'Java programming language logo' },
  { image: springboot, name: 'Spring Boot', alt: 'Spring Boot Java framework logo' },
  { image: net, name: '.Net', alt: '.NET development framework logo' },
  { image: NextJS, name: 'Next', alt: 'Next.js React framework logo' },
  { image: android, name: 'Android Studio', alt: 'Android Studio IDE logo' },
  { image: redis, name: 'Redis', alt: 'Redis in-memory database logo' },
  { image: kubernetes, name: 'Kubernetes', alt: 'Kubernetes container orchestration logo' },
  { image: Navicat, name: 'Navicat', alt: 'Navicat database management tool logo' },
  { image: flutter, name: 'Flutter', alt: 'Flutter mobile development framework logo' },
  { image: dart, name: 'Dart', alt: 'Dart programming language logo' },
  { image: ditto, name: 'Eclipse Ditto', alt: 'Eclipse Ditto IoT platform logo' },
  { image: hono, name: 'Eclipse Hono', alt: 'Eclipse Hono IoT messaging logo' },
  { image: grafana, name: 'Grafana', alt: 'Grafana monitoring and visualization logo' },
  { image: influx, name: 'InfluxDB', alt: 'InfluxDB time-series database logo' },
  { image: helm, name: 'Helm', alt: 'Helm Kubernetes package manager logo' },
  { image: figma, name: 'Figma', alt: 'Figma design and prototyping tool logo' },
  { image: junit, name: 'JUnit', alt: 'JUnit testing framework logo' },
  { image: jwt, name: 'JWT', alt: 'JSON Web Token authentication logo' },
  { image: nginx, name: 'Nginx', alt: 'Nginx web server logo' },
  { image: swagger, name: 'Swagger', alt: 'Swagger API documentation tool logo' },
  { image: hostinger, name: 'Hostinger', alt: 'Hostinger web hosting service logo' },
  { image: iot, name: 'Internet Of Things', alt: 'Internet of Things technology logo' },
  { image: mosquitto, name: 'Mosquitto', alt: 'Eclipse Mosquitto MQTT broker logo' },
  { image: telegraf, name: 'Telegraf', alt: 'Telegraf metrics collection agent logo' },
  { image: kafka, name: 'Kafka ML', alt: 'Apache Kafka streaming platform logo' },
  { image: carla, name: 'Carla Simulator', alt: 'CARLA autonomous driving simulator logo' },
  { image: unity, name: 'Unity Hub', alt: 'Unity game development engine logo' },
  { image: shopify, name: 'Shopify', alt: 'Shopify e-commerce platform logo' },
];

const SkillItem = ({ skill, index }) => (
  <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
      <div className='m-auto'>
        <Image 
          src={skill.image} 
          width={64} 
          height={64} 
          alt={skill.alt}
          loading={index < 8 ? 'eager' : 'lazy'} // Load first 8 skills eagerly
          quality={85}
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h3>{skill.name}</h3>
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id='skills' className='w-full py-16' aria-labelledby='skills-heading'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 id='skills-heading' className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skillsData.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
