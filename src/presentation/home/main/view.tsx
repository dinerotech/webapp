import NavBarView from "@/presentation/home/navbar/view";
import HeroView from "@/presentation/home/hero/view";

export default function View() {
  return (
    <main id="app" className="bg-white">
      <NavBarView />
      <HeroView />
    </main>
  );
}
