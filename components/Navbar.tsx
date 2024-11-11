import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineCloudDownload } from "react-icons/ai";


export function Navbar() {
  return (
    <div className="text-white bg-black sticky top-0">
<header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <a href="https://www.design.com/maker/social/y55lwr416h"></a>
      <Image src={'/logo.png'}
                      height={50}
                      width={50} alt={'logo'}  
                      className="rounded-full "    
      
      />
      <span className="ml-3 text-2xl text-orange-400 font-bold underline">Anas Hakeem</span>
    </a>
    <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
      <Link  href={'/component/hero'} className="mr-5 hover:text-orange-500 text-2xl font-bold leading-relaxed">Home</Link>
      <Link href={'/component/about'}  className="mr-5 hover:text-orange-500 text-2xl font-bold">About</Link>
      <Link href={'/component/project'}    className="mr-5 hover:text-orange-500 text-2xl font-bold">Project</Link>
      <Link href={'/component/skills'}    className="mr-5 hover:text-orange-500 text-2xl font-bold">Skill</Link>
      <Link href={'/component/Certificate'} className="mr-5 hover:text-orange-500 text-2xl font-bold">Certificate</Link>
      <Link href={'/component/contact'} className="mr-5 hover:text-orange-500 text-2xl font-bold">Contact</Link>
    </div>
    <a href='/resume.png'>
    <button className="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-amber-600
     rounded text-base mt-4 md:mt-0 font-bold">
      
          Download CV
      <AiOutlineCloudDownload className="text-lg ml-2 " />

    </button></a>
  </div>
</header>


    </div>
  )
}
