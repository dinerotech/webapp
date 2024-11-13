"use client";

import React from "react";
import Logo02SVG from "@/assets/svgs/logo02.svg";
import Image from "next/image";
import Link from "next/link";

export default function View() {
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
      </nav>
    </header>
  );
}
