import { Button } from "@/components/ui/button";
import KeyFeaturesofIOSPdb from "@/components/KeyFeatureofIOSPdb/KeyFeaturesofIOSPdb";
import Banner from "@/components/Banner/Banner";
import PurposeAndBenefits from "@/components/PurposeAndBenefits/PurposeAndBenefits";

const Home = () => {
  return (
    <div className="">
      <div className="bg-homeBG  h-80 flex flex-col justify-center items-center bg-cover bg-bottom">
        <h2 className="font-bold text-3xl mb-4">Welcome to IOSPdb</h2>
        <p className="mb-3">Discover and contribute to open-source projects</p>
        <Button className="rounded-none">Explore Projects</Button>
      </div>
      <div>
        <KeyFeaturesofIOSPdb />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <PurposeAndBenefits />
      </div>
    </div>
  );
};

export default Home;
