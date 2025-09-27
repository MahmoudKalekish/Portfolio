import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaCoffee, FaChartLine, FaBell, FaShieldAlt } from 'react-icons/fa';
import { BiCalendar, BiCode } from 'react-icons/bi';
import ProjectSEO from '../components/ProjectSEO';

const TreatYouBetter = () => {
  const projectData = {
    title: "Treat You Batter - Coffee Shop Management System",
    description: "Full-stack management system built for a coffee shop to streamline day-to-day operations with centralized dashboard, invoice generation, inventory management, and real-time notifications.",
    image: "/assets/projects/TYB.png",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Spring Security", "JWT", "Hostinger"],
    liveUrl: "#", // Add actual URL when available
    githubUrl: "#", // Add actual GitHub URL when available
    category: "Full-Stack Web Application",
    year: "2024"
  };

  const features = [
    {
      icon: <FaCoffee className="text-3xl text-brown-600" />,
      title: "Intuitive Dashboard",
      description: "Modern, component-based UI with responsive dashboard design for admins and baristas"
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Invoice & Reporting",
      description: "Automatic invoice generation with export options (PDF/Excel) and financial reporting"
    },
    {
      icon: <FaBell className="text-3xl text-blue-600" />,
      title: "Real-time Notifications",
      description: "Instant alerts for new orders, low inventory, and invoice status updates"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-purple-600" />,
      title: "Secure Access Control",
      description: "Role-based access control with Spring Security and JWT authentication"
    }
  ];

  const technicalHighlights = [
    "Angular frontend with responsive design for tablet use in-store",
    "Java Spring Boot backend with robust API services",
    "MySQL database for transactions, invoices, and user management",
    "Spring Security with JWT for secure authentication",
    "Deployed on Hostinger with custom domain and HTTPS",
    "Real-time notification system for operational efficiency",
    "Export functionality for invoices (PDF/Excel formats)",
    "Role-based permissions for staff vs admin access"
  ];

  return (
    <>
      <ProjectSEO 
        projectName={projectData.title}
        description={projectData.description}
        imageUrl={projectData.image}
        projectUrl="/treat-you-better"
        technologies={projectData.technologies}
        demoUrl={projectData.liveUrl}
        githubUrl={projectData.githubUrl}
      />
      
      <div className='w-full overflow-x-hidden'>
        {/* Header Section */}
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src='/assets/projects/TYB.png'
            alt='Treat You Batter Coffee Shop Management System Dashboard'
            priority
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h1 className='py-2'>Treat You Batter</h1>
            <h2 className='text-2xl'>Coffee Shop Management System</h2>
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
                <span className='text-sm font-medium text-gray-500'>Treat You Batter</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
          {/* Main Content */}
          <div className='col-span-4'>
            {/* Project Overview */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <div className='flex items-center mb-6'>
                <FaCoffee className='text-4xl text-brown-600 mr-4' />
                <div>
                  <h2 className='text-3xl font-bold text-gray-800'>Project Overview</h2>
                  <div className='flex items-center text-gray-600 mt-2'>
                    <BiCalendar className='mr-2' />
                    <span className='mr-4'>{projectData.year}</span>
                    <BiCode className='mr-2' />
                    <span>{projectData.category}</span>
                  </div>
                </div>
              </div>
              
              <p className='text-gray-700 leading-relaxed mb-6'>
                Treat You Batter is a comprehensive full-stack management system designed specifically for coffee shop operations. 
                The platform provides a centralized dashboard that enables staff and administrators to efficiently handle customer 
                transactions, invoice generation, inventory management, and real-time operational notifications.
              </p>

              <p className='text-gray-700 leading-relaxed mb-6'>
                This project successfully replaced manual spreadsheet tracking with a modern, intuitive application that improved 
                operational efficiency and customer satisfaction. The system&apos;s real-time notification feature allows staff to 
                react instantly to new orders and inventory shortages, significantly reducing delays.
              </p>

              <div className='bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🎯 Project Impact</h3>
                <ul className='text-gray-700 space-y-2'>
                  <li>• Eliminated manual spreadsheet tracking with automated system</li>
                  <li>• Improved customer satisfaction through faster order processing</li>
                  <li>• Enhanced inventory management with real-time alerts</li>
                  <li>• Streamlined financial reporting and invoice generation</li>
                  <li>• Enabled remote access for staff through cloud deployment</li>
                </ul>
              </div>
            </div>

            {/* Key Features */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-8'>Key Features</h2>
              <div className='grid md:grid-cols-2 gap-6'>
                {features.map((feature, index) => (
                  <div key={index} className='flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300'>
                    <div className='mr-4 mt-1'>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>{feature.title}</h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Implementation */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Technical Implementation</h2>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Architecture & Stack</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='bg-blue-50 rounded-lg p-6'>
                    <h4 className='font-bold text-blue-800 mb-3'>Frontend</h4>
                    <p className='text-gray-700'>Angular framework with modern, component-based UI design. Responsive dashboard optimized for tablet use in-store environments.</p>
                  </div>
                  <div className='bg-green-50 rounded-lg p-6'>
                    <h4 className='font-bold text-green-800 mb-3'>Backend</h4>
                    <p className='text-gray-700'>Java Spring Boot providing robust, scalable API services and comprehensive business logic implementation.</p>
                  </div>
                  <div className='bg-purple-50 rounded-lg p-6'>
                    <h4 className='font-bold text-purple-800 mb-3'>Database</h4>
                    <p className='text-gray-700'>MySQL relational database handling transactions, invoices, user management, and inventory tracking.</p>
                  </div>
                  <div className='bg-orange-50 rounded-lg p-6'>
                    <h4 className='font-bold text-orange-800 mb-3'>Security</h4>
                    <p className='text-gray-700'>Spring Security with JWT authentication ensuring secure access control and role-based permissions.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Technical Highlights</h3>
                <div className='grid md:grid-cols-1 gap-3'>
                  {technicalHighlights.map((highlight, index) => (
                    <div key={index} className='flex items-center p-3 bg-gray-50 rounded-lg'>
                      <RiRadioButtonFill className='text-blue-600 mr-3' />
                      <span className='text-gray-700'>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deployment Highlight */}
            <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-8'>
              <h2 className='text-3xl font-bold mb-4'>🚀 Deployment Highlight</h2>
              <p className='text-lg leading-relaxed'>
                The application is deployed on <strong>Hostinger</strong> with Java hosting and MySQL database integration. 
                This cloud deployment includes custom domain configuration and HTTPS security, enabling the coffee shop staff 
                to access the system from anywhere, not just within the local store network. This flexibility significantly 
                improved operational efficiency and allowed for remote management capabilities.
              </p>
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
            
            {/* <div className='p-2 mt-6'>
              <p className='text-center font-bold pb-2'>Project Links</p>
              <div className='flex flex-col items-center justify-center'>
                <a
                  href={projectData.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full'
                >
                  <button className='px-8 py-2 mt-4 mr-8 w-full flex items-center justify-center'>
                    <FaExternalLinkAlt className='mr-2' />
                    Live Demo
                  </button>
                </a>
              </div>
            </div> */}
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

export default TreatYouBetter;
