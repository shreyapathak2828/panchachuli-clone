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
                {/* Left Links */}
                <div className="space-x-10 py-7">
                    <Link href="/" className={pathname === "/" ? "font-bold" : ""}>Home</Link>
                    <Link href="/about" className={pathname === "/about" ? "font-bold" : ""}>About Us</Link>
                    <Link href="/shop" className={pathname === "/shop" ? "font-bold" : ""}>Shop by Category</Link>
                </div>

                {/* Logo */}
                <div className="h-24 w-52 relative">
                    <Image src={logo} alt="logo" fill className="object-contain invert" />
                </div>

                {/* Right Links */}
                <div className="space-x-10 py-7">
                    <Link href="/news" className={pathname === "/news" ? "font-bold" : ""}>News</Link>
                    <Link href="/careers" className={pathname === "/careers" ? "font-bold" : ""}>Careers</Link>
                    <Link href="/contact" className={pathname === "/contact" ? "font-bold" : ""}>Contact</Link>
                </div>
            </div>
        </nav>
    )
}
