 import Image from "next/image"

export default function Contact() {
  return (
    <div className="flex flex-col w-[70%] md:w-[50%] items-center md:h-[50vh] h-[70vh]  justify-center mx-auto gap-y-4 mt-8 text-center">
      <h1 className="text-greyed font-bold ">Reach Out!</h1>
      <p className="text-whitish text-sm font-semibold w-[300px]">I`&apos;`m open to new opportunities and collaborations ranging from Freelancing, Part time and junior developer roles. Get in touch with me. Looking forward to creating the next generation of amazing web experiences </p>
      <button className="bg-transparent border-whitish border-2  p-2 text-whitish rounded-sm hover:bg-yellowy hover:text-greyed hover:border-yellowy">Send An Email</button>
      <div className="flex gap-x-3">  <Image
          src="/in.png"
          width={25}
          height={25}
          alt="Instagram" />
        <Image
          src="/tw.png"
          width={25}
          height={25}
          alt="Twitter" /></div>
    </div>
  )
}
