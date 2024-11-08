"use client"
import Image from "next/image"
import { useState } from "react";
import Link from "next/link"
import { projects } from "@/data"

export default function ProjectCard() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
      {projects.map((project, index) => (
        <div
          className={`md:w-[350px] w-[330px] rounded-sm shadow-md mx-auto text-white project h-[260px] flex flex-col space-y-4 bg-darkCard p-6 pr-8 transition-all duration-300 
            ${index % 2 === 0 ? 'mt-6' : ''} 
            ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : ''} 
            ${hoveredIndex === index ? 'scale-110' : ''}`}
          key={index}
          onMouseEnter={() => setHoveredIndex(index as unknown as null)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h1 className="text-3xl">{project.title}</h1>
          <p className="uppercase text-sm font-light ">{project.description}</p>
          <p className="text-subtleText text-sm capitalize">{project.others}</p>
          <div className="flex space-x-6 items-end h-full pb-8">
            <Link href={project.live} className="flex text-subtleText items-center space-x-2">
              <Image src="/image/eye.png" width={20} height={20} alt="Live" />
              <p className="text-sm">Live</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
