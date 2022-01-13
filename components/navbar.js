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
    <header className="flex justify-between items-center z-50 mx-5 mb-5 md:mb-0 md:mx-24">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="mr-1.5 bg-gradient-to-b from-orange via-orange to-purple h-12 w-12 rounded-center">
            <div className="text-4xl font-semibold bg-sand dark:bg-black h-10 w-10 rounded-center">
              G
            </div>
          </div>
          <p className="font-bold text-xl sm:block text-orange">BLOG</p>
        </div>
      </Link>

      <div className="relative group p-0.5 dark:bg-orange rounded-2xl">
        <div className="absolute hidden md:block dark:bg-orange rounded-2xl -inset-0.5 blur opacity-60 transition duration-1000 group-hover:duration-200 group-hover:opacity-100" />
        <div onClick={switchTheme} className="relative flex bg-black w-14 h-7 rounded-2xl px-1 items-center justify-between cursor-pointer">
          <input id="toogle-theme" type="checkbox" className="hidden" checked={isChecked} readOnly />
          <Sun weight="fill" size={19} className="text-gray-400" />
          <Moon weight="fill" size={19} className="text-orange" />
          <span className="toggle-dot bg-white rounded-full w-5 h-5 absolute"></span>
        </div>
      </div>
    </header>
  );
}
