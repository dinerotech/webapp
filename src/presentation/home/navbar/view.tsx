"use client";

import React from "react";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import Image from "next/image";
import { MAIN_NAV } from "@/domain/navs/constants";
import Link from "next/link";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import CaretRightSVG from "@/assets/svgs/caret_right_white.svg";
import CaretLeftSVG from "@/assets/svgs/caret_left_white.svg";
import BurgerView from "@/presentation/home/navbar/burger/view";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.home;

  return (
    <header className="relative inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-none flex-1 shrink-0">
          <Link href="/" className="p-1.5">
            <span className="sr-only">DineroPay</span>
            <Image className="h-8 w-auto" src={Logo02SVG} alt="logo" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <BurgerView />
        </div>

        {/* Nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {MAIN_NAV.map((item, index) => (
            <Link
              key={index}
              href={`/${cntxt.locale}/${item.href}`}
              className="whitespace-nowrap text-sm/6 font-semibold text-gray-900"
            >
              {t[item.identifier as keyof typeof t]}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            href={cntxt.locale === "ar" ? "/en" : "/ar"}
            className="whitespace-nowrap rounded-full bg-sky-50 px-4 py-2 text-sm/6 font-semibold text-sky-600 shadow-sm hover:bg-indigo-100"
          >
            {cntxt.locale === "ar" ? "EN" : "AR"}
          </Link>
          <Link
            href="https://dashboard.dineropay.com/"
            target="_blank"
            className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm/6 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {t.signIn}
          </Link>
          <Link
            href={
              cntxt.locale !== "ar" ? "/en/contact-sales" : "/ar/contact-sales"
            }
            className="whitespace-nowrap inline-flex items-center rounded-full bg-amber-500 px-4 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >
            {t.contactSales} &nbsp;
            <Image
              className="mt-0.5 h-3 w-3 fill-white"
              src={cntxt.locale === "ar" ? CaretLeftSVG : CaretRightSVG}
              alt=""
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
