import React from "react";
import NavBarView from "@/presentation/contactSales/navbar/view";
import HeaderView from "@/presentation/home/header/view";
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
