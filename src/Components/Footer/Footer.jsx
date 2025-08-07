import { Icon } from "../../Lib/Ultils/Icons/icons";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  const scrollToSection = (id) => {
    setActiveLink(id);

    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: id },
        replace: true,
      });

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full border border-[#F0AA30] rounded-3xl relative"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}>
      <div className="container mx-auto px-6 py-0">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 mt-10">
          {/* Links Rápidos - Mesmo sistema da NavBar */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 text-white pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Sobre Nós", id: "about" },
                { label: "Vantagens", id: "advantages" },
                { label: "Planos", id: "plans" },
                { label: "Contato", id: "contact" },
                { label: "Ajuda", to: "/Ajuda" },
              ].map((item, index) => (
                <li key={index}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className={`text-white hover:text-[#F0AA30] font-bold transition-colors ${
                        location.pathname === item.to ? "text-[#F0AA30]" : ""
                      }`}>
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-white hover:text-[#F0AA30] font-bold transition-colors text-left w-full ${
                        activeLink === item.id ? "text-[#F0AA30]" : ""
                      }`}>
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
            <a href=""></a>
            <a
              href="https://mptelecom.sgp.net.br/accounts/central/login"
              className="bg-transparent border border-white hover:border-[#F0AA30] hover:bg-[#F0AA30] text-white px-4 py-2 rounded-xl flex items-center duration-300">
              Já sou cliente
            </a>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 text-white pb-2">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex">
                <a
                  href="https://wa.me/5561986781663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-[#F0AA30]">
                  <Icon name="Phone" color="white" size={20} />
                  <span className="font-medium text-white duration-300 hover:text-[#F0AA30]">
                    (61) 98678-1663
                  </span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:sac@mptelecom.net.br"
                  className="flex items-center space-x-3 hover:text-[#F0AA30]">
                  <Icon name="Mail" color="white" size={20} />
                  <span className="font-medium text-white duration-300 hover:text-[#F0AA30]">
                    sac@mptelecom.net.br
                  </span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" color="white" size={20} />
                <span className="font-medium text-white">Brasília - DF</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg border-b-2 text-white pb-2">
              Redes Sociais
            </h3>
            <div className="pt-2">
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/mp_telecom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white hover:border-[#F0AA30] rounded-full flex items-center justify-center hover:bg-[#F0AA30] duration-300"
                  aria-label="Instagram">
                  <Icon name="Instagram" className="text-white" size={22} />
                </a>
                <a
                  href="https://wa.me/5561986781663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white hover:border-[#F0AA30] rounded-full flex items-center justify-center hover:bg-[#F0AA30] duration-300"
                  aria-label="Whatsapp">
                  <FaWhatsapp className="text-white" size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base do Footer - Estilo igual ao NavBar */}
      <div className="relative w-full aspect-[1200/120] mt-6">
        <svg viewBox="0 0 1200 120" className="w-full h-38 fill-[#F0AA30]">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
        <div className="bg-[#F0AA30] py-2">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
              <p className="text-white text-lg font-semibold text-center">
                © 2025 MP TELECOM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
