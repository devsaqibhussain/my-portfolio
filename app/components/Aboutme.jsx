"use client"
import React from 'react'
import { styles } from '../utils/styles'
import {FaQuoteLeft, FaHtml5, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'

const Aboutme = () => {
  return (
    <div id='aboutme'>
        <h1 className={`${styles.header1}`}>About Me</h1>
      <div className={`${styles.profileBg} shadow-inner m-auto rounded-xl p-4 sm:p-10 w-[80%] flex flex-col gap-5 justify-center items-center`}>
        <FaQuoteLeft className={` text-stone-800 text-3xl`}/>
        <h2 className=' text-xl sm:text-2xl text-stone-800 font-bold'>
          Hello! I'm Saqib Hussain, a passionate Frontend Developer with a deep love for crafting beautiful and responsive user interfaces. With expertise in ReactJs, NextJs, and TailwindCSS, I thrive on turning complex ideas into user-friendly web experiences.
        </h2>
      </div>

      <motion.div className=' text-center text-green-400 mt-5 rounded-full '
        variants={{
          hidden:{ y:75 , opacity:0},
          visible: {y:0, opacity:1}
        }}
        initial = "hidden"
        animate = "visible"
        transition={{ duration: 2, delay:0.2, type: 'spring', bounce:0.75}}
        >
        <p className=' text-green-400 md:text-xl font-bold'>TOOLS I USE:</p>
        <div className='flex text-white items-center gap-4 justify-center text-4xl my-4'>
          <FaHtml5 className="hover:text-green-400  duration-500"/>
          <FaCss3Alt className="hover:text-green-400  duration-500"/>
          <SiJavascript className="hover:text-green-400  duration-500"/>
          <FaReact className="hover:text-green-400  duration-500"/>
          <SiNextdotjs className="hover:text-green-400  duration-500"/>
          <SiTailwindcss className="hover:text-green-400  duration-500"/>
        </div>
      </motion.div>
      
    </div>
  )
}

export default Aboutme