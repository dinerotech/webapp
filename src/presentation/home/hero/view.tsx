"use client";
import React from "react";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import CaretRightSVG from "@/assets/svgs/caret_right_gray.svg";
import CaretLeftSVG from "@/assets/svgs/caret_left_gray.svg";
import Image from "next/image";

export default function View() {
  const cntxt = React.useContext(LocaleContext);

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-amber-100/20 pt-14">
      {cntxt.locale !== "ar" && (
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        ></div>
      )}
      {cntxt.locale === "ar" && (
        <div
          className="absolute inset-y-0 left-1/2 -z-10 -ml-96 w-[200%] origin-top-left skew-x-[30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:-ml-80 lg:-ml-96"
          aria-hidden="true"
        ></div>
      )}
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 lg:flex lg:items-center lg:gap-x-10 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-sky-600">
                We’re hiring
              </span>
              <span
                className="h-4 w-px bg-gray-900/10"
                aria-hidden="true"
              ></span>
              <a href="#" className="flex items-center gap-x-1">
                <span className="absolute inset-0" aria-hidden="true"></span>
                See open positions
                {cntxt.locale !== "ar" && (
                  <Image
                    src={CaretRightSVG}
                    alt="caret"
                    className="-mr-2 h-3 w-3"
                  />
                )}
                {cntxt.locale === "ar" && (
                  <Image
                    src={CaretLeftSVG}
                    alt="caret"
                    className="-ml-2 h-3 w-3"
                  />
                )}
              </a>
            </div>
          </div>
          <h1 className="mt-10 text-pretty text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            A better way to ship your projects
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
    </div>
  );
}
