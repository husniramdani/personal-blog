import React from "react";
import { TwitterLogo, GithubLogo, FigmaLogo } from "phosphor-react";
import CircleButton from "@components/circle-button";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center mx-24 z-20">
      <div className="flex items-center">
        <p className="font-semibold">Thanks for <span className="text-orange underline"> coming!</span></p>
      </div>
      <h6 className="font-semibold underline">gblog@gmail.com</h6>
      <div className="flex flex-row">
        <CircleButton link="https://www.twitter.com/spindyzel">
          <TwitterLogo
            className="m-auto stroke-current text-black group-hover:text-orange"
            size={24}
            weight="fill"
          />
        </CircleButton>
        <CircleButton link="https://www.github.com/husniramdani/personal-blog">
          <GithubLogo
            className="m-auto stroke-current text-black group-hover:text-orange"
            size={24}
            weight="fill"
          />
        </CircleButton>
        <CircleButton link="https://www.figma.com/community/file/1047928907190850139">
          <FigmaLogo
            className="m-auto stroke-current text-black group-hover:text-orange"
            size={24}
            weight="fill"
          />
        </CircleButton>
      </div>
    </footer>
  );
}
