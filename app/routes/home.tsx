import Banner from "~/Components/Banner/Banner";
import type { Route } from "./+types/home";
import AyurvedasMagic from "~/Components/AyurvedasMagic/AyurvedasMagic";
import Conculations from "~/Components/Conculations/Conculations";
import ConsulationBanner from "~/Components/Conculations/ConsulationBanner";
import AyurvedasAppoarch from "~/Components/AyurvedasAppoarch/AyurvedasAppoarch";
import CustomerReview from "~/Components/CustomerReview/CustomerReview";
import Experts from "~/Components/Experts/Experts";
import HomeApp from "~/Components/HomeApp/HomeApp";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amrutam Pharmaceuticals" },
    { name: "Amrutam Pharmaceuticals", content: "Welcome to Amrutam Pharmaceuticals!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AyurvedasMagic></AyurvedasMagic>
      <Conculations></Conculations>
      <ConsulationBanner></ConsulationBanner>
      <AyurvedasAppoarch></AyurvedasAppoarch>
      <CustomerReview></CustomerReview>
      <Experts></Experts>
      <HomeApp></HomeApp>

    </div>
  );
}
