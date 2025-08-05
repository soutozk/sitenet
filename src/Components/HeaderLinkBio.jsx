import { Building2 } from "lucide-react";
import { FadeIn } from "./Animations";
import Logo from "../images/Logo.png";

export function Header() {
  return (
    <div className="text-center pt-8 lg:pt-16 px-4">
      <FadeIn>
        <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4 rounded-full bg-white p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img
              src={Logo.src || Logo}
              alt="Logo"
              className="w-[180px] h-[180px] object-contain"
            />
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 mt-4">
          MP <span className="text-[#F0AA30] font-extrabold">TELECOM</span>
        </h1>
        <p className="text-slate-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Tudo que você precisa para fazer parte da melhor conexão de Brasília
        </p>
      </FadeIn>
    </div>
  );
}
