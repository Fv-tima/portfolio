import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data"

export default function ProjectCard() {
  return (
    <div className="w-full mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div className="p-1 border-1 project-info 2 border-whitish rounded-sm shadow-md mx-auto text-whitish" key={project.img}>
          <Image
            className="project-image"
            src={project.img}
            width={270}
            height={500}
            alt="" />
          <p className="project-des text-center">{project.description}</p>
          <div className="project-txts">
            <Link href={project.live} className="live">
              <h1 className="project-title">{project.title}</h1>
            </Link>
            <div className="link">
              <Link href={project.github} className="github">
                <Image
                  src="/image/git.png"
                  width={30}
                  height={30}
                  alt="github" />
              </Link>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
