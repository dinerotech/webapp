"use client";

import React from "react";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import Image from "next/image";
import BurgerSVG from "@/assets/svgs/burger.svg";
import { MAIN_NAV } from "@/domain/navs/constants";
import Link from "next/link";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import CaretRightSVG from "@/assets/svgs/caret_right.svg";
import CaretLeftSVG from "@/assets/svgs/caret_left.svg";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.home;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex flex-1 lg:flex-none">
          <a href="#" className="p-1.5">
            <span className="sr-only">DineroPay</span>
            <Image className="h-8 w-auto" src={Logo02SVG} alt="logo" />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Image
              className="h-6 w-6"
              aria-hidden="true"
              data-slot="icon"
              src={BurgerSVG}
              alt="burger"
            />
          </button>
        </div>

        {/* Nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {MAIN_NAV.map((item, index) => (
            <Link
              key={index}
              href={`/${cntxt.locale}/${item.href}`}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {t[item.identifier as keyof typeof t]}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href={cntxt.locale === "ar" ? "/en" : "/ar"}
            className="rounded-full bg-sky-50 px-4 py-1 text-sm/6 font-semibold text-sky-600 shadow-sm hover:bg-indigo-100"
          >
            {cntxt.locale === "ar" ? "EN" : "AR"}
          </a>
          <a
            href="https://dashboard.dineropay.com/"
            target="_blank"
            className="rounded-full bg-white px-4 py-1 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t.signIn}
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-amber-500 px-4 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            {t.contactSales} &nbsp;
            <Image
              className="mt-0.5 h-3 w-3"
              src={cntxt.locale === "ar" ? CaretLeftSVG : CaretRightSVG}
              alt=""
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
