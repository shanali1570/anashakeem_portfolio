import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Page() {
  return (
    <div>
      <section className="text-dark to-black body-font bg-gray-800">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-8xl font-bold text-white underline">
              Feature Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-10 text-orange-500 font-bold">
              A passionate student of Information Technology, I am currently focusing on Cloud Computing, Generative AI, and Web 3.0 technologies, gaining valuable experience and applying my skills in real-world projects.
            </p>
          </div>
          <div className="flex flex-wrap m-5 mt-8">
            {/* Project */}
            {[
              {
                title: 'COUNTDOWN TIMER PROJECT',
                description: 'A countdown timer that allows users to set a date and time for an event. The timer counts down to the specified time and notifies the user when the event is about to occur.',
                image: '/Countdown Timer.png',
                link: 'https://countdown-timer-eta-six.vercel.app/',
                category: 'Countdown Timer',
              },
              {
                title: 'PAKISTAN PROVINCES WEBSITE PROJECT',
                description: 'A website showcasing the different provinces of Pakistan. Each province has its own page with information, facts, and images related to it, making it an informative platform for users to learn more about Pakistan.',
                image: '/Pakistan website.jpg',
                link: 'https://pakistan-web-site.vercel.app/',
                category: 'Pakistan Provinces Website',
              },
              {
                title: 'SIMPLE PORTFOLIO WEBSITE Project',
                description: 'A clean and minimalistic personal portfolio website to showcase my skills, projects, and experience as a developer. It serves as an online presence for potential clients or employers to review my work.',
                image: '/Portfolio.png',
                link: 'https://portfolio-website-h1uk.vercel.app/',
                category: 'Simple Portfolio Website',
              },
              {
                title: 'CLI CURRENCY CONVERTER Project',
                description: 'A command-line interface (CLI) tool that allows users to convert currency from one type to another using real-time exchange rates. It’s a simple yet effective tool for quick currency conversion.',
                image: '/currency_converter.webp',
                link: 'https://github.com/anashakeem123/CLI-04-Currency-Converted-Rates.git',
                category: 'CLI Currency Converter',
              },
              {
                title: 'ANIMATION IMAGE WEBSITE PROJECT',
                description: 'A website that displays animated images. It allows users to interact with animations, making it an engaging and dynamic platform. The animations are designed to add life and interactivity to the site.',
                image: '/Animation image.png',
                link: 'https://animation-image-website.vercel.app/',
                category: 'Animation Image Website',
              },
              {
                title: 'PERSONAL PORTFOLIO WEBSITE Project',
                description: 'A text-based adventure game built in the command-line interface (CLI). Players navigate through different scenarios and challenges, making decisions that affect the outcome of the game.',
                image: '/Personal Portfolio.png',
                link: 'https://personal-portfolio-website.vercel.app/',
                category: 'PERSONAL PORTFOLIO WEBSITE',
              },
              
            ].map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 object-cover object-center cursor-pointer border-4 border-orange-200"
                    src={project.image}
                    height={500}
                    width={380}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-1xl title-font font-medium text-white mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-orange-500 mb-3">
                      {project.category}
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <Link target="_blank" href={project.link}>
                      <p className="leading-relaxed text-blue-500">View Project</p>
                    </Link>
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
