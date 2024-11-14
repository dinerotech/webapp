import React from "react";

import NavBarView from "@/presentation/privacyPolicy/navbar/view";
import ContentsView from "@/presentation/privacyPolicy/contents/view";
import FooterView from "@/presentation/common/footer/view";

export default function View() {
  return (
    <main id="app" className="bg-white">
      <NavBarView />
      <ContentsView />
      <FooterView />
    </main>
  );
}
