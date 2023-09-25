import React from 'react'
import { styles } from '../utils/styles'
import Link from 'next/link'
import {BiLogoGmail,BiLogoTelegram, BiLogoDiscordAlt} from "react-icons/bi"

const Contact = () => {
  return (
    <div id="contact" className='mt-10'>
      <h1 className={`${styles.header1}`}>
        Let&apos;s Collaborate
      </h1>
      <div className=' shadow-inner rounded-xl flex flex-col justify-center items-center'>
        <div className={`text-lg sm:text-xl text-stone-800 font-semibold ${styles.profileBg} rounded-xl p-5 sm:m-0 lg:w-[80%]`}>
          I&apos;m passionate about collaborating with teams that share my enthusiasm for innovation and quality. Whether it&apos;s transforming ideas into interactive prototypes, optimizing performance, or troubleshooting complex issues, I&apos;m here to make it happen.<br/>
          If you&apos;re looking for a dedicated Frontend Developer who can turn your vision into reality using React, Next.js, and TailwindCSS, let&apos;s connect. Together, we can create exceptional web experiences that will leave a lasting impression.<br/>
          Let&apos;s build the future of the web, one line of code at a time.
        </div>
        <div className={`${styles.textColor1} flex flex-col items-center m-10 `}>
          <h4 className=' font-bold text-xl sm:text-2xl mb-2'>Contact me here:</h4>
          <div className=' text-stone-100 text-4xl flex jusitfy-center items-center gap-4 animate-pulse'>
            <a href="mailto:dev.saqibhussain@gmail.com"><BiLogoGmail/></a>
            <Link href="https://discord.com/users/1123024661630955661" target='_blank'><BiLogoDiscordAlt/></Link>
            <Link href="https://t.me/devsaqib" target='_blank'><BiLogoTelegram/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact