import React from "react";

export default function View({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-amber-100/20">
      <div
        className="absolute inset-y-0 ltr:right-1/2 rtl:left-1/2 -z-10 ltr:-mr-96 rtl:-ml-96 w-[200%] ltr:origin-top-right rtl:origin-top-left ltr:skew-x-[-30deg] rtl:skew-x-[30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 ltr:sm:-mr-80 ltr:lg:-mr-96 rtl:sm:-ml-80 rtl:lg:-ml-96"
        aria-hidden="true"
      ></div>
      {children}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
    </div>
  );
}
