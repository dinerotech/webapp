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
      <div className="mt-24 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
      <ValuesView />
      <FooterView />
    </main>
  );
}
