import React from "react";
import { Icon } from "../../Lib/Ultils/Icons/icons";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className=" w-full border border-[#F0AA30]   rounded-3xl"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex justify-around ">
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 text-white pb-2 ">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-white font-bold hover:text-black transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-white font-bold hover:text-black transition-colors ">
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white font-bold hover:text-black transition-colors">
                  Tv
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white font-bold hover:text-black transition-colors">
                  Fibra Óptica
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white font-bold hover:text-black transition-colors">
                  Ajuda
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 text-white pb-2">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" color="white" size={20} />
                <span className="font-medium text-white ">(61) 98678-1663</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" color="white" size={20} />
                <span className="font-medium text-white">
                  contato@mptelecom
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" color="white" size={20} />
                <span className="font-medium text-white">Brasília - DF</span>
              </div>
            </div>

          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 text-white pb-2">
              Redes Socias
            </h3>
            <div className="space-y-3">


            </div>

            <div className="pt-6">
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-11 h-11 border border-white hover:border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="Instagram">
                  <Icon
                    name="Instagram"
                    className=" text-white"
                    size={22}
                  />
                </a>
                <a
                  href="#"
                  className="w-11 h-11 border border-white hover:border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="Whatsapp">
                  <FaWhatsapp className="text-white" size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[1200/120]">
        <svg viewBox="0 0 1200 120" className="w-full h-38 fill-[#F0AA30]">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
        <div className=" bg-[#F0AA30] py-2">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
                <p className="text-white text-lg font-semibold">
                  © 2025 MP TELECOM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
