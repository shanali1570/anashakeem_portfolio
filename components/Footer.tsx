import React from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"; 

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white body-font">
      <div className="container mx-auto py-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo and Brief Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="transform hover:scale-110 hover:rotate-3 transition duration-500">
            <Image
              src="/logo.png"
              alt="logo"
              width={130}
              height={50}
              className="rounded-full mb-4 border border-orange-500 shadow-lg"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-3">Anas Hakeem</h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Crafting exceptional web experiences with a passion for design and innovation. Let’s build something amazing together.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Information</h3>
          <p className="text-sm text-gray-300 mb-2">
            Email: <a href="mailto:anashakeem05@gmail.com" className="text-orange-400 hover:text-white transition duration-300">anashakeem05@gmail.com</a>
          </p>
          <p className="text-sm text-gray-300">Location: Karachi, Pakistan</p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Connect with Me</h3>
          <div className="flex space-x-6">
            <a href='https://www.linkedin.com/in/anas-hakeem-235348274/' className="text-orange-400 hover:text-white transition duration-300 transform hover:scale-110 hover:rotate-3">
              <AiFillLinkedin className="text-5xl" />
            </a>
            <a href='https://github.com/anashakeem123' className="text-orange-400 hover:text-white transition duration-300 transform hover:scale-110 hover:rotate-3">
              <AiFillGithub className="text-5xl" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center ">
        <p className="text-sm text-gray-500">
          © 2024 <span className='text-orange-500'>Anas Hakeem</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

