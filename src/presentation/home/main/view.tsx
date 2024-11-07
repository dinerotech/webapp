import NavBarView from "@/presentation/home/navbar/view";
import HeroView from "@/presentation/home/hero/view";
import FooterView from "@/presentation/home/footer/view";
import BannerView from "@/presentation/home/banner/view";
import HeaderView from "@/presentation/home/header/view";

export default function View() {
  return (
    <main id="app" className="bg-white">
      <HeaderView>
        <BannerView />
        <NavBarView />
        <HeroView />
      </HeaderView>
      <FooterView />
    </main>
  );
}
