import Link from "next/link";
import { navItems } from "../data";


export default function Nav() {
  return (
    <nav className="flex justify-between items-center ">
      <Link href="/" className="text-whitish" >Fv</Link>
      <div className="flex flex-row gap-16 items-center ">
        {navItems.map((item) => (
          <ul key={item.id} className="border-b-yellowy">
            <Link className="text-greyn text-[14px] md:text-[18px] font-medium capitalize " href={item.link}><li>{item.name}</li></Link>
          </ul>
        ))}
      </div>
    </nav>
  )
}
