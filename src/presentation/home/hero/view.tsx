"use client";
import React from "react";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import CaretRightSVG from "@/assets/svgs/caret_right_gray.svg";
import CaretLeftSVG from "@/assets/svgs/caret_left_gray.svg";
import Image from "next/image";
import HeroSideView from "@/presentation/home/hero/side/view";
import Link from "next/link";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.home;
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:pb-32 lg:flex lg:px-8">
      <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
        <div className="flex">
          <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <span className="font-semibold text-sky-600">{t.wereHiring}</span>
            <span className="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
            <Link
              href={`${cntxt.locale}/jobs`}
              className="flex items-center gap-x-1"
            >
              <span className="absolute inset-0" aria-hidden="true"></span>
              {t.seeOpenPositions}
              <Image
                src={cntxt.locale !== "ar" ? CaretRightSVG : CaretLeftSVG}
                alt="caret"
                className="ltr:-mr-2 rtl:-ml-2 h-3 w-3"
              />
            </Link>
          </div>
        </div>
        <h1
          className="mt-10 text-pretty text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl leading-relaxed"
          style={{ lineHeight: 1.1 }}
        >
          {t.slogan}
        </h1>
        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          {t.sloganDescription}
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {t.joinUs}
          </a>
          <a
            href={`${cntxt.locale}/products`}
            className="text-sm/6 font-semibold text-gray-900"
          >
            {t.learnMore} &nbsp;
            <span aria-hidden="true">{cntxt.locale !== "ar" ? "→" : "←"} </span>
          </a>
        </div>
      </div>
      <HeroSideView />
    </div>
  );
}
