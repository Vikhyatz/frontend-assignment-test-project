"use client"
import Image from "next/image";
import Link from "next/link";

// page transition using framer motion
import { AnimatePresence, motion } from 'framer-motion';


export default function Home() {
  return (
    <>
    {/* framer motion page animations fade-in, fade out */}
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== 'undefined' ? window.location.pathname : 'server'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
      {/* hero content */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:py-45 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Discover and Book Top Performing Artists with Ease</h1>
            <p className="mb-8 leading-relaxed">Artistly.com connects event planners with a wide range of talented performers including singers, dancers, speakers, and DJs. Browse profiles, check availability, and book the perfect artist for your event—all in one place.</p>
            <div className="flex justify-center">
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero image"
              src="/hero.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* artist category section */}
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Browse by Artist Category</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Find the perfect performer for your event by exploring different categories of talented artists. Whether you need a singer, dancer, speaker, or DJ—Artistly has you covered.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-96 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-200"
                  src="/ctgry1.png"
                  alt="singers"
                  width={100}
                  height={100}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Category 1</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Singers</h2>
                <p className="text-base">Book professional singers to set the perfect mood for your event, from soulful soloists to energetic bands</p>
                <Link href="/artists" className="cursor-pointer inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">Explore Singers</Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-96 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-200"
                  src="/ctgry2.png"
                  alt="dancers"
                  width={100}
                  height={100}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Categor2</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Dancers</h2>
                <p className="text-base">Bring energy and excitement to your event with talented dancers from various styles and genres.</p>
                <Link href="/artists" className="cursor-pointer inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">Explore Dancers</Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-96 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-200"
                  src="/ctgry3.png"
                  alt="DJs"
                  width={100}
                  height={100}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Category 3</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">DJs</h2>
                <p className="text-base">Hire skilled DJs to create an unforgettable atmosphere with customized playlists and seamless mixes.</p>
                <Link href="/artists" className="cursor-pointer inline-flex text-white bg-indigo-500 1orde3-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">Explore DJs</Link>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <Image
                  className="h-96 rounded w-full object-cover object-center mb-6 hover:scale-105 transition-all duration-200"
                  src="/ctgry4.png"
                  alt="speakers"
                  width={100}
                  height={100}
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">Category 4</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Speakers</h2>
                <p className="text-base">Invite motivational speakers, industry experts, or entertainers to inspire and engage your audience.</p>
                <Link href="/artists" className="cursor-pointer inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5">Explore Speakers</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </motion.div>
      </AnimatePresence>
    </>
  );
}
