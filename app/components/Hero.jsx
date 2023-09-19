"use client";
import React from "react";
import Typed from "typed.js";
import { styles } from "../utils/styles";
import Image from "next/image";

const Hero = () => {
  const anime = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(anime.current, {
      strings: [
       
        "a Frontend Developer.",
        "a Mobile App Developer.",
        "a JavaScript Enthusiast.",
        "a Mechanical Engr.",
      ],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div
      id="hero"
      className=" h-screen flex flex-col-reverse justify-center items-center gap-10 p-10 lg:grid lg:grid-cols-2 lg:justify-center lg:p-20 relative"
      
    >
      <h1 className={`text-2xl sm:text-4xl font-semibold text-stone-100 text-start`}>
        Hi, I&apos;m <span className={`${styles.textColor1}`}>Saqib Hussain,</span><br />
        <span ref={anime} className={`${styles.textColor1}`}></span>
      </h1>
    
      <div className={`${styles.profileBg} rounded-full w-fit`}>
        <Image src={"/portfolioPic.png"} alt="author picture" width={350} height={350} />
      </div>

      <div className={`absolute ${styles.bgGrad} top-1/2 right-0 `}/>

    </div>
  );
};

export default Hero;
