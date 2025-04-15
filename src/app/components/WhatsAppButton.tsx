'use client';

import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link';

const WhatsAppButton = () => {
  const phoneNumber = '919311138145'; 

  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </Link>
  );
};

export default WhatsAppButton;
