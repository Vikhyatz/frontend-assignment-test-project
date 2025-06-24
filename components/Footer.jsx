import React from 'react'
import Link from "next/link";
import { FaMusic } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font w-full border-t-2 border-t-gray-700">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <FaMusic />
            <span className="ml-3 text-xl">Artistly</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2025 Artistly —
            <a href="github.com/vikhyatz" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@vikhyatz</a>
          </p>
          
        </div>
      </footer>
  )
}

export default Footer