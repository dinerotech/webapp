import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel
} from "@headlessui/react";
import Link from "next/link";
import clsx from "clsx";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import { MAIN_NAV } from "@/domain/navs/constants";

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
}

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.home;

  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 mx-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-sm/6 font-semibold tracking-tight text-slate-900 shadow-md ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {MAIN_NAV.map((item, index) => (
          <PopoverButton
            key={index}
            as={Link}
            href={`/${cntxt.locale}/${item.href}`}
            className="block w-full p-2"
          >
            {t[item.identifier as keyof typeof t]}
          </PopoverButton>
        ))}
        <hr className="m-2 border-slate-300/40" />
        <PopoverButton
          as={Link}
          href={cntxt.locale !== "ar" ? "/ar" : "/en"}
          className="block w-full p-2"
        >
          {cntxt.locale !== "ar" ? "العربية" : "English"}
        </PopoverButton>
        <PopoverButton
          as={Link}
          href="https://dashboard.dineropay.com/"
          target="_blank"
          className="block w-full p-2"
        >
          {t.signIn}
        </PopoverButton>
        <PopoverButton as={Link} href="#" className="block w-full p-2">
          {t.contactSales}
        </PopoverButton>
      </PopoverPanel>
    </Popover>
  );
}
