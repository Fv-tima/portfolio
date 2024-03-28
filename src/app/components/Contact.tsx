import Image from "next/image"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="flex flex-col w-[70%] md:w-[50%] items-center md:h-[50vh] h-[70vh]  justify-center mx-auto gap-y-6 mt-8 text-center">
      <h1 className="text-greyed font-bold ">Reach Out!</h1>
      <p className="text-whitish text-sm font-semibold w-[300px]">I&apos;m open to new opportunities and collaborations ranging from Freelancing, Part time and junior developer roles. Get in touch with me. Looking forward to creating the next generation of amazing web experiences </p>
      <Link href="mailto:zahraoluwalogbon@gmail.com" className="bg-transparent border-whitish border-2  p-2 text-whitish rounded-sm hover:bg-yellowy hover:text-greyed hover:border-yellowy">Send An Email</Link>
      <div className="flex gap-x-5"> <Link href="https://twitter.com/Zvhra2">
        <Image
          src="/image/tw.png"
          width={30}
          height={30}
          alt="Twitter"
        />
      </Link>
        <Link href="https://www.instagram.com/teemah247/">
          <Image
            src="/image/in.png"
            width={30}
            height={30}
            alt="Instagram" />
        </Link>
        <Link href="https://github.com/Fv-tima">
          <Image
            src="/image/git.png"
            width={30}
            height={30}
            alt="github" />
        </Link> 
        <Link href="https://www.linkedin.com/in/fatima-oluwalogbon-287b35242">
          <Image
            src="/image/link.jpg"
            width={32}
            height={32}
            alt="linkedin" />
        </Link>  </div>
    </div>
  )
}
