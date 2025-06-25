import React from 'react'
import Link from "next/link";
import { FaMusic } from "react-icons/fa";

const Header = () => {
    return (
        < header className="text-gray-400 bg-gray-900 body-font" >
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <FaMusic />
                    <span className="ml-3 text-xl">Artistly</span>
                </Link>
                <nav className="md:ml-auto flex md:flex-row flex-col  items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-white cursor-pointer py-1 md:py-0">Home</Link>
                    <Link href="/artists" className="mr-5 hover:text-white cursor-pointer py-1 md:py-0">Explore Artists</Link>
                    <Link href="/onboard" className="mr-5 hover:text-white cursor-pointer py-1 md:py-0">For Artists</Link>
                    <Link href="/dashboard" className="mr-5 hover:text-white cursor-pointer py-1 md:py-0">Dashboard</Link>
                </nav>
            </div>
        </header >
    )
}

export default Header