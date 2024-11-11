import React from 'react';
import Image from 'next/image';

export function Contact() {
  return (
    <div>
      <section className="text-white bg-black body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          
          {/* Contact Information Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex relative">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 bg-gray-900 rounded-lg p-5">
              <h1 className='text-4xl font-serif text-orange-400 mb-4'>LET’S CONNECT</h1>
              <p className="mb-6 text-white">Send me a message by submitting the form below.</p>
              <h2 className="font-sans font-bold text-white tracking-widest text-xl mb-4">EMAIL</h2>
              <div className="flex items-center mb-4">
                <Image
                  className="mr-2"
                  alt="email-icon"
                  src={"/Untitled design (2).gif"}
                  height={30}
                  width={30}
                />
                <a className="text-white text-lg" href="mailto:anashakeem05@gmail.com">anashakeem05@gmail.com</a>
              </div>

              <h2 className="font-sans font-bold text-white tracking-widest text-xl mb-4">PHONE</h2>
              <div className="flex items-center mb-4">
                <Image
                  className="mr-2"
                  alt="whatsapp-icon"
                  src={"/whatsapp (2).gif"}
                  height={30}
                  width={30}
                />
                <p className="text-white text-lg">+92 3442427898</p>
              </div>

              <p className="leading-relaxed text-xl mt-6 text-white">
                <span className="font-bold">
                THANKS FOR VISITING MY WEBSITE🥰.</span>
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6 rounded-l-lg">
            <h2 className="text-white text-3xl mb-4 font-medium title-font">Contact Me</h2>
            <p className="leading-relaxed mb-6 text-white">Feel free to reach out to me with any inquiries!</p>
            
            {/* Name Input */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>

            {/* Send Button */}
            <button className="text-white bg-orange-500 border-0 py-2 font-bold px-6 focus:outline-none hover:bg-amber-600 rounded text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-1">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

