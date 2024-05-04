"use client"
import { useState } from "react";
import Link from "next/link";
import { navItems } from "../data";
import Image from "next/image";


export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const open = () => {
    setOpenNav((prev) => !prev);
  };
  return (
    <nav >
      <div className="flex justify-between items-center ">
        <Link href="/" className="text-whitish" >
          <Image
            src="/image/logo.png"
            width={60}
            height={60}
            alt="Twitter" />
        </Link>
        <div className="flex-row items-center md:flex md:space-x-[48px] space-x-[30px] hidden">
          {navItems.map((item) => (
            <ul key={item.id} className="border-b-yellowy">
              <Link className="text-greyn text-[14px] md:text-[18px] font-medium capitalize hover:text-yellowy " href={item.link}><li>{item.name}</li></Link>
            </ul>
          ))}
        </div>
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
        <div className="md:hidden mt-4 h-screen justify-center flex" >
          <div className="flex flex-col space-y-[48px]" onClick={open}>
            {navItems.map((item) => (
              <ul key={item.id} className="border-b-yellowy">
                <Link className="text-greyn text-[16px] md:text-[18px] font-medium capitalize  hover:text-yellowy" href={item.link}><li>{item.name}</li></Link>
              </ul>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
