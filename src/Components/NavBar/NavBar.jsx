import { useState } from "react";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/20 text-white shadow-md border-b-2 border-yellow-600">
        {/* Main Navigation */}
        <div className="px-4 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">MP TELECOM</h1>
            </div>

            {/* Navigation Links */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Vantagens
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Planos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F0AA30] font-medium  text-lg">
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#F0AA30] font-medium  text-lg">
                    Ajuda
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button
                  className="bg-transparent border border-white hover:border-[#F0AA30] hover:bg-[#F0AA30] text-white px-4 py-2 rounded-xl flex items-center duration-300
                ">
                  Assine já
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Espaço para compensar altura da navbar fixa */}
      <div className="h-14"></div>

      {/* Search Bar (quando ativada) */}
      {isSearchOpen && (
        <div className="border-t border-gray-800 px-4 py-4 bg-gray-900 text-white fixed top-20 left-0 w-full z-40">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white">
                Buscar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
