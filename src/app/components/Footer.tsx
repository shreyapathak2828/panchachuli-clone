import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 py-8 w-full'>
    <div className='px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8'>
        <div>
          <h3 className='flex md:justify-center text-xl font-semibold text-white mb-4 '>Follow Us</h3>
          <div className='flex space-x-4 md:justify-center'>
            <a href="https://www.linkedin.com/company/105574380/admin/dashboard">icon</a>
            <a href="https://www.facebook.com/panchachuli.handlooms">icon</a>
            <a href="https://www.instagram.com/panchachuli_handlooms/">icon</a>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Quick Links</h3>
          <ul>
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <Link className='hover:text-white text-2xl font-bold bg-gradient-to-r from-red-600 via-green-500 to-violet-400 inline-block text-transparent bg-clip-text mb-4' href="/washcare">Wash Care</Link>
        </div>

        <div>
          <h3 className='text-xl font-semibold text-white mb-4'>Contact</h3>
          <p className='text-gray-400'>info@vincularfoundation.org</p>
          <p className='text-gray-400'>Phone: +91-93111 38145</p>
        </div>
        
      </div>
      <div className='mt-8 text-center border-t border-gray-700 pt-4'>
          <p className='text-gray-400 text-sm'>© 2025 Panchachuli. All rights reserved.</p>
        </div>
    </div>
  </footer>
  );
};

export default Footer;
