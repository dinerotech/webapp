"use client";

import React from "react";
import NavBarView from "@/presentation/common/nabvar/basic/view";
import HeroView from "@/presentation/jobs/hero/view";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.jobs;
  return (
    <main id="app" className="bg-white">
      <NavBarView title={t.jobsTitle} />
      <HeroView />
    </main>
  );
}
