import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaRocket, FaUsers, FaCode, FaShieldAlt, FaPalette, FaCloud } from 'react-icons/fa';
import { BiCalendar, BiCode } from 'react-icons/bi';
import { MdBusiness, MdTrendingUp } from 'react-icons/md';
import ProjectSEO from '../components/ProjectSEO';

const Merix = () => {
  const projectData = {
    title: "Merix - Digital Solutions Company",
    description: "Technology and digital solutions company co-founded to deliver modern, scalable, and user-friendly software products. Specializing in web development, mobile apps, cloud solutions, and digital transformation.",
    image: "/assets/projects/merix.png",
    technologies: ["Java", "Spring Boot", "Angular", "React", "Node.js", "Flutter", "Dart", "Firebase", "Docker", "Vercel"],
    liveUrl: "https://merixlb.com",
    // githubUrl: "#", // Company projects are typically private
    category: "Digital Solutions Company",
    year: "2021 - Present"
  };

  const services = [
    {
      icon: <FaCode className="text-3xl text-blue-600" />,
      title: "Web Development",
      description: "Full-stack applications using Java, Spring Boot, Angular, React, Node.js, and modern web technologies"
    },
    {
      icon: <FaRocket className="text-3xl text-green-600" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using Flutter, Dart, and cutting-edge mobile development stacks"
    },
    {
      icon: <FaCloud className="text-3xl text-purple-600" />,
      title: "Cloud & DevOps",
      description: "Deployment, hosting, and optimization on Firebase, Hostinger, Vercel, Docker, and cloud platforms"
    },
    {
      icon: <FaPalette className="text-3xl text-pink-600" />,
      title: "UI/UX Design",
      description: "Clean, user-centered interfaces with modern design approaches and intuitive user experiences"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-600" />,
      title: "Security & Testing",
      description: "API testing, ethical hacking practices, and robust security implementations for all projects"
    },
    {
      icon: <MdBusiness className="text-3xl text-orange-600" />,
      title: "Digital Transformation",
      description: "Helping businesses accelerate their digital journey with scalable and reliable solutions"
    }
  ];

  const sampleProjects = [
    {
      name: "Treat You Batter",
      description: "Coffee shop management dashboard with Spring Boot + Angular",
      tech: ["Spring Boot", "Angular", "MySQL"],
      link: "/treat-you-better"
    },
    {
      name: "Quest It",
      description: "Canadian service marketplace mobile app",
      tech: ["Flutter", "Node.js", "Firebase"],
      link: "/quest-it"
    }
  ];

  const companyHighlights = [
    "Co-founded technology company focused on digital solutions",
    "International client collaborations and partnerships",
    "End-to-end software development lifecycle management",
    "Academic research-level expertise with practical engineering",
    "Scalable solutions for startups, SMEs, and enterprises",
    "Modern tech stack with cutting-edge development practices",
    "Affordable and reliable digital product delivery",
    "Bridge between local businesses and advanced technology"
  ];

  const techStack = [
    "Java & Spring Boot", "Angular & React", "Node.js & Express", "Flutter & Dart",
    "Firebase & Cloud Services", "Docker & DevOps", "MySQL & MongoDB", "API Development",
    "Mobile App Development", "UI/UX Design", "Security Testing", "Cloud Deployment"
  ];

  return (
    <>
      <ProjectSEO 
        projectName={projectData.title}
        description={projectData.description}
        imageUrl={projectData.image}
        projectUrl="/merix"
        technologies={projectData.technologies}
        demoUrl={projectData.liveUrl}
      />
      
      <div className='w-full overflow-x-hidden'>
        {/* Header Section */}
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src='/assets/projects/merix-logo-black.png'
            alt='Merix Digital Solutions Company Website and Branding'
            priority
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h1 className='py-2'>Merix</h1>
            <h2 className='text-2xl'>Digital Solutions Company</h2>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className='flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 max-w-[1240px] mx-auto mt-4' aria-label="Breadcrumb">
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <Link href='/' className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600'>
                Home
              </Link>
            </li>
            <li>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <Link href='/#projects' className='text-sm font-medium text-gray-700 hover:text-blue-600'>
                  Projects
                </Link>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <span className='mx-2 text-gray-400'>/</span>
                <span className='text-sm font-medium text-gray-500'>Merix</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 overflow-x-hidden'>
          {/* Main Content */}
          <div className='col-span-4'>
            {/* Company Overview */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <div className='flex items-center mb-6'>
                <MdBusiness className='text-4xl text-blue-600 mr-4' />
                <div>
                  <h2 className='text-3xl font-bold text-gray-800'>About Merix</h2>
                  <div className='flex items-center text-gray-600 mt-2'>
                    <BiCalendar className='mr-2' />
                    <span className='mr-4'>{projectData.year}</span>
                    <BiCode className='mr-2' />
                    <span>{projectData.category}</span>
                  </div>
                </div>
              </div>
              
              <p className='text-gray-700 leading-relaxed mb-6'>
                Merix is a technology and digital solutions company that I co-founded to deliver modern, scalable, and 
                user-friendly software products. We focus on building high-quality web and mobile applications, providing 
                custom software development, and helping businesses accelerate their digital transformation journey.
              </p>

              <p className='text-gray-700 leading-relaxed mb-6'>
                Our mission is to bridge the gap between local businesses and cutting-edge technology, empowering startups, 
                SMEs, and enterprises with affordable, reliable, and scalable digital products that turn innovative ideas 
                into real-world solutions.
              </p>

              <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3 flex items-center'>
                  <MdTrendingUp className='mr-3 text-blue-600' />
                  Company Vision
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Merix was created to bridge the gap between local businesses and cutting-edge technology. We aim to empower 
                  organizations with affordable, reliable, and scalable digital products — turning ideas into real-world solutions 
                  that drive business growth and innovation.
                </p>
              </div>
            </div>

            {/* Services We Offer */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-8'>What We Do</h2>
              <div className='grid md:grid-cols-2 gap-6'>
                {services.map((service, index) => (
                  <div key={index} className='flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300'>
                    <div className='mr-4 mt-1'>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>{service.title}</h3>
                      <p className='text-gray-600'>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Projects */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-8'>Sample Projects</h2>
              <div className='grid md:grid-cols-1 gap-6'>
                {sampleProjects.map((project, index) => (
                  <div key={index} className='bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300'>
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-gray-800 mb-2'>{project.name}</h3>
                        <p className='text-gray-600 mb-4'>{project.description}</p>
                        <div className='flex flex-wrap gap-2'>
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className='bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full'>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href={project.link} className='ml-4 text-blue-600 hover:text-blue-800 transition-colors duration-300'>
                        <FaExternalLinkAlt size={20} />
                      </Link>
                    </div>
                  </div>
                ))}
                
                {/* Additional Projects Note */}
                {/* <div className='bg-gray-100 rounded-lg p-6 text-center'>
                  <p className='text-gray-600 italic'>
                    ⚙️ Additional internal tools and client projects across web and mobile development
                  </p>
                </div> */}
              </div>
            </div>

            {/* Company Impact */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Company Impact & Achievements</h2>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Key Highlights</h3>
                <div className='grid md:grid-cols-1 gap-3'>
                  {companyHighlights.map((highlight, index) => (
                    <div key={index} className='flex items-center p-3 bg-gray-50 rounded-lg'>
                      <RiRadioButtonFill className='text-blue-600 mr-3' />
                      <span className='text-gray-700'>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🌟 Our Approach</h3>
                <p className='text-gray-700 leading-relaxed'>
                  Merix combines academic research-level expertise with hands-on engineering experience to deliver products 
                  that scale. We pride ourselves on understanding both the technical complexities and business requirements, 
                  ensuring every solution we build drives real value for our clients.
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Our Technology Stack</h2>
              <div className='grid md:grid-cols-3 gap-4'>
                {techStack.map((tech, index) => (
                  <div key={index} className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 text-center'>
                    <span className='text-gray-700 font-medium'>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-8'>
              <h2 className='text-3xl font-bold mb-4'>🚀 Ready to Transform Your Business?</h2>
              <p className='text-lg leading-relaxed mb-6'>
                Merix has already collaborated with international clients, delivered innovative projects, and supported 
                organizations with end-to-end software development. Let us help you turn your ideas into scalable digital solutions.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href="https://merixlb.com"
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300'
                >
                  <FaExternalLinkAlt className='mr-2' />
                  Visit Merix Website
                </a>
                <Link href='/#contact' className='inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300'>
                  <FaUsers className='mr-2' />
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                {projectData.technologies.map((tech, index) => (
                  <p key={index} className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> {tech}
                  </p>
                ))}
              </div>
            </div>
            
            <div className='p-2 mt-6'>
              <p className='text-center font-bold pb-2'>Company Links</p>
              <div className='flex flex-col items-center justify-center'>
                <a
                  href={projectData.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full'
                >
                  <button className='px-8 py-2 mt-4 mr-8 w-full flex items-center justify-center'>
                    <FaExternalLinkAlt className='mr-2' />
                    Visit Merix
                  </button>
                </a>
              </div>
            </div>

            {/* Company Info */}
            <div className='p-2 mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg'>
              <p className='text-center font-bold pb-2 text-gray-800'>Company Status</p>
              <div className='text-center text-sm text-gray-700'>
                <p className='mb-2'>🚀 <strong>Active</strong></p>
                <p className='mb-2'>👥 <strong>Co-founder</strong></p>
                <p>🌍 <strong>International Clients</strong></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex justify-center pb-12'>
          <Link href='/#projects'>
            <p className='underline cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300'>
              Back to Projects
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Merix;
