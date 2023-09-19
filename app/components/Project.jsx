"use client"
import React from "react";
import Link from "next/link";
import { styles } from "../utils/styles";
import { ProjectDetails } from "../utils/constants";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {HiCode} from "react-icons/hi"
import {MdWebAsset} from "react-icons/md"

const Project = () => {
  return (
    <div className="mt-10" id="project">
      <h1 className={`${styles.header1}`}>My Projects</h1>
      <div className="sm:w-[80%] m-auto">
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
        >
        {ProjectDetails.map((project,index) => {
          return (
            <div key={index} className="relative flex justify-center items-center">
              <Image
                src={project.img}
                width={600}
                height={300}
                className=" rounded-xl"
                alt={project.name}
              />
              <div className=" absolute text-4xl text-emerald-400 bg-stone-800/75 rounded-full flex flex-col justify-center items-center p-4">
                <h4 className="m-1 text-2xl font-bold">{project.name}</h4>
                <div className="flex justify-center items-center gap-4">
                  <Link href={project.code} target="blank">
                    <HiCode/>  
                  </Link>
                  <Link href={project.live} target="blank">
                    <MdWebAsset/>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}     
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
