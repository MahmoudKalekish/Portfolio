import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub, FaMobile, FaUsers, FaComments, FaCreditCard, FaMapMarkerAlt } from 'react-icons/fa';
import { BiCalendar, BiCode } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import ProjectSEO from '../components/ProjectSEO';

const QuestIt = () => {
  const projectData = {
    title: "Quest It - Canadian Service Marketplace App",
    description: "Canadian mobile marketplace application connecting people needing help with local providers for everyday tasks. Zero commission platform with custom pricing and community-driven ecosystem.",
    image: "/assets/projects/Quest-it-Web.png",
    technologies: ["Flutter", "Dart", "Node.js", "Firebase", "Firestore", "Firebase Auth", "FCM", "Firebase Hosting"],
    liveUrl: "https://questit.ca",
    // githubUrl: "#", // Add actual GitHub URL when available
    category: "Mobile Application & Web Platform",
    year: "2023"
  };

  const features = [
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Community-Driven Marketplace",
      description: "Connect local service providers with customers in a transparent, commission-free environment"
    },
    {
      icon: <FaCreditCard className="text-3xl text-green-600" />,
      title: "Flexible Payment System",
      description: "Multiple payment methods with zero commission - users keep 100% of their earnings"
    },
    {
      icon: <FaComments className="text-3xl text-purple-600" />,
      title: "Real-time Communication",
      description: "In-app chat system for seamless coordination between customers and service providers"
    },
    {
      icon: <MdNotifications className="text-3xl text-orange-600" />,
      title: "Instant Notifications",
      description: "Firebase Cloud Messaging for real-time updates on requests, applications, and messages"
    }
  ];

  const userFeatures = [
    "Post and manage help requests with custom budgets",
    "Hire applicants and pay with preferred methods",
    "Browse available services in your area",
    "In-app chat to coordinate with providers",
    "Rate and review service providers",
    "Track request status and history"
  ];

  const providerFeatures = [
    "Apply for tasks with competitive bids",
    "Advertise services for free (zero commission)",
    "Get paid with multiple payment options",
    "Build trust and connections with local clients",
    "Manage service portfolio and availability",
    "Receive instant notifications for new opportunities"
  ];

  const technicalHighlights = [
    "Cross-platform Flutter app for iOS & Android",
    "Node.js backend with custom API services",
    "Firebase ecosystem for authentication and real-time data",
    "Firestore database for scalable data management",
    "Firebase Cloud Messaging for push notifications",
    "Firebase Hosting for web assets and companion site",
    "Integrated payment processing with multiple methods",
    "Real-time chat functionality with message persistence",
    "Geolocation services for local service discovery"
  ];

  return (
    <>
      <ProjectSEO 
        projectName={projectData.title}
        description={projectData.description}
        imageUrl={projectData.image}
        projectUrl="/quest-it"
        technologies={projectData.technologies}
        demoUrl={projectData.liveUrl}
        // githubUrl={projectData.githubUrl}
      />
      
      <div className='w-full overflow-x-hidden'>
        {/* Header Section */}
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src='/assets/projects/Quest-it-Web.png'
            alt='Quest It Canadian Service Marketplace Mobile App'
            priority
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h1 className='py-2'>Quest It</h1>
            <h2 className='text-2xl'>Canadian Service Marketplace App</h2>
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
                <span className='text-sm font-medium text-gray-500'>Quest It</span>
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
                <FaMobile className='text-4xl text-blue-600 mr-4' />
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
                Quest It is a revolutionary Canadian mobile marketplace that connects people needing help with local service 
                providers for everyday tasks including cleaning, moving, handyman work, and more. Unlike traditional gig platforms, 
                Quest It empowers users to set their own prices while taking zero commission, creating an affordable, transparent, 
                and truly community-driven ecosystem.
              </p>

              <p className='text-gray-700 leading-relaxed mb-6'>
                The platform features a companion website at <a href="https://questit.ca" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline font-semibold'>questit.ca</a> and 
                provides a comprehensive solution for both service requesters and providers with real-time communication, 
                flexible payments, and instant notifications.
              </p>

              <div className='bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>🎯 Project Impact</h3>
                <ul className='text-gray-700 space-y-2'>
                  <li>• Democratizes local services by eliminating commission fees</li>
                  <li>• Provides full pricing flexibility for both customers and providers</li>
                  <li>• Fosters stronger local community connections</li>
                  <li>• Makes everyday help accessible and affordable</li>
                  <li>• Creates transparent, trust-based service relationships</li>
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

            {/* User Experience */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-8'>User Experience</h2>
              
              <div className='grid md:grid-cols-2 gap-8'>
                {/* For Users (Requesters) */}
                <div className='bg-blue-50 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-blue-800 mb-4 flex items-center'>
                    <FaUsers className='mr-3' />
                    For Users (Requesters)
                  </h3>
                  <ul className='space-y-3'>
                    {userFeatures.map((feature, index) => (
                      <li key={index} className='flex items-start text-gray-700'>
                        <RiRadioButtonFill className='text-blue-600 mr-3 mt-1 flex-shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* For Providers (Workers) */}
                <div className='bg-green-50 rounded-lg p-6'>
                  <h3 className='text-xl font-bold text-green-800 mb-4 flex items-center'>
                    <FaMapMarkerAlt className='mr-3' />
                    For Providers (Workers)
                  </h3>
                  <ul className='space-y-3'>
                    {providerFeatures.map((feature, index) => (
                      <li key={index} className='flex items-start text-gray-700'>
                        <RiRadioButtonFill className='text-green-600 mr-3 mt-1 flex-shrink-0' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Technical Implementation</h2>
              
              <div className='mb-8'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Architecture & Stack</h3>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='bg-blue-50 rounded-lg p-6'>
                    <h4 className='font-bold text-blue-800 mb-3'>Mobile App</h4>
                    <p className='text-gray-700'>Flutter (Dart) framework providing cross-platform compatibility for both iOS and Android with native performance.</p>
                  </div>
                  <div className='bg-green-50 rounded-lg p-6'>
                    <h4 className='font-bold text-green-800 mb-3'>Backend</h4>
                    <p className='text-gray-700'>Node.js server with custom API services handling business logic, user management, and service coordination.</p>
                  </div>
                  <div className='bg-orange-50 rounded-lg p-6'>
                    <h4 className='font-bold text-orange-800 mb-3'>Database & Auth</h4>
                    <p className='text-gray-700'>Firebase ecosystem with Firestore for real-time data and Firebase Authentication for secure user management.</p>
                  </div>
                  <div className='bg-purple-50 rounded-lg p-6'>
                    <h4 className='font-bold text-purple-800 mb-3'>Notifications</h4>
                    <p className='text-gray-700'>Firebase Cloud Messaging (FCM) for instant push notifications and real-time updates across the platform.</p>
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

            {/* Platform Impact */}
            <div className='bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white mb-8'>
              <h2 className='text-3xl font-bold mb-4'>🌟 Platform Impact</h2>
              <p className='text-lg leading-relaxed mb-4'>
                Quest It revolutionizes the local services industry by creating a truly fair and transparent marketplace. 
                By eliminating commission fees and giving both customers and providers complete pricing flexibility, the platform 
                fosters genuine community connections while making essential services more accessible and affordable.
              </p>
              <p className='text-lg leading-relaxed'>
                With features like real-time chat, instant notifications, and integrated payment processing, Quest It provides 
                a seamless experience that strengthens local economies and builds lasting relationships between service providers 
                and their communities.
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
            
            <div className='p-2 mt-6'>
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
                    Visit Quest It
                  </button>
                </a>
              </div>
            </div>

            {/* Website Link */}
            <div className='p-2 mt-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg'>
              <p className='text-center font-bold pb-2 text-gray-800'>Companion Website</p>
              <div className='text-center'>
                <a
                  href="https://questit.ca"
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 font-semibold underline'
                >
                  questit.ca
                </a>
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

export default QuestIt;
