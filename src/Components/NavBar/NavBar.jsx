import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", {
        state: { scrollTo: id },
        // Força substituição para garantir que o efeito aconteça
        replace: true,
      });

      // Rola após um pequeno delay (opcional)
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
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-black/90 text-white shadow-md border-b-2 border-yellow-600">
        {/* Main Navigation */}
        <div className="px-4 py-4 ">
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
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("advantages")}
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Vantagens
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("plans")}
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Planos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-white hover:text-[#F0AA30] font-medium text-lg">
                    Contato
                  </button>
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
              <div className="relative group hidden lg:flex">
                <button
                  onClick={() => scrollToSection("budget")}
                  className="bg-transparent border border-white hover:border-[#F0AA30] hover:bg-[#F0AA30] text-white px-4 py-2 rounded-xl flex items-center duration-300">
                  Assine já
                </button>
              </div>

            <div className="flex items-center gap-4">
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
        className={`fixed top-[4.1rem] right-0 h-auto w-64 bg-black/95 text-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden border-l-2 border-yellow-600`}>
        <div className="flex flex-col items-center h-full pt-20 px-4">
          <ul className="space-y-6">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2 w-full">
                Sobre Nós
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("advantages")}
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2 w-full">
                Vantagens
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("plans")}
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2 w-full">
                Planos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2 w-full">
                Contato
              </button>
            </li>
            <li>
              <Link
                to="/Ajuda"
                className="block text-center text-white hover:text-[#F0AA30] font-medium text-lg py-2 w-full">
                Ajuda
              </Link>
            </li>
            <li className="p-4 border-t border-gray-700 w-full">
              <button
                onClick={() => scrollToSection("budget")}
                className="block  bg-transparent border border-white hover:border-[#F0AA30] hover:bg-[#F0AA30] text-white px-4 py-2 rounded-xl text-center duration-300 w-full">
                Assine já
              </button>
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
    </>
  );
};

export default NavBar;
