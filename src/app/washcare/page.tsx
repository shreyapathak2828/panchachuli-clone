"use client";
import React, { useState } from 'react';
import Footer from '../components/Footer';

const Page = () => {
  const [activeSection, setActiveSection] = useState('all'); 

  const renderContent = () => {
    if (activeSection === 'washing') {
      return (
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className='p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.25 4.75-6.75 8.25-6.75 12a6.75 6.75 0 1013.5 0c0-3.75-3.5-7.25-6.75-12z"
                />
              </svg>
            </div>

            <h3 className='text-lg font-medium text-neutral-800'>Washing</h3>
          </div>
          <p className='text-neutral-600'>Hand wash only with cold water or use a gentle machine cycle on cold.</p>
        </div>
      );
    }
    if (activeSection === 'detergent') {
      return (
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 14.76V7a4 4 0 0 0-8 0v7.76a5.5 5.5 0 1 0 8 0z" />
                <line x1="12" y1="15" x2="12" y2="9" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Detergent</h3>
          </div>
          <p className='text-neutral-600'>Avoid harsh detergents or bleach-use mild detergent for best results.</p>
        </div>
      );
    }
    if (activeSection === 'drying') {
      return (
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h10a4 4 0 1 1 0 8H7" />
                <path d="M4 6h6a4 4 0 1 1 0 8H5" />
                <line x1="3" y1="6" x2="5" y2="6" />
                <line x1="3" y1="12" x2="5" y2="12" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Drying</h3>
          </div>
          <p className='text-neutral-600'>Air dry your products by laying them flat to maintain shape.</p>
        </div>
      );
    }
    if (activeSection === 'handling') {
      return (
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className='p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.25 4.75-6.75 8.25-6.75 12a6.75 6.75 0 1013.5 0c0-3.75-3.5-7.25-6.75-12z"
                />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Handling</h3>
          </div>
          <p className='text-neutral-600'>Avoid wringing or twisting-gently press out excess water.</p>
        </div>
      );
    }
    if (activeSection === 'storage') {
      return (
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.5 9.4l-9-5.2" />
                <path d="M22 16.5V7.5l-5-2.9" />
                <path d="M2 16.5v-9l5-2.9" />
                <path d="M16.5 16.5l-9 5.2" />
                <path d="M9.4 21v-4.7L2 12V7.5" />
                <path d="M12 12l5 2.9" />
                <path d="M12 22v-4.7L22 12V7.5" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Storage</h3>
          </div>
          <p className='text-neutral-600'>Store in a cool, dry place, away from direct sunlight or moisture to maintain their softness and color.</p>
        </div>
      );
    }
    if (activeSection === 'maintenance') {
      return (
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Maintenance</h3>
          </div>
          <p className='text-neutral-600'>If necessary, steam instead of ironing to prevent damage to fibers.</p>
        </div>
      );
    }

    // Render all sections by default
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Washing Section */}
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className='p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.25 4.75-6.75 8.25-6.75 12a6.75 6.75 0 1013.5 0c0-3.75-3.5-7.25-6.75-12z"
                />
              </svg>
            </div>

            <h3 className='text-lg font-medium text-neutral-800'>Washing</h3>
          </div>
          <p className='text-neutral-600'>Hand wash only with cold water or use a gentle machine cycle on cold.</p>
        </div>

        {/* Detergent Section */}
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 14.76V7a4 4 0 0 0-8 0v7.76a5.5 5.5 0 1 0 8 0z" />
                <line x1="12" y1="15" x2="12" y2="9" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Detergent</h3>
          </div>
          <p className='text-neutral-600'>Avoid harsh detergents or bleach-use mild detergent for best results.</p>
        </div>

        {/* Drying Section */}
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h10a4 4 0 1 1 0 8H7" />
                <path d="M4 6h6a4 4 0 1 1 0 8H5" />
                <line x1="3" y1="6" x2="5" y2="6" />
                <line x1="3" y1="12" x2="5" y2="12" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Drying</h3>
          </div>
          <p className='text-neutral-600'>Air dry your products by laying them flat to maintain shape.</p>
        </div>

        {/* Handling Section */}
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className='p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-3.25 4.75-6.75 8.25-6.75 12a6.75 6.75 0 1013.5 0c0-3.75-3.5-7.25-6.75-12z"
                />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Handling</h3>
          </div>
          <p className='text-neutral-600'>Avoid wringing or twisting-gently press out excess water.</p>
        </div>

        {/* Storage Section */}
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.5 9.4l-9-5.2" />
                <path d="M22 16.5V7.5l-5-2.9" />
                <path d="M2 16.5v-9l5-2.9" />
                <path d="M16.5 16.5l-9 5.2" />
                <path d="M9.4 21v-4.7L2 12V7.5" />
                <path d="M12 12l5 2.9" />
                <path d="M12 22v-4.7L22 12V7.5" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Storage</h3>
          </div>
          <p className='text-neutral-600'>Store in a cool, dry place, away from direct sunlight or moisture to maintain their softness and color.</p>
        </div>

        {/* Maintenance Section */}
        <div className='p-6 border border-neutral-100 rounded-xl hover:shadow-md transition-shadow duration-300'>
          <div className='flex items-center mb-4'>
            <div className="p-3 bg-neutral-100 rounded-full mr-4 text-neutral-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>
            <h3 className='text-lg font-medium text-neutral-800'>Maintenance</h3>
          </div>
          <p className='text-neutral-600'>If necessary, steam instead of ironing to prevent damage to fibers.</p>
        </div>
      </div>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 font-poppins mt-10'>
      <div className='container mx-auto px-4 py-16 max-w-5xl'>
        <div className='text-center mb-12'>
          <h1 className=' text-4xl font-bold bg-gradient-to-r from-red-600 via-green-600 to-violet-900 inline-block text-transparent bg-clip-text mb-4'>
            Wash Care
          </h1>
          <p className='text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed'>
            To preserve the beauty and integrity of your natural yarn products, gentle care is key. Our pieces are
            made with sustainable fibres that deserve a little extra love and attention, so they continue to serve
            you beautifully, season after season.
          </p>
        </div>
        <div className='bg-white rounded-2xl shadow-lg overflow-hidden mb-12'>
          <div className='p-6 md:p-10'>
            <h2 className='text-2xl font-semibold text-neutral-800 mb-6'>General Care Guidelines for Natural Yarn Products</h2>
            <div className='flex overflow-x-auto py-4 mb-8'>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'all' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('all')}
              >
                All Guidelines
              </button>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'washing' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('washing')}
              >
                Washing
              </button>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'detergent' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('detergent')}
              >
                Detergent
              </button>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'drying' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('drying')}
              >
                Drying
              </button>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'handling' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('handling')}
              >
                Handling
              </button>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'storage' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('storage')}
              >
                Storage
              </button>
              <button
                className={`px-5 py-2 mx-1 whitespace-nowrap rounded-full text-sm font-medium ${activeSection === 'maintenance' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                onClick={() => setActiveSection('maintenance')}
              >
                Maintenance
              </button>

            </div>
            {renderContent()}
          </div>
        </div>
        <div className='max-w-3xl mx-auto bg-neutral-800 text-white rounded-2xl p-8 text-center'>
          <h3 className='text-xl font-medium mb-4'>Extend the Life of Your Sustainable Fashion</h3>
          <p className='mb-6'>
            Proper care not only keeps your garments looking beautiful, but also reduces environmental impact by
            extending their life and reducing the need for replacements.
          </p>
          <a href='/shop'>
            <button className='px-6 py-3 bg-white text-neutral-800 rounded-full font-medium hover:bg-neutral-100 transition-colors'>
              Shop Sustainable Collection
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;