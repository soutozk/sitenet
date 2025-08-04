import { Building2 } from "lucide-react";
import { FadeIn } from "./Animations";
// import Logo from "../Images/Logo.png";

export function Header() {
  return (
    <div className="text-center pt-8 lg:pt-16 px-4">
      <FadeIn>
        <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {/* <img
              src={Logo.src || Logo}
              alt="Logo"
              className="w-full h-full object-contain"
            /> */}
          </div>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          MP{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            TELECOM
          </span>
        </h1>
        <p className="text-slate-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Transforme sua empresa com nossos sistemas de gestão integrados.
          <span className="text-blue-400 font-semibold">
            {" "}
            Escolha a solução ideal para seu negócio.
          </span>
        </p>
      </FadeIn>
    </div>
  );
}
