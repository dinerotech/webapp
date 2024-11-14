"use client";

import Link from "next/link";
import React from "react";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.e404;

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-sky-600">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          {t.pageNotFound}
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          {t.sorryWeCloudntFind}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            {t.goBackHome}
          </Link>
          <Link
            href="mailto:support@dineropay.com"
            className="text-sm font-semibold text-gray-900"
          >
            {t.contactSupport} &nbsp;
            <span aria-hidden="true">{cntxt.locale !== "ar" ? "→" : "←"} </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
