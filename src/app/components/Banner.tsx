

export default function Banner() {
  return (
    <div className="flex flex-col w-[70%] md:w-[50%] items-center md:h-[50vh] h-[70vh]  justify-center mx-auto gap-y-2">
      <div className="flex gap-x-4 items-end">
        <h1 className="text-sm text-greyed uppercase">Hi i'm</h1>
        <hr className="w-[100px] md:w-[290px]" />
      </div>
      <h1 className="text-5xl md:text-8xl font-bold text-whitish uppercase">Fvtima</h1>
      <p className=" text-sm md:text-md text-yellowy font-semibold ml-auto uppercase">A frontend developer</p>
    </div>
  )
}
