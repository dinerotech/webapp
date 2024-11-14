import React from "react";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import VacancyTableView from "@/presentation/jobs/vacancy/table/view";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.jobs;
  return (
    <div id="vacancies" className="bg-slate-200 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-sky-600">
          {t.joinOurTeam}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          {t.vacancies}
        </h3>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <VacancyTableView />
      </div>
    </div>
  );
}
