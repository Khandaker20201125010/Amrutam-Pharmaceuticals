import Banner from "~/Components/Banner/Banner";
import type { Route } from "./+types/home";
import AyurvedasMagic from "~/Components/AyurvedasMagic/AyurvedasMagic";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AyurvedasMagic></AyurvedasMagic>
    </div>
  );
}
