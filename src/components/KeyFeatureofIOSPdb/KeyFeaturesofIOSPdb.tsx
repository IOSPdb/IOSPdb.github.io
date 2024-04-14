import React from "react";
import { FaClipboardList } from "react-icons/fa6";
import { TbFilterSearch } from "react-icons/tb";
import { FcCollaboration } from "react-icons/fc";
import { FaUser } from "react-icons/fa";

const KeyFeaturesofIOSPdb: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-[#f0dcd9] p-10">
      <h1 className="text-2xl font-semibold">Key Features of IOSPdb</h1>
      <div className=" flex  flex-wrap gap-10 mt-14 justify-center">
        <div className="outline sm:w-[500px] h-[150px] p-10">
          <div>
            <div className="flex items-center gap-3">
              <FaClipboardList className="text-xl " />
              <h3 className="text-xl font-medium flex">Project Listings</h3>
            </div>
          </div>
          <div>
            <p className="text-lg">
              Easily browse through a wide range of open-source projects
            </p>
          </div>
        </div>
        <div className="outline sm:w-[500px] h-[150px] p-10 w-full">
          <div>
            <div className="flex items-center gap-3">
              <TbFilterSearch className="text-xl " />
              <h3 className="text-xl font-medium flex">
                Search and Filtering Functionalities
              </h3>
            </div>
          </div>
          <div>
            <p className="text-lg">
              Efficiently find projects based on specific criteria
            </p>
          </div>
        </div>
        <div className="outline h-fit sm:w-[500px] sm:h-[150px]  p-10">
          <div>
            <div className="flex items-center gap-3">
              <FcCollaboration className="text-xl " />
              <h3 className="text-xl font-medium flex">Collaboration Tools</h3>
            </div>
          </div>
          <div>
            <p className="text-lg">
              Facilitate communication and teamwork among project owners and
              contributors
            </p>
          </div>
        </div>
        <div className="outline h-fit sm:w-[500px] sm:h-[150px]  p-10">
          <div>
            <div className="flex items-center gap-3">
              <FaUser className="text-xl " />
              <h3 className="text-xl font-medium flex">
                Contributors Profiles and Authentication
              </h3>
            </div>
          </div>
          <div>
            <p className="text-lg">
              Create personalized profiles and ensure secure access to the
              platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesofIOSPdb;
