"use client"
import { useState } from "react";
import Link from "next/link";
import { navItems } from "../data";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const open = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <nav >
      <div className="hidden justify-between items-center fixed z-10 left-8 md:flex">
        <div className="text-lightText display flex items-start flex-col gap-6 justify-center p-8 bg-darkBg w-full h-screen" >
          <h1 className="text-5xl font-bold mb-4">Hello, I'm <br /> Fatima Oluwalogbon.</h1>
          <p className="text-lightText max-w-md">
            I'm a <span className="text-subtleText"> Frontend Engineer </span> dedicated to building engaging <span className="text-subtleText"> websites and mobile interfaces. </span> I focus on solving <span className="text-subtleText">problems </span> through frontend technology and am passionate about <span className="text-subtleText"> user experience, accessibility, design engineering, web animations, and emerging fields like web3.</span>
          </p>
          <div className='flex flex-col gap-3 my-4'>
            <Link
              href="/website"
              className={`flex gap-2 items-center ${pathname === "/website" || pathname === "/" ? "text-white font-bold" : "text-subtleText"
                } transition-all duration-300`}
            >
              <span className="text-sm">00</span>
              <hr
                className={`text-subtleText h-[.5px] ${pathname === "/website" || pathname === "/" ? "w-10" : "w-8"
                  } transition-all duration-300`}
              />
              <li className="list-none">Web Applications</li>
            </Link>
            <Link
              href="/mobile"
              className={`flex gap-2 items-center ${pathname === "/mobile" ? "text-white font-bold" : "text-subtleText"} transition-all duration-300`}
            >
              <span className="text-sm">01</span>
              <hr className={`text-subtleText h-[.5px] ${pathname === "/mobile" ? "w-10" : "w-8"} transition-all duration-300`} />
              <li className='list-none'>Mobile Applications</li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fatima-oluwalogbon-287b35242"
              className={`flex gap-2 items-center ${pathname === "https://www.linkedin.com/in/fatima-oluwalogbon-287b35242" ? "text-white font-bold" : "text-subtleText"} transition-all duration-300`}
            >
              <span className="text-sm">02</span>
              <hr className={`text-subtleText h-[.5px] ${pathname === "https://www.linkedin.com/in/fatima-oluwalogbon-287b35242" ? "w-10" : "w-8"} transition-all duration-300`} />
              <li className='list-none'>Linkedin</li>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Image src="/image/profile.jpeg" width={50} height={50} alt="profile" className="rounded-full" />
            <Link href="https://github.com/Fv-tima " className="flex items-end gap-1">
              <Image
                src="/image/git.png"
                width={20}
                height={20}
                alt="github" />
              <p className="text-subtleText text-sm">Github</p>
              <Image
                src="/image/download.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </Link>
            <Link href="https://www.instagram.com/teemah247/" className="flex items-end gap-1">
              <Image
                src="/image/in.png"
                width={20}
                height={20}
                alt="Instagram" />
              <p className="text-subtleText text-sm">Instagram</p>
              <Image
                src="/image/download.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </Link>
            <Link href="https://twitter.com/Zvhra2" className="flex items-end gap-1">
              <Image
                src="/image/tw.png"
                width={20}
                height={20}
                alt="Twitter"
              />
              <p className="text-subtleText text-sm">Twitter</p>
              <Image
                src="/image/download.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </Link>
          </div>
          <p className="text-sm">Inspired by <span className="text-subtleText"> Collins Enebeli </span></p>
        </div>
      </div>
      {/* Mobile  */}
      <div className="flex justify-between w-full  mx-auto p-8 fixed bg-darkBg top-0 z-50 md:hidden">
        <h1 className="font-semibold text-3xl">Fatima.</h1>
        <div className="md:hidden" onClick={open}>
          {openNav ? <Image
            src="/image/close.png"
            width={30}
            height={30}
            alt="close" /> :
            <Image
              src="/image/menu.png"
              width={30}
              height={30}
              alt="open" />}
        </div>
      </div>
      {openNav && (
        <div className="md:hidden h-screen items-center w-full mx-auto text-center mt-24 flex flex-col gap-y-12 bg-darkBg fixed" >

          <div className="flex flex-col gap-y-8" onClick={open}>
            {navItems.map((item) => (
              <ul key={item.id} >
                <Link className="text-subtleText text-2xl font-medium" href={item.link}><li>{item.name}</li></Link>
              </ul>
            ))}
          </div>

          <h1 className="text-2xl font-bold">Connect With Me</h1>
          <div className="flex  gap-x-6">
            <Link href="https://twitter.com/Zvhra2">
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
          </div>
        </div>
      )}
    </nav>
  )
}
