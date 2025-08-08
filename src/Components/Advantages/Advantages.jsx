import React from "react";
import { Icon } from "../../Lib/Ultils/Icons/icons";

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 px-4 scroll-m-2 md:scroll-m-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Nossas Vantagens
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja por que nossos clientes confiam e indicam a{" "}
            <span className="text-[#F0AA30] font-bold">MP TELECOM</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Estabilidade */}
          <div className="bg-black/40 border border-white/30 backdrop-blur-sm hover:border-[#F0AA30] transition-all duration-300 p-6 rounded-lg">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Signal" className="text-yellow-500" size={20} />
            </div>
            <h3 className="text-[#F0AA30] text-xl font-bold mb-2">
              Estabilidade
            </h3>
            <p className="text-gray-300">
              Navegue e trabalhe com tranquilidade. Nossa conexão é estável até
              nos horários de pico.
            </p>
          </div>

          {/* Interação 100% humana */}
          <div className="bg-black/40 border border-white/30 backdrop-blur-sm hover:border-[#F0AA30] transition-all duration-300 p-6 rounded-lg">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Icon name="User" className="text-yellow-500" size={20} />
            </div>
            <h3 className="text-[#F0AA30] text-xl font-bold mb-2">
              Interação 100% Humana
            </h3>
            <p className="text-gray-300">
              Aqui você fala com pessoas de verdade, prontas para te ajudar com
              agilidade e atenção.
            </p>
          </div>

          {/* Valor Justo */}
          <div className="bg-black/40 border border-white/30 backdrop-blur-sm hover:border-[#F0AA30] transition-all duration-300 p-6 rounded-lg">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Icon name="DollarSign" className="text-yellow-500" size={20} />
            </div>
            <h3 className="text-[#F0AA30] text-xl font-bold mb-2">
              Valor
            </h3>
            <p className="text-gray-300">
              Nosso preço reflete a qualidade, o cuidado no atendimento e os resultados que entregamos.
            </p>
          </div>

          {/* Equipe Qualificada */}
          <div className="bg-black/40 border border-white/30 backdrop-blur-sm hover:border-[#F0AA30] transition-all duration-300 p-6 rounded-lg">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Icon name="CheckCircle" className="text-yellow-500" size={20} />
            </div>
            <h3 className="text-[#F0AA30] text-xl font-bold mb-2">
              Equipe Qualificada
            </h3>
            <p className="text-gray-300">
              Técnicos e atendentes preparados para garantir a melhor
              experiência para você.
            </p>
          </div>

          {/* Agilidade */}
          <div className="bg-black/40 border border-white/30 backdrop-blur-sm hover:border-[#F0AA30] transition-all duration-300 p-6 rounded-lg">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Zap" className="text-yellow-500" size={20} />
            </div>
            <h3 className="text-[#F0AA30] text-xl font-bold mb-2">Agilidade</h3>
            <p className="text-gray-300">
              Do atendimento à instalação, tudo com rapidez para que você tenha
              internet sem demora.
            </p>
          </div>

          {/* Indique e Ganhe */}
          <div className="bg-black/40 border border-white/30 backdrop-blur-sm hover:border-[#F0AA30] transition-all duration-300 p-6 rounded-lg">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Icon name="Gift" className="text-yellow-500" size={20} />
            </div>
            <h3 className="text-[#F0AA30] text-xl font-bold mb-2">
              Indique e Ganhe
            </h3>
            <p className="text-gray-300">
              Indique a MP Telecom e ganhe R$ 20 no Pix ou de desconto na sua
              fatura a cada novo cliente indicado!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
