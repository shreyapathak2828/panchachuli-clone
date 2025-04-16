'use client'

import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io' 

const WhatsAppFloatingButton = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const phoneNumber = '919311138145' 

  const handleStartChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank')
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {showPopup && (
        <div className="relative bg-white shadow-lg rounded-lg p-4 mb-2 animate-fade-in w-64">
          
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            <IoMdClose size={20} />
          </button>

          <p className="text-gray-800 font-medium mb-2">Chat with us</p>
          <p className="text-sm text-gray-600 mb-3">Have questions? Chat with us directly on WhatsApp for quick assistance!</p>
          <button
            onClick={handleStartChat}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full w-full"
          >
            Start Chat
          </button>
        </div>
      )}
      <button
        onClick={handleStartChat}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
      >
        <FaWhatsapp size={24} />
      </button>
    </div>
  )
}

export default WhatsAppFloatingButton
