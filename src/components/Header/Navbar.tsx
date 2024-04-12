import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex mx-5 h-[100px] items-center">
      <div>
        <NavLink to="/">
          <h1 className="bg-black text-3xl text-white p-1 font-logo">IOSPdb</h1>
        </NavLink>
      </div>
      <nav className="ml-auto">
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink
              to="/projects"
              className={`${(isActive: boolean) => {
                isActive ? "underline" : "";
              }} font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500`}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={`${(isActive: boolean) => {
                isActive ? "underline" : "";
              }} font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500`}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`${(isActive: boolean) => {
                isActive ? "underline" : "";
              }} font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`${(isActive: boolean) => {
                isActive ? "underline" : "";
              }} font-semibold nav-NavLink transition-all duration-300 ease-in-out hover:text-green-500`}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
