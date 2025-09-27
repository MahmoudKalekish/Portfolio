import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { FaHome, FaExclamationTriangle, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';

const Custom404 = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Mahmoud Kalekish</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Mahmoud Kalekish's portfolio homepage." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 pt-[120px]">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <BiError className="text-6xl text-red-400 animate-bounce" />
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              The page you're looking for seems to have wandered off into the digital void.
            </p>
            <p className="text-gray-500">
              Don't worry, even the best developers encounter 404s sometimes! 😅
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex items-center justify-center mb-4">
              <FaExclamationTriangle className="text-yellow-500 text-2xl mr-3" />
              <span className="text-gray-700 font-medium">Auto-redirect in progress...</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {countdown}
            </div>
            <p className="text-sm text-gray-500">
              Redirecting to homepage automatically
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((10 - countdown) / 10) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <FaHome className="mr-3" />
                Go to Homepage
              </button>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaArrowLeft className="mr-3" />
              Go Back
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <FaSearch className="mr-2 text-blue-600" />
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link href="/#about">
                <div className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300 cursor-pointer text-center">
                  <span className="text-sm font-medium text-blue-700">About</span>
                </div>
              </Link>
              <Link href="/#projects">
                <div className="p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300 cursor-pointer text-center">
                  <span className="text-sm font-medium text-green-700">Projects</span>
                </div>
              </Link>
              <Link href="/certifications">
                <div className="p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300 cursor-pointer text-center">
                  <span className="text-sm font-medium text-purple-700">Certifications</span>
                </div>
              </Link>
              <Link href="/#contact">
                <div className="p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-300 cursor-pointer text-center">
                  <span className="text-sm font-medium text-orange-700">Contact</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              💡 <strong>Pro Tip:</strong> While you're here, why not check out my latest projects? 
              <br />
              I promise they exist and work perfectly! 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
