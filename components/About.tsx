import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function About() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-700 to-indigo-600 text-white body-font">
      <div className="container mx-auto py-28 px-6 flex flex-col-reverse md:flex-row items-center justify-center">
        
        {/* Image Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-12 md:mb-0 transition-transform transform hover:scale-110 hover:rotate-6">
          <Image
            className="transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6
            rounded-full border-3 border-stone-400 shadow-xl shadow-white"
            alt="Anas Hakeem"
            src={"/Anas1.jpg"}
            height={400}
            width={400}
          />
        </div>

        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-6xl font-extrabold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            About Me
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200 mb-8 font-serif">
          Meet Anas Hakeem  | Frontend Developer Student at GIAIC
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 px-4 sm:px-12 mb-10 font-extrabold">

          Hi, I’m Anas Hakeem, I’m 19 years old a passionate and driven Web Developer based in Karachi, Pakistan. I specialize in creating dynamic, responsive, and user-friendly websites using modern web technologies like HTML5, CSS3, JavaScript, TypeScript, and Next.js. I am also exploring UI/UX design to ensure the best experience for users.
          <br/>
          <br/>
          Currently, I’m a student at the Governor House Karachi, where I’m learning Full Stack Development and continuously improving my skills in Cloud Computing, Applied Generative AI, and Web 3.0 technologies. I believe in lifelong learning and am always eager to take on new challenges.
            <br />
            <br/>
            Feel free to explore my work below, and don’t hesitate to contact me if you’re interested in collaborating!
          </p>


          {/* Buttons Section */}
          <div className="flex justify-center space-x-8">
            <Link href={'/component/skills'}>
              <button className="inline-flex text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-gradient-to-l border-0 py-4 px-12 focus:outline-none rounded-full text-lg font-semibold shadow-xl transform transition duration-300 hover:scale-105 hover:translate-y-1">
                View Skills
              </button>
            </Link>

          
          </div>
        </div>
      </div>
    </div>
  );
}

