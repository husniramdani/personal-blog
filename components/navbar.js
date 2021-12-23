import React, { useEffect, useState } from "react";
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
    <header className="flex justify-between items-center mx-24">
      <div className="flex items-center">
        <p className="font-bold text-xl sm:block text-orange">BLOG</p>
      </div>

      <div onClick={switchTheme} className="flex bg-black w-14 h-7 rounded-2xl px-1 items-center justify-between cursor-pointer">
        <input id="toogle-theme" type="checkbox" className="hidden" checked={isChecked} readOnly />
        <Moon weight="fill" size={19} className="text-gray-200" />
        <Sun weight="fill" size={19} className="text-gray-200" />
        <span className="toggle-dot bg-white rounded-full w-5 h-5 absolute"></span>
      </div>
    </header>
  );
}
