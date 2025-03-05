import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="md:hidden flex flex-col">
      <footer className=" flex w-[60%] mx-auto mt-6 items-ceter justify-between gap-x-6">
        <Link href="https://twitter.com/Zvhra2">
          <Image
            src="/image/tw.png"
            width={30}
            height={30}
            alt="Twitter"
          />
        </Link>
        <Link href="https://www.instagram.com/f_eemah/">
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
       
    </footer>
    <p className="text-sm mt-6 text-center">Inspired by <span className="text-subtleText"> Collins Enebeli </span></p>
    </div>
  )
}
