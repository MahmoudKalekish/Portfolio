import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft, FaLinkedin, FaUniversity, FaBriefcase } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import SEO from '../components/SEO';

const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      name: "Stephanie Badaan",
      role: "Career Counselor & Employability Skills Trainer",
      title: "Passionate Career Counselor & Employability Skills Trainer | Empowering Youth to thrive in today's Job Market | Specialized in CV and Cover Letter Writing, Job Interviews, LinkedIn Optimization and Job Search Strategies",
      relationship: "Mentor",
      relationshipType: "mentor",
      date: "October 3, 2025",
      linkedinUrl: "https://www.linkedin.com/in/stephanie-badaan",
      avatar: "/assets/recommendations/stephanie-badaan.jpg",
      recommendation: "I had the pleasure of coaching Mahmoud, and I was impressed by his commitment to personal and professional growth. He took all my recommendations into consideration and applied them thoughtfully. Mahmoud is committed to continuous learning. He is proactive, adaptable, and eager to take on new challenges. His positive attitude and willingness to invest in his personal and professional development make him a strong candidate for any opportunity. I highly recommend Mahmoud as I am certain he will bring the same level of dedication, adaptability, and growth-oriented mindset to your organization.",
      highlights: ["Personal Growth", "Professional Development", "Continuous Learning", "Adaptability", "Proactive Mindset"]
    },
    {
      id: 2,
      name: "Ali Nehme",
      role: "Senior Full Stack Developer",
      title: "Senior Full Stack Developer | Flutter & Angular Specialist | Java Spring Boot Expert | Crafting Scalable Web & Mobile Solutions",
      relationship: "Team Member",
      relationshipType: "colleague",
      date: "October 2, 2025",
      linkedinUrl: "https://www.linkedin.com/in/ali-nehme",
      avatar: "/assets/recommendations/ali-nehme.jpg",
      recommendation: "I've had the pleasure of working with Mahmoud, a talented Full Stack Developer who never stops learning and improving. His commitment to growth is inspiring — always eager to expand his knowledge and refine his skills. What truly sets Mahmoud apart is not just his technical expertise, but his remarkable social skills. He's approachable, always available for a discussion, and has a gift for making every interaction enjoyable and productive. His passion for communication and networking brings positive energy to any team or setting. Mahmoud's dedication to his work is outstanding, and his ability to combine technical excellence with strong interpersonal skills makes him an invaluable colleague. I highly recommend him for any team that values both expertise and a collaborative spirit.",
      highlights: ["Full Stack Development", "Continuous Learning", "Social Skills", "Communication Excellence", "Team Collaboration"]
    },
    {
      id: 3,
      name: "Ali Chbib",
      role: "Full Stack MERN Developer @ Areeba",
      title: "React.js, Node.js, MongoDB, React Native | Delivering Scalable Web & Mobile Applications",
      relationship: "Team Member",
      relationshipType: "colleague",
      date: "September 25, 2025",
      linkedinUrl: "https://www.linkedin.com/in/ali-chbib",
      avatar: "/assets/recommendations/ali-chbib.jpg",
      recommendation: "I've had the pleasure of working with Mahmoud kalekish on a few freelance projects and I can say, without a doubt, that he's a great Full Stack Engineer with great proficiency in Angular, Java, and React. Most of all, I appreciate Mahmoud's commitment and willingness to learn. He is always refining his skills and is eager to learn new technologies. He goes the extra mile, even working weekends to ensure a project is completed on time and meets all the required standards. He is dependable, industrious, and a genuine innovator. I enthusiastically endorse Mahmoud for any organization in need of a talented and dedicated developer, as he will always go above and beyond.",
      highlights: ["Full Stack Engineering", "Angular & React Expertise", "Commitment to Learning", "Weekend Dedication", "Innovation"]
    },
    {
      id: 4,
      name: "Dr. Mariam Kalakech",
      role: "Associate Professor at Lebanese University",
      title: "Associate Professor at Lebanese University",
      relationship: "Academic Supervisor",
      relationshipType: "teacher",
      date: "January 22, 2025",
      linkedinUrl: "https://www.linkedin.com/in/mariam-kalakech",
      avatar: "/assets/recommendations/mariam-kalakech.jpg",
      recommendation: "It is with great enthusiasm that I recommend Mahmoud Kalekish for any academic or professional opportunities. I had the pleasure of supervising his master's thesis and teaching him courses in data mining and research techniques. During this time, Mahmoud consistently demonstrated a remarkable ability to grasp complex concepts, apply innovative solutions, and conduct rigorous research. In his master's thesis, Mahmoud tackled Artificial Intelligence with exceptional dedication and intellectual curiosity. He showcased strong analytical skills, attention to detail, and a creative approach to problem-solving, resulting in a high-quality and impactful piece of work. In the classroom, Mahmoud was a standout student, engaging actively in discussions and demonstrating a deep understanding of data mining principles and research methodologies. His ability to translate theoretical knowledge into practical applications was particularly impressive, setting him apart from his peers. Beyond academics, Mahmoud exhibited excellent interpersonal skills and a collaborative spirit, making him a valuable member of any team. His professionalism, work ethic, and passion for learning are qualities that will undoubtedly drive his success in future endeavors. I am confident that Mahmoud will make significant contributions to any organization or academic institution he joins.",
      highlights: ["Master's Thesis Supervision", "AI Research Excellence", "Data Mining Expertise", "Research Methodologies", "Academic Leadership"]
    },
    {
      id: 5,
      name: "Dr. Mirna Atieh",
      role: "Assistant Professor in Computer Sciences & Artificial Intelligence",
      title: "Assistant Professor in Computer Sciences & Artificial Intelligence at the Lebanese University",
      relationship: "Academic Supervisor",
      relationshipType: "teacher",
      date: "January 21, 2025",
      linkedinUrl: "https://www.linkedin.com/in/mirna-atieh",
      avatar: "/assets/recommendations/mirna-atieh.jpg",
      recommendation: "I, the undersigned Mirna Atieh, Assistant Professor and Researcher at the Lebanese University, am writing this recommendation letter on behalf of Mr Mahmoud Kalakesh. Mr Kalakesh finished his Master II, specializing in the field of Management Information System, at the Lebanese University. He attended the Operation Research, the Research Techniques and The Applied Informatique courses that I taught, and he underwent his Master Thesis, titled 'Full-Stack AI SaaS Platform for Advanced Image Transformation' under my supervision. Mr Kalakesh has shown great academic and work related qualifications. He has excellent interpersonal skills and works equally well independently and in group settings. He is serious and punctual and always finishes any required task on time. In addition, he has shown competence and mastery in all aspects of work, particularly in Website development and programming. I believe that Mr Mahmoud Kalakesh has the potential to be a successful researcher in the future and I can safely recommend him for a PhD in Management Information System.",
      highlights: ["Master's Thesis: AI SaaS Platform", "Website Development Mastery", "Research Potential", "Independent & Team Work", "PhD Recommendation"]
    },
    {
      id: 6,
      name: "Dr. Ali El Moussaoui",
      role: "Ph.D. in Computer Science, Associate Professor",
      title: "Associate Professor of Computer Science at Lebanese University, Co-founder iVision Solutions Inc",
      relationship: "Direct Manager",
      relationshipType: "manager",
      date: "May 11, 2024",
      linkedinUrl: "https://www.linkedin.com/in/ali-el-moussaoui",
      avatar: "/assets/recommendations/ali-el-moussaoui.jpg",
      recommendation: "I am writing this letter to wholeheartedly recommend Mr. Mahmoud Kalakish. I have had the pleasure of instructing Mahmoud in several courses during his Master's program in Management Information Systems (MIS) at the Lebanese University. Throughout this time, Mahmoud has consistently impressed me with his exceptional intelligence, motivation, and dedication to his studies. Mahmoud consistently demonstrated a strong grasp of complex MIS concepts. He actively participated in class discussions, asking insightful questions and readily engaging in critical thinking exercises. His assignments and projects were well-researched, thoughtful, and consistently exceeded expectations. Notably, his programming skills and assignments preparation assistance papers showcased a deep understanding of the current threats and innovative solutions. Mahmoud's enthusiasm for the field of MIS and computer science is truly commendable. He consistently went above and beyond the course requirements, demonstrating a genuine desire to expand his knowledge and explore new areas. Beyond his academic prowess, Mahmoud possesses exceptional communication and interpersonal skills. He effectively collaborates with classmates, fostering a positive and productive learning environment. He is also a strong problem solver, able to approach challenges with a clear and analytical mind. Without reservation, I am confident that he will excel in any program he participates in and contribute significantly to his chosen field. He is a highly motivated and talented individual with the potential to become a future leader in MIS.",
      highlights: ["MIS Leadership Potential", "Exceptional Intelligence", "Programming Excellence", "Problem Solving", "Communication Skills"]
    },
    {
      id: 7,
      name: "Ali Kalakech",
      role: "Data Scientist",
      title: "Data Scientist",
      relationship: "Professor",
      relationshipType: "teacher",
      date: "October 2, 2023",
      linkedinUrl: "https://www.linkedin.com/in/ali-kalakech",
      avatar: "/assets/recommendations/ali-kalakech.jpg",
      recommendation: "With immense pleasure, I am writing this recommendation letter in support of Mahmoud Kalekish, who I taught during his second, third and fourth year at the Lebanese University-Faculty of Business and Economic Sciences. I taught him the courses of Algorithms Concepts, Development Platform, and Advanced Database Management Systems. He has achieved excellent results in these courses, passed all tests, practical works and showed good knowledge of both practical and theoretical material. Through my observation, I would like to say that he is attentive and studious and possesses a positive attitude towards academics. I evaluate him as intelligent, dependable, dedicated person, who is ready to achieve his goals. Mahmoud has a keen interest in cutting edge technology and innovation. I believe that he will perform very well and will prove to be a great value to your organization.",
      highlights: ["Algorithm Mastery", "Database Systems", "Cutting-edge Technology", "Academic Excellence", "Innovation Focus"]
    },
    {
      id: 8,
      name: "Nour Maher Taha",
      role: "Backend Engineer @ BEANZ",
      title: "BTech, Information Technology",
      relationship: "Direct Supervisor",
      relationshipType: "manager",
      date: "September 29, 2023",
      linkedinUrl: "https://www.linkedin.com/in/nour-maher-taha",
      avatar: "/assets/recommendations/nour-taha.jpg",
      recommendation: "I am writing this to recommend Mahmoud for any future opportunities or positions that require expertise in web development and design. As Mahmoud's supervisor during his internship at Beanz, I had the pleasure of training and overseeing his work on creating three landing pages using ReactJs. Throughout his time with us, Mahmoud consistently demonstrated a strong work ethic and a genuine passion for web development. His progress from the first landing page to the third was truly remarkable. Each subsequent project showcased Mahmoud's growing technical skills. One of Mahmoud's standout qualities is his problem-solving abilities. When faced with challenges or obstacles, he consistently exhibited a proactive approach by researching and finding answers independently. Beyond his technical abilities, Mahmoud possesses excellent collaboration and communication skills. He actively sought feedback and eagerly incorporated suggestions into his work, resulting in highly polished and impactful landing pages. His willingness to learn and adapt to feedback was impressive and indicative of his dedication to continuous improvement. Based on my observations and interactions with Mahmoud, I firmly believe that he has a bright future in web development.",
      highlights: ["ReactJS Expertise", "Problem-Solving Skills", "Continuous Improvement", "Web Development Passion", "Collaboration Excellence"]
    },
    {
      id: 9,
      name: "Zeinab Kassem",
      role: "MERN Stack | LAMP Stack | MENTOR",
      title: "MERN Stack | LAMP Stack | MENTOR",
      relationship: "Mentor",
      relationshipType: "mentor",
      date: "September 14, 2023",
      linkedinUrl: "https://www.linkedin.com/in/zeinab-kassem",
      avatar: "/assets/recommendations/zeinab-kassem.jpg",
      recommendation: "I am amazed by Mahmoud's ability to overcome any challenge he is presented with. He is highly dedicated and self motivated and tackles all his tasks with a lot of passion and holds himself to a high standard of quality work. In his time here at Codi, he has taken part and managed a lot of projects and has proven to be a great team player and a great help to his colleagues as well. He is very creative and analytical and has shown the ability to take any project further than its initial aim. I truly believe that he would be a great asset to any company or organization that he would join.",
      highlights: ["Challenge Overcomer", "Self-Motivated", "Project Management", "Team Leadership", "Creative Problem Solving"]
    },
    {
      id: 10,
      name: "Hadil Deeb",
      role: "Fulbright Scholar | Program Coordinator",
      title: "MA in Social Sciences and Comparative Education | Humanitarian",
      relationship: "English Mentor",
      relationshipType: "mentor",
      date: "September 13, 2023",
      linkedinUrl: "https://www.linkedin.com/in/hadil-deeb",
      avatar: "/assets/recommendations/hadil-deeb.jpg",
      recommendation: "I would like to recommend Mahmoud Kalekish. I met Mahmoud during a 6-month intensive course in full-stack web development at Codi Lebanon, where I serve as an English mentor. Throughout the duration of the course, Mahmoud consistently displayed dedication, enthusiasm, and a strong commitment to learning. He actively engaged in discussions, completed tasks and projects with exceptional proficiency, and demonstrated impressive problem-solving skills. His passion for web development and eagerness to stay up-to-date with the latest industry trends were highly commendable. Furthermore, Mahmoud exhibited a remarkable level of professionalism and collaborated effectively with his peers. His contributions to group projects were invaluable, and he was always willing to assist others, fostering a positive and supportive learning environment.",
      highlights: ["Full-Stack Development", "Professional Dedication", "Industry Trends Awareness", "Peer Collaboration", "Supportive Leadership"]
    }
  ];

  const getRelationshipIcon = (type) => {
    switch(type) {
      case 'teacher': return <FaUniversity className="text-blue-600" />;
      case 'manager': return <FaBriefcase className="text-green-600" />;
      case 'mentor': return <FaLinkedin className="text-purple-600" />;
      case 'colleague': return <FaBriefcase className="text-orange-600" />;
      default: return <FaBriefcase className="text-gray-600" />;
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mahmoud Kalekish",
    "review": recommendations.map(rec => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rec.name,
        "jobTitle": rec.role
      },
      "reviewBody": rec.recommendation,
      "datePublished": rec.date
    }))
  };

  return (
    <>
      <SEO 
        title="Professional Recommendations | Mahmoud Kalekish - Testimonials & References"
        description="Read professional recommendations and testimonials for Mahmoud Kalekish from colleagues, professors, and mentors. Discover insights into his technical expertise, leadership skills, and professional character."
        canonical="https://mahmoud-kalekish.vercel.app/recommendations"
        structuredData={structuredData}
        keywords="Mahmoud Kalekish recommendations, professional testimonials, references, colleague reviews, academic recommendations, mentor feedback, professional character, leadership skills"
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
              alt='Professional Recommendations Background'
              priority
            />
          </div>
          
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h1 className='py-2'>Professional Recommendations</h1>
            <h2 className='text-2xl'>Testimonials from Colleagues, Professors & Mentors</h2>
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
                <span className='text-sm font-medium text-gray-500'>Recommendations</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Recommendations Section */}
        <div className='max-w-[1240px] mx-auto p-2 py-8'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>What People Say About Me</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Professional testimonials from colleagues, academic supervisors, and mentors who have worked closely with me throughout my career journey.
            </p>
          </div>

          {/* Recommendations Grid */}
          <div className='space-y-8 overflow-hidden'>
            {recommendations.map((rec, index) => (
              <div key={rec.id} className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 max-w-full'>
                {/* Header */}
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-6'>
                  <div className='flex-1 mb-4 md:mb-0'>
                    {/* Name and Role */}
                    <div>
                      <h3 className='text-xl font-bold text-gray-800 mb-1'>{rec.name}</h3>
                      <p className='text-blue-600 font-semibold text-sm mb-1'>{rec.role}</p>
                      <div className='flex items-center text-gray-600 text-sm'>
                        {getRelationshipIcon(rec.relationshipType)}
                        <span className='ml-2 capitalize'>{rec.relationship}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Date */}
                  <div className='flex flex-col items-end text-right'>
                    <div className='flex items-center text-gray-500 text-sm mb-2'>
                      <BiCalendar className='mr-1' />
                      {rec.date}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className='relative mb-6'>
                  <FaQuoteLeft className='text-4xl text-blue-200 absolute -top-2 -left-2' />
                  <blockquote className='text-gray-700 leading-relaxed pl-8 italic break-words'>
                    &ldquo;{rec.recommendation}&rdquo;
                  </blockquote>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className='text-sm font-semibold text-gray-700 mb-3'>Key Highlights:</h4>
                  <div className='flex flex-wrap gap-2'>
                    {rec.highlights.map((highlight, idx) => (
                      <span key={idx} className='bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full border border-blue-200'>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className='mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
              <div>
                <h3 className='text-3xl font-bold text-blue-600 mb-2'>{recommendations.length}</h3>
                <p className='text-gray-700 font-medium'>Professional Recommendations</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold text-green-600 mb-2'>4</h3>
                <p className='text-gray-700 font-medium'>Academic Supervisors</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold text-purple-600 mb-2'>4</h3>
                <p className='text-gray-700 font-medium'>Industry Mentors</p>
              </div>
              <div>
                <h3 className='text-3xl font-bold text-orange-600 mb-2'>3</h3>
                <p className='text-gray-700 font-medium'>Colleagues</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Portfolio */}
        <div className='flex justify-center pb-12'>
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
    </>
  );
};

export default Recommendations;
