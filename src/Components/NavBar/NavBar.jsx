import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/90 text-white shadow-md border-b-2 border-yellow-600">
        {/* Main Navigation */}
        <div className="px-4 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">
                MP TELECOM
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-8">
                <li>
                  <Link
                    to="/#about"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#advantages"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Vantagens
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#plans"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Planos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Ajuda"
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Ajuda
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <Link
                  to="/#budget"
                  className="bg-transparent border border-white hover:border-[#F0AA30] hover:bg-[#F0AA30] text-white px-4 py-2 rounded-xl flex items-center duration-300">
                  Assine já
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  {isSidebarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-20 left-0 h-auto w-64 bg-black/95 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden border-r-2 border-yellow-600`}>
        <div className="flex flex-col items-center h-full pt-20 px-4">
          <ul className="space-y-6">
            <li>
              <Link
                to="/#about"
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2"
                onClick={() => setIsSidebarOpen(false)}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/#advantages"
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2"
                onClick={() => setIsSidebarOpen(false)}>
                Vantagens
              </Link>
            </li>
            <li>
              <Link
                to="/#plans"
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2"
                onClick={() => setIsSidebarOpen(false)}>
                Planos
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2"
                onClick={() => setIsSidebarOpen(false)}>
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="/Ajuda"
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2"
                onClick={() => setIsSidebarOpen(false)}>
                Ajuda
              </Link>
            </li>
            <li className="p-4 border-t border-gray-700">
              <Link
                to="/#budget"
                className="block text-center bg-transparent border border-white hover:border-[#F0AA30] hover:bg-[#F0AA30] text-white px-4 py-2 rounded-xl text-center duration-300"
                onClick={() => setIsSidebarOpen(false)}>
                Assine já
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

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
