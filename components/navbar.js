import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useTheme } from "next-themes";
import { Sun, Moon } from "phosphor-react";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === "light" ? false : true)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
      setIsChecked(!isChecked)
    }
  };

  return (
    <header className="
      flex justify-between items-center mx-5 mb-5 z-50
      md:mb-0 md:mx-24
    ">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="rounded-center mr-1.5 bg-gradient-to-b from-orange via-orange to-purple h-12 w-12">
            <div className="rounded-center text-4xl font-semibold bg-sand h-10 w-10 dark:bg-black">
              G
            </div>
          </div>
          <p className="
            font-bold text-xl text-orange
            sm:block
          ">
            BLOG
          </p>
        </div>
      </Link>

      <div className="relative group p-0.5 rounded-2xl dark:bg-orange">
        <div className="
          absolute hidden rounded-2xl -inset-0.5 blur opacity-60 transition duration-1000
          md:block
          group-hover:duration-200 group-hover:opacity-100
          dark:bg-orange
        "/>
        <div
          onClick={switchTheme}
          className="relative flex bg-black w-14 h-7 rounded-2xl px-1 items-center justify-between cursor-pointer"
        >
          <input
            id="toogle-theme"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            readOnly
          />
          <Sun
            weight="fill"
            size={19}
            className="text-gray-400"
          />
          <Moon
            weight="fill"
            size={19}
            className="text-orange"
          />
         <span className="toggle-dot bg-white rounded-full w-5 h-5 absolute" />
        </div>
      </div>
    </header>
  );
}
