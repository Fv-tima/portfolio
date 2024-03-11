import Image from "next/image"

export default function Footer({child}:any) {
  let data = new Date().getDate
  console.log(data)
  return (
    <footer className="w-full flex justify-between mt-12 inset-x-0 items-bottom">
      <div className="flex flex-col gap-y-6">
        <Image
          src="/in.png"
          width={25}
          height={25}
          alt="Instagram" />
        <Image
          src="/tw.png"
          width={25}
          height={25}
          alt="Twitter" />
      </div>
      <h1 className="text-greyed mt-auto text-lg font-semibold">{child}</h1>
      <h1 className="uppercase text-sm text-greyed"></h1>
    </footer>
  )
}
