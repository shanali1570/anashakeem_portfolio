import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Certificate() {
  return (
    <div>
      <section className="text-dark to-black body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-7xl font-bold text-white underline">
              My Certifications
            </h1>
          </div>
          <div className="flex flex-wrap m-2 mt-17">
            {[{
                title: 'HTML5 CSS3 Javascript',
                description: 'Certificate',
                image: '/HTML5_CSS3_Javascript_Certificate.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'HTML5 Intermediate Level',
                description: '',
                image: '/Anas Hakeem.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Node.js Fundamentals',
                description: '',
                image: '/Anas Hakeem Certificate.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Web Development Fundamentals',
                description: 'Certificate',
                image: '/Certificate_Github.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'GitHub Copilot',
                description: '',
                image: '/Certificate_Github.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Next.js 14 Fundamentals',
                description: '',
                image: '/Next.js.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'UI/UX Designer',
                description: '',
                image: '/UIUX.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'Tailwind CSS',
                description: '',
                image: '/Certificate_tailwindcss.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
              {
                title: 'TypeScript Fundamentals',
                description: '',
                image: '/Typescript Certificate.png',
                link: 'https://github.com/anashakeem123',
                category: 'Certificate',
              },
            ].map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <Image
                    alt={project.title}
                    className="absolute inset-0 object-cover object-center cursor-pointer border-4 border-orange-200"
                    src={project.image}
                    height={500}
                    width={380}
                  />
                  <div className="px-20 py-20 relative z-11 w-full border-4 border-orange-200 bg-gray-900 opacity-0 hover:opacity-100">
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
