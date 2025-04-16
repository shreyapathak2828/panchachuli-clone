'use client'

import {  Phone } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingActions = () => {
    return (
        <div className="fixed bottom-6 left-6 z-50">
            <div className="relative flex items-center justify-center group">
                
                <button
                    className="w-14 h-14 rounded-full bg-purple-400 text-white shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.25 4.5C2.25 3.257 3.257 2.25 4.5 2.25h15c1.243 0 2.25 1.007 2.25 2.25v9c0 1.243-1.007 2.25-2.25 2.25H6.372l-3.591 2.872A.75.75 0 012 18.25v-13.5zM6.75 9a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zm0-3a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                
                <div
                    className="absolute left-16 flex gap-3 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                >
                    <Link href="tel:919311138145">
                        <button className="w-12 h-12 rounded-full bg-green-600 text-white shadow-md flex items-center justify-center">
                            <Phone />
                        </button>
                    </Link>

                    <Link href="https://wa.me/919311138145" target="_blank">
                        <button className="w-12 h-12 rounded-full bg-emerald-500 text-white shadow-md flex items-center justify-center">
                            <FaWhatsapp size={24} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FloatingActions
