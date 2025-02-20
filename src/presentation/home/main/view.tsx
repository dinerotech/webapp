"use client";
import NavBarView from "@/presentation/home/navbar/view";
import HeroView from "@/presentation/home/hero/view";
import LocaleContext from "@/presentation/common/providers/localeProvider/client/context";
import FooterView from "@/presentation/common/footer/view";
import BannerView from "@/presentation/home/banner/view";
import HeaderView from "@/presentation/common/header/view";
import LogoCloudView from "@/presentation/home/logoCloud/view";
import React from "react";

export default function View() {
  const cntxt = React.useContext(LocaleContext);
  const t = cntxt.resource.home;

  return (
    <main id="app" className="bg-white">
      <HeaderView>
        <BannerView
          title={t.greatNews}
          description={t.tabbySupported}
          actionName={t.learnMore}
          actionHref="#"
        />
        <NavBarView />
        <HeroView />
        <LogoCloudView />
      </HeaderView>
      <FooterView />
    </main>
  );
}
