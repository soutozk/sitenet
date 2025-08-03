import React from "react";
import { Icon } from "../../Lib/Ultils/Icons/icons";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Sobre a <span className="text-[#F0AA30]">MP TELECOM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conectamos você ao mundo com internet de alta velocidade, canais
            exclusivos e um atendimento que entende suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#F0AA30]">
              Nossa Missão
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Levar conexão de qualidade a lares e empresas, com tecnologia de
              ponta, suporte técnico eficiente e um serviço personalizado que
              vai além da internet.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Check" className="h-5 w-5 text-[#F0AA30]" />
                <span className="text-white">
                  Internet fibra óptica de alta velocidade
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" className="h-5 w-5 text-[#F0AA30]" />
                <span className="text-white">Instalação 100% gratuita</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" className="h-5 w-5 text-[#F0AA30]" />
                <span className="text-white">
                  Atendimento personalizado e suporte técnico eficaz
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" className="h-5 w-5 text-[#F0AA30]" />
                <span className="text-white">
                  Wi-Fi potente em todos os ambientes
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-600/10 to-gray-800/10 rounded-2xl p-8 backdrop-blur-sm border border-white/30">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F0AA30] mb-2">
                    10K+
                  </div>
                  <div className="text-gray-300">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F0AA30] mb-2">
                    99%
                  </div>
                  <div className="text-gray-300">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F0AA30] mb-2">
                    24/7
                  </div>
                  <div className="text-gray-300">Suporte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F0AA30] mb-2">
                    5★
                  </div>
                  <div className="text-gray-300">Avaliação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
