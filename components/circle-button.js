import React from "react";

export default function CircleButton({ link, children}) {
  return (
    <div className="group">
        <a
            href={link}
            target="_blank"
            className="flex item-center border-[3px] border-black group-hover:border-orange h-12 w-12 rounded-full ml-3"
        >
            {children}
        </a>
    </div>
  );
}
