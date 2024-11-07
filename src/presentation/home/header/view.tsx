"use client";
import React from "react";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";

export default function View({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cntxt = React.useContext(LocaleContext);
//   const t = cntxt.resource.home;
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-amber-100/20">
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
      {children}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
    </div>
  );
}
