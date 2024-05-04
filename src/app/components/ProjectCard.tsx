import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data"

export default function ProjectCard() {
  return (
    <div className="w-[1/3] mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div className="w-full rounded-sm shadow-md mx-auto text-whitish project h-[300px] flex flex-col space-y-4 p-6 pr-8" key={project.live}><h1 className="text-3xl">{project.title}</h1>
          <p className="uppercase">{project.description}</p>
          <p className=" text-gray-400 text-sm capitalize">{project.others}</p>
          <div className="flex space-x-6 items-end h-full pb-8">
            <Link href={project.live} className="flex flex-col space-y-2
">
              <Image
                src="/image/eye.png"
                width={30}
                height={30}
                alt="Live" />
              <p className="italic text-sm">Live</p>
            </Link>
            <div className="link">
              <Link href={project.github} className="flex flex-col space-y-2">
                <Image
                  src="/image/code.png"
                  width={30}
                  height={30}
                  alt="github" />
                <p className="italic text-sm">Code</p>
              </Link>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
