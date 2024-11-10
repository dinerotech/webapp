import React from "react";
import ScreenshotPNG from "@/assets/pngs/screenshot.png";

import Image from "next/image";
export default function View() {
  return (
    <div className="hidden lg:flex mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
      <div className="">
        <Image
          src={ScreenshotPNG}
          alt=""
          className="mx-auto w-[16.875rem] max-w-full drop-shadow-xl"
        />
      </div>
    </div>
  );
}
