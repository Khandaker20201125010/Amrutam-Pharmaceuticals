import AyurvedasAppoarch from "../Components/AyurvedasAppoarch/AyurvedasAppoarch";
import AyurvedasMagic from "../Components/AyurvedasMagic/AyurvedasMagic";
import Banner from "../Components/Banner/Banner";
import UnderBannerFrames from "../Components/Banner/UnderBannerFrames";
import Conculations from "../Components/Conculations/Conculations";
import ConsulationBanner from "../Components/Conculations/ConsulationBanner";
import CustomerReview from "../Components/CustomerReview/CustomerReview";
import Experts from "../Components/Experts/Experts";
import HomeApp from "../Components/HomeApp/HomeApp";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <UnderBannerFrames></UnderBannerFrames>
        <AyurvedasMagic></AyurvedasMagic>
        <Conculations></Conculations>
        <ConsulationBanner></ConsulationBanner>
        <AyurvedasAppoarch></AyurvedasAppoarch>
        <CustomerReview></CustomerReview>
        <Experts></Experts>
        <HomeApp></HomeApp>
  
      </div>
    );
};

export default Home;