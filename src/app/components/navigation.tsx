"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/categories/logo.png"
import { usePathname } from "next/navigation"

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
            <div className="font-[300] font-poppins space-x-72 justify-center items-center flex">

                <div className="space-x-10 py-7 flex items-center">
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

                <div className="h-24 w-52 relative">
                    <Image src={logo} alt="logo" fill className="object-contain invert" />
                </div>

                <div className="space-x-10 py-7">
                    <Link href="/news" className={pathname === "/news" ? "font-bold" : ""}>News</Link>
                    <Link href="/careers" className={pathname === "/careers" ? "font-bold" : ""}>Careers</Link>
                    <Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}
