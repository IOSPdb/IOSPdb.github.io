import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className=" flex flex-col w-screen items-center p-32">
      <h1 className="mb-5 text-2xl text-center">
        Discover, Collaborate, Innovate
      </h1>
      <Button className="w-fit rounded-none">Get Started</Button>
    </div>
  );
};

export default Banner;
