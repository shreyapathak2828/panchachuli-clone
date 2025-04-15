"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/categories/logo.png"
import { usePathname } from "next/navigation"
import { useState } from "react"

export const Navigation = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
            <div className="flex justify-between items-center px-6 md:px-10">

                <div className="flex items-center space-x-10 font-poppins font-[300]">
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link>

                        <div className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>
                                    About Us
                                </Link>
                                <svg
                                    className="w-4 h-4 mt-1 transition-transform duration-200 group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div className="absolute left-0 top-full mt-2 bg-gray-800 rounded-md shadow-lg py-2 w-60 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                                <Link href="/about#ourstory" className="block px-4 py-2 hover:bg-gray-700">Panchachuli Handlooms</Link>
                                <Link href="/about#weavingProcess" className="block px-4 py-2 hover:bg-gray-700">Our Weaving Process</Link>
                                <Link href="/about#vincularFoundation" className="block px-4 py-2 hover:bg-gray-700">Vincular Foundation</Link>
                            </div>
                        </div>

                        <Link href="/shop" className={pathname === "/shop" ? "font-bold" : ""}>Shop by Category</Link>
                    </div>
                </div>

                <div className="relative w-32 h-20 md:w-52 md:h-20">
                    <Image src={logo} alt="logo" fill className="object-contain invert" />
                </div>

                <div className="hidden md:flex items-center space-x-10 font-poppins font-[300]">
                    <Link href="/news" className={pathname === "/news" ? "font-bold" : ""}>News</Link>
                    <Link href="/careers" className={pathname === "/careers" ? "font-bold" : ""}>Careers</Link>
                    <Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
                </div>

                <div className="w-6 h-6 md:hidden" />
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 py-4 px-6 space-y-3 font-poppins">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block">Home</Link>
                    
                    <div>
                        <button
                            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                            className="w-full text-left flex items-center"
                        >
                            <span>About Us</span>
                            <svg
                                className={`w-4 h-4 transform transition-transform ${
                                    aboutDropdownOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {aboutDropdownOpen && (
                            <div className="ml-4 mt-2 space-y-2">
                                <Link href="/about#ourstory" onClick={() => setMobileMenuOpen(false)} className="block">
                                    Panchachuli Handlooms
                                </Link>
                                <Link href="/about#weavingProcess" onClick={() => setMobileMenuOpen(false)} className="block">
                                    Our Weaving Process
                                </Link>
                                <Link href="/about#vincularFoundation" onClick={() => setMobileMenuOpen(false)} className="block">
                                    Vincular Foundation
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="block">Shop by Category</Link>
                    <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="block">News</Link>
                    <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="block">Careers</Link>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block">Contact</Link>
                </div>
            )}
        </nav>
    );
}
