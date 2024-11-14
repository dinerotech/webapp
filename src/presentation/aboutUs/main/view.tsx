import React from "react";
import NavBarView from "@/presentation/common/navbar/basic/view";
import HeroView from "@/presentation/aboutUs/hero/view";
import MissionView from "@/presentation/aboutUs/mission/view";
import FooterView from "@/presentation/common/footer/view";
import ValuesView from "@/presentation/aboutUs/values/view";

export default function View() {
  return (
    <main id="app" className="bg-white">
      <NavBarView />
      <HeroView />
      <MissionView />
      <ValuesView />
      <FooterView />
    </main>
  );
}
