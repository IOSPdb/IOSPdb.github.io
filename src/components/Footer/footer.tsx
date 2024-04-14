import React from "react";
import Faq from "@/components/FAQ/Faq";
import Copyright from "../Copyright/Copyright";

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <div>
          <h1 className="bg-black text-2xl text-white p-1 font-Playfair w-fit">
            IOSPdb
          </h1>
          <p>A platform to discover and contribute to open-source projects</p>
        </div>
        <Faq />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
