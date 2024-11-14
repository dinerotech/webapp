"use client";
import React from "react";
import LogoSVG from "@/assets/svgs/logo03.svg";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import Image from "next/image";
import {
  PRODUCT_FOOTER_NAV,
  SOLUTION_FOOTER_NAV,
  DEVELOPERS_FOOTER_NAV,
  RESOURCES_FOOTER_NAV
} from "@/domain/navs/constants";
import Link from "next/link";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.home;
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <Image src={LogoSVG} alt="DineroPay" className="w-20" />
            </Link>
            <p className="text-balance text-sm/6 text-gray-600">
              {t.sloganDescription}
            </p>
            <div className="flex gap-x-6">
              <Link
                href="https://x.com/DineroPay"
                target="_blank"
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">X</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 300 300"
                  aria-hidden="true"
                >
                  <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/dineropay"
                target="_blank"
                className="text-gray-600 hover:text-gray-800"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 310 310"
                  aria-hidden="true"
                >
                  <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path>
                  <path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path>
                  <path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {t.products}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {PRODUCT_FOOTER_NAV.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${cntxt.locale}/${item.href}`}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {t[item.identifier as keyof typeof t]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {t.solutions}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {SOLUTION_FOOTER_NAV.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${cntxt.locale}/${item.href}`}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {t[item.identifier as keyof typeof t]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {t.developers}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {DEVELOPERS_FOOTER_NAV.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${cntxt.locale}/${item.href}`}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {t[item.identifier as keyof typeof t]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">
                  {t.resources}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {RESOURCES_FOOTER_NAV.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${cntxt.locale}/${item.href}`}
                        className="text-sm/6 text-gray-600 hover:text-gray-900"
                      >
                        {t[item.identifier as keyof typeof t]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-600">
            &copy; {new Date().getFullYear()} {t.copyrights}
          </p>
        </div>
      </div>
    </footer>
  );
}
