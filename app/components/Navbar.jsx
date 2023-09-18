"use client";

import Link from "next/link";
import { styles } from "../utils/styles";
import { NavLinks } from "../utils/constants";
import { useState } from "react";
import { XMarkIcon, Bars3Icon} from "@heroicons/react/24/outline"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)  


  return (
    <div className=" flex justify-between items-center p-2 sticky left-0 top-0 right-0 border-b border-stone-800 bg-stone-900">
      <div className={` text-2xl font-extrabold ${styles.textColor1}`}>
        <Link href="/#hero" >
            Saqib Hussain
        </Link>
      </div>

      <ul className={` text-stone-500 font-semibold hidden sm:flex gap-6`}>
        {NavLinks.map((NavLink) => {
          return (
            <Link key={NavLink.id} href={NavLink.href}>
              <li
                className={`hover:text-stone-100`}
              >
                {NavLink.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className=" block sm:hidden relative" >
        <button onClick={()=>setMenuOpen(!menuOpen)} className="w-10 h-10 text-white ">
          {menuOpen? <XMarkIcon/>:<Bars3Icon/>}
        </button>
        <div className={`${menuOpen? "absolute":"hidden"} top-[60px] right-0 px-4 flex flex-col items-center justify-center whitespace-nowrap ${styles.menuGrad} rounded-[20px] animate-sideBar gap-4 p-4`}>
          {NavLinks.map((NavLink) => {
            return (
              <Link key={NavLink.id} href={NavLink.href}>
                <div
                  className={`text-stone-100`}
                >
                  {NavLink.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
