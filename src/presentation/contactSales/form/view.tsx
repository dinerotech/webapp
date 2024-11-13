"use client";

import React from "react";

import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import { SALES_REQUEST_TYPES } from "@/domain/sales/constants";
import Image from "next/image";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.contactSales;
  return (
    <div className="mx-auto max-w-xl lg:max-w-4xl px-6 py-12 sm:py-24 lg:px-8">
      <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {t.title}
      </h2>
      <p className="mt-2 text-lg/8 text-gray-600">{t.subTitle}</p>
      <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form action="#" method="POST" className="lg:flex-auto">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="full-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                {t.fullName}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone-no"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                {t.phoneNo}
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone-no"
                  id="phone-no"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="055-123-4567"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                {t.email}
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="request-type"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                {t.requestType}
              </label>
              <div className="mt-2.5">
                <select
                  name="request-type"
                  id="request-type"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-sm/6"
                >
                  {SALES_REQUEST_TYPES.map((item, index) => (
                    <option key={index} value={item.value}>
                      {t[item.identifier as keyof typeof t]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                {t.message}
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              {t.letsTalk}
            </button>
          </div>
          <p className="mt-4 text-sm/6 text-gray-500">
            {t.bySubmittingConsent}&nbsp;
            <a
              href={`/${cntxt.locale}/privacy-policy`}
              className="font-semibold text-sky-600 lowercase"
            >
              {t.privacyPolicy}
            </a>
            .
          </p>
        </form>
        <div className="lg:mt-6 lg:w-80 lg:flex-none">
          <Image
            className="h-12 w-auto"
            src="https://tailwindui.com/plus/img/logos/workcation-logo-sky-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-lg/8 font-semibold text-gray-900">
              <p>{t.salesMessage}</p>
            </blockquote>
            <figcaption className="mt-10 flex gap-x-6">
              <Image
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                alt=""
                className="size-12 flex-none rounded-full bg-gray-50"
              />
              <div>
                <div className="text-base font-semibold text-gray-900">
                  {t.salesManagerName}
                </div>
                <div className="text-sm/6 text-gray-600">{t.salesManager}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
