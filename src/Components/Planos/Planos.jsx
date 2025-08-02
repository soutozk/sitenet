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
          {/* Plano Essencial */}
          <div className="bg-black/40 border border-gray-500/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white text-2xl font-bold mb-2">Essencial</h3>
            <p className="text-gray-300 mb-4">
              Ideal para navegação e redes sociais
            </p>
            <div className="text-3xl font-bold text-white mb-4">
              R$ 89
              <span className="text-lg font-normal text-gray-400">/mês</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                ✅ Internet de 200Mbps
              </li>
              <li className="flex items-center gap-2">
                ✅ Instalação gratuita
              </li>
              <li className="flex items-center gap-2">✅ Wi-Fi incluso</li>
              <li className="flex items-center gap-2">
                ✅ Suporte técnico básico
              </li>
            </ul>
            <button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded">
              Escolher Plano
            </button>
          </div>

          {/* Plano Avançado */}
          <div className="bg-gradient-to-br from-yellow-600/40 to-yellow-500/10 border border-yellow-500/40 backdrop-blur-sm rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 text-sm font-semibold rounded">
              Mais Popular
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Avançado</h3>
            <p className="text-yellow-200 mb-4">
              Perfeito para quem trabalha em casa ou assiste streaming
            </p>
            <div className="text-3xl font-bold text-white mb-4">
              R$ 139
              <span className="text-lg font-normal text-yellow-200">/mês</span>
            </div>
            <ul className="space-y-3 text-yellow-100">
              <li className="flex items-center gap-2">
                ✅ Internet de 400Mbps
              </li>
              <li className="flex items-center gap-2">
                ✅ Wi-Fi de longo alcance
              </li>
              <li className="flex items-center gap-2">
                ✅ Suporte técnico 24h
              </li>
              <li className="flex items-center gap-2">✅ Canais exclusivos</li>
            </ul>
            <button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-semibold">
              Escolher Plano
            </button>
          </div>

          {/* Plano Empresarial */}
          <div className="bg-black/40 border border-gray-500/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white text-2xl font-bold mb-2">Empresarial</h3>
            <p className="text-gray-300 mb-4">
              Conexão estável para equipes e escritórios
            </p>
            <div className="text-3xl font-bold text-white mb-4">
              R$ 249
              <span className="text-lg font-normal text-gray-400">/mês</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                ✅ Internet de 600Mbps
              </li>
              <li className="flex items-center gap-2">
                ✅ Instalação e suporte prioritário
              </li>
              <li className="flex items-center gap-2">
                ✅ Roteador empresarial incluso
              </li>
              <li className="flex items-center gap-2">
                ✅ Atendimento personalizado
              </li>
            </ul>
            <button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded">
              Falar com Vendas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
