import React from "react";

export default function View() {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 sm:py-12 lg:px-8">
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
      <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our Mission</h2>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#0ea5e9" />
            <stop offset="1" stopColor="#0ea5e9" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
  );
}
