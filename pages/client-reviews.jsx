import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaQuoteLeft, FaExternalLinkAlt, FaProjectDiagram } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import SEO from '../components/SEO';

const ClientReviews = () => {
  const clientReviews = [
    {
      id: 1,
      projectName: "Treat You Batter - Healthcare Platform",
      clientName: "Dr. Sarah Mitchell",
      clientRole: "Healthcare Director",
      clientCompany: "MedCare Solutions",
      projectType: "Full-Stack Web Application",
      rating: 5,
      date: "March 2024",
      projectImage: "/assets/projects/treat-you-better.jpg",
      clientAvatar: "/assets/clients/sarah-mitchell.jpg",
      review: "Mahmoud delivered an exceptional healthcare platform that exceeded our expectations. The user interface is intuitive and the backend is robust. His attention to detail in implementing HIPAA compliance and security measures was outstanding. The project was delivered on time and within budget. I would definitely work with Mahmoud again.",
      projectHighlights: ["HIPAA Compliance", "Secure Authentication", "Real-time Notifications", "Responsive Design", "API Integration"],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT Authentication"],
      projectUrl: "/treat-you-better",
      testimonialHighlights: ["Exceeded Expectations", "On-time Delivery", "Security Focus", "Professional Communication"]
    },
    {
      id: 2,
      projectName: "Quest IT - Enterprise Dashboard",
      clientName: "Michael Rodriguez",
      clientRole: "CTO",
      clientCompany: "Quest IT Solutions",
      projectType: "Enterprise Web Application",
      rating: 5,
      date: "January 2024",
      projectImage: "/assets/projects/quest-it.jpg",
      clientAvatar: "/assets/clients/michael-rodriguez.jpg",
      review: "Working with Mahmoud was a game-changer for our company. He transformed our complex requirements into a sleek, efficient dashboard that our team loves using. His expertise in Angular and Spring Boot really showed. The data visualization components he built are exactly what we needed to make informed business decisions. Highly recommended!",
      projectHighlights: ["Data Visualization", "Real-time Analytics", "User Management", "Performance Optimization", "Scalable Architecture"],
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Chart.js", "Docker"],
      projectUrl: "/quest-it",
      testimonialHighlights: ["Game-changer Solution", "Expert Implementation", "Business Impact", "Team Satisfaction"]
    },
    {
      id: 3,
      projectName: "E-Commerce Mobile App",
      clientName: "Lisa Chen",
      clientRole: "Product Manager",
      clientCompany: "RetailTech Innovations",
      projectType: "Mobile Application",
      rating: 5,
      date: "November 2023",
      projectImage: "/assets/projects/ecommerce-mobile.jpg",
      clientAvatar: "/assets/clients/lisa-chen.jpg",
      review: "Mahmoud's Flutter development skills are top-notch. He built us a beautiful, performant mobile app that our customers absolutely love. The shopping experience is smooth, the payment integration is seamless, and the app handles high traffic without any issues. His proactive communication throughout the project made the entire process stress-free.",
      projectHighlights: ["Smooth UX/UI", "Payment Integration", "High Performance", "Cross-platform", "Push Notifications"],
      technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "REST APIs"],
      projectUrl: "/ecommerce-mobile",
      testimonialHighlights: ["Top-notch Skills", "Customer Love", "Seamless Integration", "Stress-free Process"]
    },
    {
      id: 4,
      projectName: "Digital Marketing Platform",
      clientName: "James Thompson",
      clientRole: "Marketing Director",
      clientCompany: "GrowthHack Agency",
      projectType: "SaaS Platform",
      rating: 5,
      date: "September 2023",
      projectImage: "/assets/projects/marketing-platform.jpg",
      clientAvatar: "/assets/clients/james-thompson.jpg",
      review: "Mahmoud built us a comprehensive digital marketing platform that has revolutionized how we serve our clients. The analytics dashboard, campaign management tools, and automated reporting features are incredibly powerful. His understanding of our business needs and technical implementation was impressive. The platform has increased our operational efficiency by 40%.",
      projectHighlights: ["Analytics Dashboard", "Campaign Management", "Automated Reporting", "Multi-tenant Architecture", "API Integrations"],
      technologies: ["React", "Next.js", "Node.js", "MySQL", "Redis"],
      projectUrl: "/marketing-platform",
      testimonialHighlights: ["Revolutionary Impact", "Business Understanding", "40% Efficiency Increase", "Powerful Features"]
    },
    {
      id: 5,
      projectName: "Learning Management System",
      clientName: "Prof. Ahmed Hassan",
      clientRole: "Academic Director",
      clientCompany: "EduTech Institute",
      projectType: "Educational Platform",
      rating: 5,
      date: "July 2023",
      projectImage: "/assets/projects/lms-platform.jpg",
      clientAvatar: "/assets/clients/ahmed-hassan.jpg",
      review: "The learning management system Mahmoud developed for us has transformed our online education delivery. Students and instructors find it incredibly user-friendly. The video streaming, assignment management, and grading systems work flawlessly. His attention to accessibility standards and mobile responsiveness made it perfect for our diverse student body.",
      projectHighlights: ["Video Streaming", "Assignment Management", "Grading System", "Accessibility Standards", "Mobile Responsive"],
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS S3", "WebRTC"],
      projectUrl: "/lms-platform",
      testimonialHighlights: ["Transformed Education", "User-friendly Design", "Flawless Functionality", "Accessibility Focus"]
    },
    {
      id: 6,
      projectName: "Real Estate CRM",
      clientName: "Maria Gonzalez",
      clientRole: "Sales Manager",
      clientCompany: "Prime Properties",
      projectType: "CRM System",
      rating: 5,
      date: "May 2023",
      projectImage: "/assets/projects/real-estate-crm.jpg",
      clientAvatar: "/assets/clients/maria-gonzalez.jpg",
      review: "Mahmoud delivered a fantastic CRM system that has streamlined our entire sales process. The lead management, property listing integration, and automated follow-up features have increased our conversion rates significantly. His ability to understand our industry-specific needs and translate them into technical solutions was remarkable.",
      projectHighlights: ["Lead Management", "Property Integration", "Automated Follow-ups", "Sales Analytics", "Document Management"],
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "Twilio API"],
      projectUrl: "/real-estate-crm",
      testimonialHighlights: ["Streamlined Process", "Increased Conversions", "Industry Understanding", "Remarkable Solutions"]
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Kalekish",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": clientReviews.length,
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": clientReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.clientName,
        "jobTitle": review.clientRole
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.review,
      "datePublished": review.date,
      "about": {
        "@type": "CreativeWork",
        "name": review.projectName
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Client Reviews & Project Testimonials | Mahmoud Kalekish - 5-Star Rated Developer"
        description="Read authentic client reviews and project testimonials for Mahmoud Kalekish. Discover why clients consistently rate his full-stack development services 5 stars across various industries."
        canonical="https://mahmoud-kalekish.vercel.app/client-reviews"
        structuredData={structuredData}
        keywords="Mahmoud Kalekish client reviews, project testimonials, 5-star developer, client satisfaction, full-stack development reviews, web development testimonials, mobile app reviews"
      />
      
      <div className='w-full overflow-x-hidden'>
        {/* Header Section */}
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src='/assets/projects/client-reviews-bg.jpg'
            alt='Client Reviews and Project Testimonials Background'
            priority
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h1 className='py-2'>Client Reviews & Testimonials</h1>
            <h2 className='text-2xl'>Real Feedback from Real Projects</h2>
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
                <span className='text-sm font-medium text-gray-500'>Client Reviews</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Overview Stats */}
        <div className='max-w-[1240px] mx-auto p-2 py-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>What My Clients Say</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-8'>
              Authentic testimonials from clients across various industries who have experienced the quality and professionalism of my development services.
            </p>
            
            {/* Rating Summary */}
            <div className='bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
                <div>
                  <h3 className='text-4xl font-bold text-yellow-600 mb-2'>5.0</h3>
                  <div className='flex justify-center mb-2'>
                    {renderStars(5)}
                  </div>
                  <p className='text-gray-700 font-medium'>Average Rating</p>
                </div>
                <div>
                  <h3 className='text-4xl font-bold text-blue-600 mb-2'>{clientReviews.length}</h3>
                  <p className='text-gray-700 font-medium'>Client Reviews</p>
                </div>
                <div>
                  <h3 className='text-4xl font-bold text-green-600 mb-2'>100%</h3>
                  <p className='text-gray-700 font-medium'>Client Satisfaction</p>
                </div>
                <div>
                  <h3 className='text-4xl font-bold text-purple-600 mb-2'>6+</h3>
                  <p className='text-gray-700 font-medium'>Industries Served</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Reviews Grid */}
          <div className='space-y-12'>
            {clientReviews.map((review, index) => (
              <div key={review.id} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${index % 2 === 1 ? 'md:ml-8' : 'md:mr-8'}`}>
                <div className='md:flex'>
                  {/* Project Image */}
                  <div className='md:w-1/3 h-64 md:h-auto relative'>
                    <Image
                      src={review.projectImage}
                      alt={`${review.projectName} project screenshot`}
                      layout='fill'
                      objectFit='cover'
                      className='rounded-t-2xl md:rounded-l-2xl md:rounded-t-none'
                    />
                    <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1'>
                      <div className='flex items-center'>
                        {renderStars(review.rating)}
                        <span className='ml-2 text-sm font-semibold text-gray-800'>{review.rating}.0</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className='md:w-2/3 p-8'>
                    {/* Project Header */}
                    <div className='flex items-start justify-between mb-6'>
                      <div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-2'>{review.projectName}</h3>
                        <p className='text-blue-600 font-semibold mb-1'>{review.projectType}</p>
                        <div className='flex items-center text-gray-500 text-sm'>
                          <BiCalendar className='mr-1' />
                          {review.date}
                        </div>
                      </div>
                      <Link href={review.projectUrl} className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>
                        <FaExternalLinkAlt size={16} />
                      </Link>
                    </div>

                    {/* Client Info */}
                    <div className='flex items-center mb-6'>
                      <div className='w-12 h-12 relative mr-4'>
                        <Image
                          src={review.clientAvatar}
                          alt={`${review.clientName} profile picture`}
                          layout='fill'
                          objectFit='cover'
                          className='rounded-full border-2 border-gray-200'
                        />
                      </div>
                      <div>
                        <h4 className='font-bold text-gray-800'>{review.clientName}</h4>
                        <p className='text-gray-600 text-sm'>{review.clientRole}</p>
                        <p className='text-blue-600 text-sm font-medium'>{review.clientCompany}</p>
                      </div>
                    </div>

                    {/* Review Quote */}
                    <div className='relative mb-6'>
                      <FaQuoteLeft className='text-2xl text-blue-200 absolute -top-1 -left-1' />
                      <blockquote className='text-gray-700 leading-relaxed pl-6 italic'>
                        "{review.review}"
                      </blockquote>
                    </div>

                    {/* Technologies Used */}
                    <div className='mb-4'>
                      <h5 className='text-sm font-semibold text-gray-700 mb-2'>Technologies Used:</h5>
                      <div className='flex flex-wrap gap-2'>
                        {review.technologies.map((tech, idx) => (
                          <span key={idx} className='bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Highlights */}
                    <div className='mb-4'>
                      <h5 className='text-sm font-semibold text-gray-700 mb-2'>Project Highlights:</h5>
                      <div className='flex flex-wrap gap-2'>
                        {review.projectHighlights.map((highlight, idx) => (
                          <span key={idx} className='bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-200'>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Highlights */}
                    <div>
                      <h5 className='text-sm font-semibold text-gray-700 mb-2'>Client Feedback Highlights:</h5>
                      <div className='flex flex-wrap gap-2'>
                        {review.testimonialHighlights.map((highlight, idx) => (
                          <span key={idx} className='bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-200'>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className='mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white'>
            <h3 className='text-3xl font-bold mb-4'>Ready to Start Your Project?</h3>
            <p className='text-lg mb-6 opacity-90'>
              Join these satisfied clients and let's build something amazing together.
            </p>
            <Link href='/#contact' className='inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300'>
              <FaProjectDiagram className='mr-2' />
              Start Your Project
            </Link>
          </div>
        </div>
        
        {/* Back to Portfolio */}
        <div className='flex justify-center pb-12'>
          <Link href='/'>
            <p className='underline cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300'>
              Back to Portfolio
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
