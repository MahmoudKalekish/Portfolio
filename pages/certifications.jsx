import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import { FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import SEO from '../components/SEO';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Google Cloud Fundamentals: Core Infrastructure",
      organization: "Google",
      organizationLogo: "/assets/skills/google-cloud.png",
      issueDate: "Sep 2025",
      credentialId: "18493503",
      credentialUrl: "https://www.cloudskillsboost.google/public_profiles/6b11faba-cdfc-4cab-b8bd-25b032e5cc83/badges/18493503?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      skills: ["Google Cloud Platform", "Infrastructure", "Cloud Computing"],
      description: "Comprehensive understanding of Google Cloud Platform core infrastructure services and concepts."
    },
    {
      id: 2,
      title: "Bug Bounty-Ethical Hacking",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Jun 2025",
      credentialId: "UC-c4ca42a2-81a3-4de6-828a-6a772292a613",
      credentialUrl: "https://www.udemy.com/certificate/UC-c4ca42a2-81a3-4de6-828a-6a772292a613/",
      skills: ["Ethical Hacking", "Cybersecurity", "Penetration Testing"],
      description: "Advanced techniques in ethical hacking and bug bounty hunting methodologies."
    },
    {
      id: 3,
      title: "JPA & Hibernate: Complete Course with Online Shop Example",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Jun 2025",
      credentialId: "UC-98612920-3a85-4e66-81f2-1689eeb280e6",
      credentialUrl: "https://udemy-certificate.s3.amazonaws.com/image/UC-98612920-3a85-4e66-81f2-1689eeb280e6.jpg",
      skills: ["Java", "Hibernate", "Spring Boot", "MySQL"],
      description: "Comprehensive course covering JPA and Hibernate with practical e-commerce application development."
    },
    {
      id: 4,
      title: "IP Addressing and Subnetting",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Apr 2025",
      credentialId: "UC-66a23c0e-916e-4006-beb9-f39e18ac3c4c",
      credentialUrl: "https://www.udemy.com/certificate/UC-66a23c0e-916e-4006-beb9-f39e18ac3c4c/",
      skills: ["Networking", "TCP/IP", "Subnetting"],
      description: "Deep understanding of IP addressing schemes and network subnetting techniques."
    },
    {
      id: 5,
      title: "C++ Code Like You Are in the MATRIX: Mastering C++",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Nov 2024",
      credentialId: "UC-e6c58b89-2a56-44d4-9bb5-7ae83770ca9d",
      credentialUrl: "https://www.udemy.com/certificate/UC-e6c58b89-2a56-44d4-9bb5-7ae83770ca9d/",
      skills: ["C++", "Object-Oriented Programming", "Data Structures"],
      description: "Advanced C++ programming concepts and modern C++ best practices."
    },
    {
      id: 6,
      title: "API Testing and Automation with real time Project APIs",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Oct 2024",
      credentialId: "UC-5bb61aea-7191-4056-a3aa-2681585f0f5d",
      credentialUrl: "https://www.udemy.com/certificate/UC-5bb61aea-7191-4056-a3aa-2681585f0f5d/",
      skills: ["Postman API", "Test Cases", "Test Automation"],
      description: "Comprehensive API testing methodologies and automation frameworks."
    },
    {
      id: 7,
      title: "Master Spring Framework and Boost Your Career!",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Oct 2024",
      credentialId: "UC-260066b2-a32e-46fd-8ff5-7c2129607688",
      credentialUrl: "https://www.udemy.com/certificate/UC-260066b2-a32e-46fd-8ff5-7c2129607688/",
      skills: ["Spring MVC", "Spring Boot", "Spring Security", "Spring Webflow", "Thymeleaf", "Secure Authentication", "Java Database Connectivity (JDBC)", "Hibernate", "Spring Framework"],
      description: "Deepened understanding of the Spring Framework, enhancing ability to develop powerful, scalable, and secure Java-based applications. Gained expertise in Spring Core concepts, Spring Boot for rapid application development, REST APIs with Spring MVC, Data access with Spring Data JPA, and Spring Security for authentication and authorization."
    },
    {
      id: 8,
      title: "TOEFL Preparation: Speak English with Confidence",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Sep 2024",
      credentialId: "UC-82e744cd-eabd-4a0f-8a88-c54553f4da78",
      credentialUrl: "https://www.udemy.com/certificate/UC-82e744cd-eabd-4a0f-8a88-c54553f4da78/",
      skills: ["English", "Communication", "TOEFL"],
      description: "Enhanced English communication skills and TOEFL preparation techniques."
    },
    {
      id: 9,
      title: "Flutter REST Movie App: Master Flutter REST API Development",
      organization: "Udemy",
      organizationLogo: "/assets/skills/udemy.png",
      issueDate: "Aug 2024",
      credentialId: "UC-1092d70b-32ab-4917-8b9f-e45e8dfbd45e",
      credentialUrl: "https://www.udemy.com/certificate/UC-1092d70b-32ab-4917-8b9f-e45e8dfbd45e/",
      skills: ["Flutter", "Dart", "REST API", "Mobile Development"],
      description: "Comprehensive Flutter development with REST API integration for mobile applications."
    },
    {
      id: 10,
      title: "Data Structures & Backend with Java",
      organization: "Board Infinity",
      organizationLogo: "/assets/skills/java.png",
      issueDate: "Jun 2024",
      credentialId: "VHJSYCJFXLXS",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/VHJSYCJFXLXS",
      skills: ["Java", "Spring Boot", "Data Structures", "Backend Development"],
      description: "Advanced data structures and backend development using Java and Spring Boot."
    },
    {
      id: 11,
      title: "Java FullStack Developer Specialization",
      organization: "Board Infinity",
      organizationLogo: "/assets/skills/java.png",
      issueDate: "Jun 2024",
      credentialId: "Q3XJFCK3EZKZ",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/Q3XJFCK3EZKZ",
      skills: ["Java", "Angular", "Spring Boot", "Full Stack Development"],
      description: "Complete full-stack development specialization covering Java backend and Angular frontend."
    },
    {
      id: 12,
      title: "Frontend for Java Full Stack Development",
      organization: "Board Infinity",
      organizationLogo: "/assets/skills/angular.png",
      issueDate: "Apr 2024",
      credentialId: "DUQVCRF5ZN99",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DUQVCRF5ZN99",
      skills: ["Angular", "JavaScript", "TypeScript", "Frontend Development"],
      description: "Advanced frontend development techniques using Angular, JavaScript, and TypeScript."
    },
    {
      id: 13,
      title: "CodinGame Certification - TypeScript",
      organization: "CodinGame",
      organizationLogo: "/assets/skills/ts.png",
      issueDate: "Mar 2024",
      credentialId: "OakqUJV3O4XWwhYqFxxi1A",
      credentialUrl: "https://www.codingame.com/certification/OakqUJV3O4XWwhYqFxxi1A",
      skills: ["TypeScript", "Programming", "Problem Solving"],
      description: "Certified proficiency in TypeScript programming and problem-solving skills."
    },
    {
      id: 14,
      title: "Fundamentals of Java Programming",
      organization: "Board Infinity",
      organizationLogo: "/assets/skills/java.png",
      issueDate: "Mar 2024",
      credentialId: "WVQUCJV2FX5J",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/WVQUCJV2FX5J",
      skills: ["Java", "Object-Oriented Programming", "Programming Fundamentals"],
      description: "Solid foundation in Java programming fundamentals and object-oriented concepts."
    },
    {
      id: 15,
      title: "Troubleshooting and Debugging Techniques",
      organization: "Google",
      organizationLogo: "/assets/skills/google.png",
      issueDate: "Mar 2024",
      credentialId: "KWQU9PGCYCHV",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KWQU9PGCYCHV",
      skills: ["Python (Programming Language)", "Debugging", "Troubleshooting"],
      description: "Advanced troubleshooting and debugging methodologies for software development."
    },
    {
      id: 16,
      title: "Back End Development and APIs",
      organization: "freeCodeCamp",
      organizationLogo: "/assets/skills/node.png",
      issueDate: "Dec 2023",
      credentialId: "",
      credentialUrl: "https://www.freecodecamp.org/certification/Mahmoud_Kalekish/back-end-development-and-apis",
      skills: ["Node.js", "Express.js", "MongoDB", "API Development"],
      description: "Comprehensive backend development using Node.js, Express.js, and MongoDB."
    },
    {
      id: 17,
      title: "Business English: Networking",
      organization: "Coursera",
      organizationLogo: "/assets/skills/coursera.png",
      issueDate: "Nov 2023",
      credentialId: "5J9H3L3NLL9T",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/5J9H3L3NLL9T",
      skills: ["Business English", "Professional Communication", "Networking"],
      description: "Enhanced business English communication and professional networking skills."
    },
    {
      id: 18,
      title: "Version Control",
      organization: "Coursera",
      organizationLogo: "/assets/skills/git.png",
      issueDate: "Nov 2023",
      credentialId: "WFXDA9G3XY7S",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/WFXDA9G3XY7S",
      skills: ["Git", "Version Control", "Collaboration"],
      description: "Comprehensive understanding of version control systems and collaborative development."
    },
    {
      id: 19,
      title: "Responsive Web Design",
      organization: "freeCodeCamp",
      organizationLogo: "/assets/skills/html.png",
      issueDate: "Jul 2022",
      credentialId: "",
      credentialUrl: "https://www.freecodecamp.org/certification/Mahmoud_Kalekish/responsive-web-design",
      skills: ["HTML", "CSS", "Responsive Design", "Web Development"],
      description: "Mastery of responsive web design principles and modern CSS techniques."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Kalekish",
    "hasCredential": certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.title,
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.organization
      },
      "dateCreated": cert.issueDate,
      "about": cert.skills
    }))
  };

  return (
    <>
      <SEO 
        title="Licenses & Certifications | Mahmoud Kalekish - Professional Development"
        description="Explore Mahmoud Kalekish's professional certifications and licenses in Full-Stack Development, Cloud Computing, Cybersecurity, and more. Continuous learning and skill development in cutting-edge technologies."
        canonical="https://mahmoud-kalekish.vercel.app/certifications"
        structuredData={structuredData}
        keywords="Mahmoud Kalekish certifications, professional licenses, Google Cloud, Java certifications, Spring Boot, Angular, React, Flutter, cybersecurity, full-stack developer certifications"
      />
      
      <div className='w-full overflow-x-hidden'>
        {/* Header Section */}
        <div className='w-screen h-[50vh] relative'>
          {/* Mobile: Enhanced Gradient Background */}
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 md:hidden z-1'>
            {/* Animated circles for visual interest */}
            <div className='absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
            <div className='absolute top-1/2 left-1/2 w-36 h-36 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Desktop: Banner Image with Overlay */}
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 hidden md:block' />
          <div className='hidden md:block absolute top-0 left-0 w-full h-[50vh] z-1'>
            <Image
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              src='/assets/MahmoudKalekish-banner.png'
              alt='Mahmoud Kalekish Logo Professional Certifications Background'
              priority
            />
          </div>
          
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h1 className='py-2'>Licenses & Certifications</h1>
            <h2 className='text-2xl'>Continuous Learning & Professional Development</h2>
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
                <span className='text-sm font-medium text-gray-500'>Certifications</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Certifications Grid */}
        <div className='max-w-[1240px] mx-auto p-2 py-8 overflow-x-hidden'>
        <div className='grid md:grid-cols-5 gap-8'>
          <div className='col-span-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {certifications.map((cert) => (
                <div key={cert.id} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col h-full'>
                  {/* Card Content - grows to fill space */}
                  <div className='flex-grow'>
                    <div className='w-16 h-16 relative mb-4'>
                      <Image
                        src={cert.organizationLogo}
                        alt={`${cert.organization} logo`}
                        layout='fill'
                        objectFit='contain'
                        className='rounded-lg'
                      />
                    </div>
                    
                    {/* Certificate Title */}
                    <h3 className='text-lg font-bold text-gray-800 mb-2 text-center min-h-[3rem] flex items-center justify-center'>
                      {cert.title}
                    </h3>
                    
                    {/* Organization */}
                    <p className='text-blue-600 font-semibold text-center mb-2'>
                      {cert.organization}
                    </p>
                    
                    {/* Issue Date */}
                    <p className='text-gray-600 text-sm text-center mb-3'>
                      Issued {cert.issueDate}
                    </p>
                    
                    {/* Credential ID */}
                    {cert.credentialId && (
                      <p className='text-xs text-gray-500 text-center mb-4 font-mono'>
                        ID: {cert.credentialId}
                      </p>
                    )}
                    
                    {/* Skills */}
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-gray-700 mb-2'>Skills:</h4>
                      <div className='flex flex-wrap gap-1'>
                        {cert.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className='bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full'>
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* View Credential Button - stays at bottom */}
                  <div className='text-center mt-auto'>
                    <a
                      href={cert.credentialUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'
                    >
                      <FaExternalLinkAlt className='mr-2' />
                      View Credential
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className='col-span-4 md:col-span-1 h-fit sticky top-4'>
            <div className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-xl shadow-gray-400 rounded-xl p-6 border border-blue-100'>
              <h3 className='text-center font-bold text-lg text-gray-800 mb-4'>Professional Growth</h3>
              
              {/* Animated Certificate Icon */}
              <div className='relative inline-block w-full mb-4'>
                <div className='absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse'></div>
                <FaCertificate className='relative text-6xl text-blue-500 mx-auto drop-shadow-lg transform hover:scale-110 transition-transform duration-300' />
              </div>
              
              {/* Stats Card */}
              <div className='bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 mb-4 text-center'>
                <h4 className='font-bold text-3xl mb-1'>{certifications.length}+</h4>
                <p className='text-xs font-medium tracking-wide'>Professional Certifications</p>
              </div>
              
              <p className='text-gray-600 text-xs leading-relaxed text-center mb-4'>
                Committed to continuous learning and staying current with industry trends.
              </p>
              
              {/* Focus Areas */}
              <div className='bg-white p-3 rounded-lg shadow-sm border border-blue-100'>
                <p className='text-xs text-gray-500 uppercase tracking-wide mb-2 text-center font-semibold'>Focus Areas</p>
                <div className='flex flex-wrap gap-1 justify-center'>
                  <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full'>Cloud</span>
                  <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full'>Security</span>
                  <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full'>Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Portfolio */}
        <div className='flex justify-center pb-12 pt-8 mt-8'>
          <Link href='/'>
            <button className='group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300'>
              <svg 
                className='w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
              Back to Portfolio
              <span className='absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300'></span>
            </button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
