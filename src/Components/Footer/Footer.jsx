import { Icon } from "../../Lib/Ultils/Icons/icons";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Função de rolagem robusta
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: id },
        replace: true,
      });
      return;
    }

    // Tentativa de rolagem imediata
    const attemptScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return true;
      }
      return false;
    };

    // Se não encontrar de primeira, tenta novamente após um delay
    if (!attemptScroll()) {
      const retryInterval = setInterval(() => {
        if (attemptScroll()) {
          clearInterval(retryInterval);
        }
      }, 100);

      // Limpa após 2 segundos se não conseguir
      setTimeout(() => clearInterval(retryInterval), 2000);
    }
  };

  return (
    <div
      className="w-full border border-[#F0AA30] rounded-3xl"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}>
      <div className="container mx-auto px-6 py-0">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 mt-10">
          {/* Links Rápidos */}
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
                { label: "Ajuda", to: "/Ajuda" }, // Link normal para página de ajuda
              ].map((item, index) => (
                <li key={index}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-white hover:text-yellow-500 font-bold transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white hover:text-yellow-500 font-bold transition-colors text-left w-full">
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
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
                  className="flex items-center space-x-3">
                  <Icon name="Phone" color="white" size={20} />
                  <span className="font-medium text-white duration-300 hover:text-yellow-500">
                    (61) 98678-1663
                  </span>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="mailto:sac@mptelecom.net.br"
                  className="flex items-center space-x-3">
                  <Icon name="Mail" color="white" size={20} />
                  <span className="font-medium text-white duration-300 hover:text-yellow-500">
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
                  className="w-11 h-11 border border-white hover:border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 duration-300"
                  aria-label="Instagram">
                  <Icon name="Instagram" className="text-white" size={22} />
                </a>
                <a
                  href="https://wa.me/5561986781663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-white hover:border-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-500 duration-300"
                  aria-label="Whatsapp">
                  <FaWhatsapp className="text-white" size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base do Footer */}
      <div className="relative w-full aspect-[1200/120]">
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
