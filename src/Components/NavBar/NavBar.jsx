import React from "react";
import Logo from "../Logo/Logo";
import RoutesNavBar from "../RoutesNavBar/RoutesNavBar";

const NavBar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <div
        className="backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl"
        style={{
          border: "3px solid #f7b032",
          boxShadow: "rgba(253, 160, 0, 0.35) 0px 8px 20px",
          backgroundColor: "rgba(253, 186, 116, 0.3)",
        }}>
        <div className="flex items-center">
          <div>
            <Logo />
          </div>
          <div
            className="flex-1 flex justify-center text-black font-semibold"
            style={{ textShadow: "0 1px 1px rgba(0, 0, 0, 0.9)" }}>
            <RoutesNavBar />
          </div>
          <div className="w-[64px]" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
