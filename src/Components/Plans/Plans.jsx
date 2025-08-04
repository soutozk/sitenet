import React from "react";
import { Icon } from "../../Lib/Ultils/Icons/icons";

const Plans = () => {
  return (
    <section id="plans">
      <div className=" ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Planos e Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para sua casa ou empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* MP Basic */}
          <div className="bg-black/40 border border-gray-500/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white text-2xl font-bold mb-2">MP Basic</h3>
            <p className="text-gray-300 mb-4">
              400 megas de internet via fibra
            </p>
            <div className="text-3xl font-bold text-white mb-4">
              R$ 89,90
              <span className="text-lg font-normal text-gray-400"> Fixo</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                ✅ Instalação gratuita
              </li>
              <li className="flex items-center gap-2">✅ Wi-Fi incluso</li>
              <li className="flex items-center gap-2">✅ Suporte técnico</li>
            </ul>
            <button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded">
              Escolher Plano
            </button>
          </div>

          {/* MP Fast */}
          <div
            className="bg-gradient-to-br from-yellow-600/40 to-yellow-500/10 border border-yellow-500/40 backdrop-blur-sm rounded-lg p-6 relative"
            style={{
              boxShadow:
                "rgba(255, 145, 0, 0.19) 0px 10px 20px, rgba(255, 192, 98, 0.45) 0px 6px 6px",
            }}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 text-sm font-semibold rounded">
              Mais Popular
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">MP Fast</h3>
            <p className="text-yellow-200 mb-4">
              600 megas de internet via fibra
            </p>
            <div className="text-3xl font-bold text-white mb-4">
              R$ 99,90
              <span className="text-lg font-normal text-yellow-200"> Fixo</span>
            </div>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-center gap-2">
                ✅ Instalação gratuita
              </li>
              <li className="flex items-center gap-2">✅ Wi-Fi incluso</li>
              <li className="flex items-center gap-2">
                ✅ Suporte técnico 24h
              </li>
            </ul>
            <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-semibold">
              Escolher Plano
            </button>
          </div>

          {/* MP Ultra */}
          <div className="bg-black/40 border border-gray-500/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white text-2xl font-bold mb-2">MP Ultra</h3>
            <p className="text-gray-300 mb-4">
              800 megas de internet via fibra
            </p>
            <div className="text-3xl font-bold text-white mb-4">
              R$ 99,90
              <span className="text-lg font-normal text-gray-400">
                {" "}
                3 meses
              </span>
              <br />
              <span className="text-xl font-semibold text-gray-300">
                R$ 119,90 após
              </span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                ✅ Instalação gratuita
              </li>
              <li className="flex items-center gap-2">✅ Wi-Fi incluso</li>
              <li className="flex items-center gap-2">
                ✅ Suporte técnico completo
              </li>
            </ul>
            <button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded">
              Escolher Plano
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
