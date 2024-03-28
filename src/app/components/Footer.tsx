import Image from "next/image"
import Link from "next/link"

export default function Footer({ child }: any) {
  const date = new Date();
  let time = date.toLocaleString();
  return (
    <footer className="w-full flex justify-between mt-12 inset-x-0 items-bottom">
      <div className="flex flex-col gap-y-6">
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
      <h1 className="text-greyed text-center mt-auto text-lg font-semibold">{child}</h1>
      <h1 className="uppercase text-greyed font-bold mt-auto">{time}</h1>
    </footer>
  )
}
