import React from "react";
import Faq from "@/components/FAQ/Faq";
import Copyright from "../Copyright/Copyright";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="p-16">
        <h1 className="bg-black text-2xl text-white p-1 font-Playfair w-fit h-fit">
          IOSPdb
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          <div>
            <p>A platform to discover and contribute to open-source projects</p>
          </div>
          <div>
            <Faq />
          </div>
          <div>
            <h3 className="text-primaryText text-2xl font-bold">
              Subscribe to our newsletter
            </h3>
            <p className="pt-4">
              Stay informed by subscribing to receive periodic notifications
              about the latest <b>IOSPdb</b> updates, exclusive deals, and
              informative news!
            </p>
            <form className="flex flex-col gap-2 py-5">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="flex flex-col gap-4">
                <Input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  aria-required
                  required
                />
                <Button
                  variant={"outline"}
                  className="w-full md:w-[250px] bg-black text-accent uppercase font-bold tracking-widest"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
