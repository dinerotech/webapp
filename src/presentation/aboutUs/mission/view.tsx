import React from "react";

export default function View() {
  return (
    <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Our mission
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl/8 text-gray-600">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
            <p className="mt-10 max-w-xl text-base/7 text-gray-700">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
              sed turpis id.
            </p>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              <div className="flex flex-col-reverse gap-y-4">
                <dt className="text-base/7 text-gray-600">
                  Transactions every 24 hours
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  44 million
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-y-4">
                <dt className="text-base/7 text-gray-600">
                  Assets under holding
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  $119 trillion
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-y-4">
                <dt className="text-base/7 text-gray-600">
                  New users annually
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                  46,000
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
