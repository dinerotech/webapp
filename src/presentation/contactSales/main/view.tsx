import React from "react";
import NavBarView from "@/presentation/common/nabvar/basic/view";
import HeaderView from "@/presentation/common/header/view";
import FormView from "@/presentation/contactSales/form/view";

export default function View() {
  return (
    <main id="app" className="bg-white">
      <HeaderView>
        <NavBarView />
        <FormView />
      </HeaderView>
    </main>
  );
}
