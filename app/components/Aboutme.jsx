"use client"
import React from 'react'
import { styles } from '../utils/styles'
import {FaQuoteLeft, FaHtml5, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Certifications } from '../utils/constants'
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Aboutme = () => {
  return (
    <div id='aboutme'>
      <h1 className={`${styles.header1}`}>About Me</h1>
      <div className={`${styles.profileBg} shadow-inner m-auto rounded-xl p-4 sm:p-10 w-full lg:w-[80%] flex flex-col gap-5 justify-center items-center`}>
        <FaQuoteLeft className={` text-stone-800 text-3xl`}/>
        <h2 className=' text-xl sm:text-2xl text-stone-800 font-bold'>
          Hello! I&apos;m Saqib Hussain, a passionate Frontend Developer with a deep love for crafting beautiful and responsive user interfaces. With expertise in ReactJs, NextJs, and TailwindCSS, I thrive on turning complex ideas into user-friendly web experiences.
        </h2>
      </div>

      <motion.div className=' text-center text-green-400 mt-5 rounded-full '
        variants={{
          hidden:{ y:75 , opacity:0},
          visible: {y:0, opacity:1}
        }}
        initial = "hidden"
        animate = "visible"
        transition={{ duration: 2, type: 'spring', bounce:0.75}}
        >
        <p className=' text-green-400 text-lg sm:text-2xl font-bold'>My Stack:</p>
        <div className='flex text-white items-center gap-4 justify-center text-4xl my-4'>
          <FaHtml5 className="hover:text-green-400  duration-500"/>
          <FaCss3Alt className="hover:text-green-400  duration-500"/>
          <SiJavascript className="hover:text-green-400  duration-500"/>
          <FaReact className="hover:text-green-400  duration-500"/>
          <SiNextdotjs className="hover:text-green-400  duration-500"/>
          <SiTailwindcss className="hover:text-green-400  duration-500"/>
        </div>
      </motion.div>

      <div className='m-auto lg:w-[80%] flex flex-col justify-center items-center'>
        <h4 className=' text-lg sm:text-2xl font-bold text-green-400 mb-4'>My Certifications:</h4>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          autoPlay = {true}
          interval={3000}
        >
        {Certifications.map((certificate,index) => {
          return (
            <Link key={index} href={certificate.link} target='blank'>
              <div  className="relative flex justify-center items-center">
                
                <Image
                  src={certificate.img}
                  width={1920}
                  height={1287}
                  alt={"certificate"}
                />
                <div className='absolute bottom-10 text-lg sm:text-xl font-semibold bg-stone-800/75 rounded-full text-green-400 px-4 py-1 animate-bounce'>
                  Click to Verify!
                </div>
              </div>
            </Link>
          );
        })}     
        </Carousel>
      </div>
      
    </div>
  )
}

export default Aboutme