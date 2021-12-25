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
        <div className="mr-1.5 bg-gradient-to-b from-orange via-orange to-purple h-12 w-12 rounded-center">
          <div className="text-4xl font-semibold bg-sand h-10 w-10 rounded-center">
            G
          </div>
        </div>
        <p className="font-bold text-xl sm:block text-orange">BLOG</p>
      </div>

      <div onClick={switchTheme} className="flex bg-black w-14 h-7 rounded-2xl px-1 items-center justify-between cursor-pointer">
        <input id="toogle-theme" type="checkbox" className="hidden" checked={isChecked} readOnly />
        <Moon weight="fill" size={19} className="text-gray-400" />
        <Sun weight="fill" size={19} className="text-orange" />
        <span className="toggle-dot bg-white rounded-full w-5 h-5 absolute"></span>
      </div>
    </header>
  );
}
