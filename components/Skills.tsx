import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from 'react-icons/io5';

export function Skills() {
  return (
    <div>
      <section className="text-white bg-gradient-to-br from-black via-gray-900 to-black body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="md:text-xs text-orange-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-8xl  text-10xl font-bold text-white underline ">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Skill Cards */}
            {[
              { name: "HTML", icon: <AiFillHtml5 />, level: "100%", width: "100%" },
              { name: "CSS", icon: <FaCss3Alt />, level: "98%", width: "98%" },
              { name: "JAVASCRIPT", icon: <IoLogoJavascript />, level: "95%", width: "95%" },
              { name: "TYPESCRIPT", icon: <SiTypescript />, level: "95%", width: "95%" },
              { name: "NEXT.JS", icon: <RiNextjsFill />, level: "94%", width: "94%" },
              { name: "TAILWIND CSS", icon: <RiTailwindCssFill />, level: "90%", width: "90%" },
              { name: "UI/UX DESIGNER", icon: <AiOutlineCheckCircle />, level: "95%", width: "95%" },
            ].map((skill, index) => (
              <div className="p-4 w-full md:w-1/3" key={skill.name}>
                <div className={`flex rounded-lg h-full bg-gray-800 p-8 flex-col shadow-lg transform transition duration-500 hover:scale-105 animate-fadeIn animate-delay-${index * 200}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white">
                      {skill.icon}
                    </div>
                    <h2 className="text-white text-lg font-semibold">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-2 w-full bg-gray-700 rounded-xl">
                      <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-xl" style={{ width: skill.width }}></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Proficiency: {skill.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

