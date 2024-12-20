import Banner from "~/Components/Banner/Banner";
import type { Route } from "./+types/home";
import AyurvedasMagic from "~/Components/AyurvedasMagic/AyurvedasMagic";
import Conculations from "~/Components/Conculations/Conculations";

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
    </div>
  );
}
