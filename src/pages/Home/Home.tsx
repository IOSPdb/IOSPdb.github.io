import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="">
      <div className="bg-homeBG bg-red-700 h-80 flex flex-col justify-center items-center bg-cover bg-bottom">
        <h2 className="font-bold text-3xl mb-4">Welcome to IOSPdb</h2>
        <p className="mb-3">Discover and contribute to open-source projects</p>
        <Button className="rounded-none">Explore Projects</Button>
      </div>
      <div className="p-5">
        <h2 className="font-bold text-2xl">Highlighted Projects</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
