"use client"
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export function Hero() {
  return (
    
    <div className='text-green-300 bg-gray-800'>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 ">
              Hello!<br />
              I AM <span className='text-white font-bold'>Anas Hakeem</span>
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{ 
                  strings: ['Web Developer', 'UI/UX Designer', 'Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='w-[100px] h-[2px] '></div>
            <p className="mb-8 leading- font-serif text-white mt-2 text-balance">
              A passionate Student of IT, Cloud Computing, Applied Generative AI, Web 3.0 and Metaverse & Full Stack Developer at Governor House Karachi.
              I am committed to continuously learning and applying my knowledge to create impactful web solutions🚀.
            </p>
            <div className="flex justify-center">
              <Link href={'/component/contact'}>
                <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg font-bold">
                  Contact
                </button>
              </Link>
              
              <a href='https://github.com/anashakeem123' className="ml-4">
                <AiFillGithub className='text-4xl text-white' />
              </a>
            </div>
          </div>
          <AiOutlineCloudDownload />

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full border-3 border-stone-400 shadow-xl shadow-orange-500"
              alt="hero"
              src={'/Anas1.jpg'}
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

