"use client";

import React from "react";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import Link from "next/link";
import { JOB_LIST } from "@/domain/jobs/constants";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.jobs;
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-left rtl:text-right text-sm font-semibold text-gray-900 w-3/6"
                  >
                    {t.role}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-left rtl:text-right text-sm font-semibold text-gray-900"
                  >
                    {t.team}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 ltr:text-left rtl:text-right text-sm font-semibold text-gray-900"
                  >
                    {t.location}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {JOB_LIST.map((item, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-4 text-sm font-semibold">
                      <Link
                        href={item.href}
                        className="text-sky-600 hover:text-sky-900"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      {item.team}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                      {item.location}
                    </td>
                  </tr>
                ))}
                {!JOB_LIST && (
                  <tr className="even:bg-gray-50">
                    <td
                      className="whitespace-nowrap px-4 py-10 text-center text-sm text-gray-500 col-span-3"
                      colSpan={3}
                    >
                      {t.noVacancies}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
