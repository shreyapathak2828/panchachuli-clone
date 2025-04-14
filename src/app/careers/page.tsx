import React from 'react'
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton'

function careers() {
  return (
    <div>
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 font-poppins'>
      <div className='bg-white shadow-lg rounded-xl p-10 w-full max-w-xl text-center transition-all duration-300 hover:shadow-xl'>
        <h1 className='text-4xl font-bold text-yellow-600 mb-6 font-leagueScript'>
        Join Our Team
        </h1>
        <p className='text-gray-600 mb-2 text-sm md:text-lg leading-relaxed'>We are always looking for talented individuals to join our mission. If you&#39;re passionate about making a difference, we&#39;d love to hear from you.</p>
        <div className='relative group cursor-pointer transition-all duration-300 mx-auto max-w-md bg-gray-50 p-5 rounded-lg '>
          <p className='text-sm md:text-xl font-medium text-blue-600'>info@vincularfoundation.org</p>
          <div className='absolute inset-0 border border-blue-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <p className='text-gray-500 mt-8 text-sm'>We will review your application and reach out if a suitable position becomes available.</p>

      </div>
    </div>
    <WhatsAppFloatingButton />
    <Footer />
  </div>
  )
}

export default careers
