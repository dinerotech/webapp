import React from "react";
import ScreenshotRTLPNG from "@/assets/pngs/screenshot_rtl.png";
import ScreenshotLTRPNG from "@/assets/pngs/screenshot_ltr.png";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";

import Image from "next/image";
export default function View() {
  const cntxt = React.useContext(LocaleContext);

  return (
    <div className="hidden lg:flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
      <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <Image
          src={cntxt.locale !== "ar" ? ScreenshotLTRPNG : ScreenshotRTLPNG}
          alt="hero"
          width="3601"
          height="2048"
          className="w-[60rem] drop-shadow-xl"
        />
      </div>
    </div>
  );
}
