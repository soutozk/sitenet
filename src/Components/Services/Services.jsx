import React from "react";

const Service = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center mb-8 text-[#F0AA30]">
        Serviços Inclusos
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        {/* Suporte Técnico */}
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-8 w-8 text-[#F0AA30]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636z" />
              <path d="M12 8v4l3 2" />
            </svg>
          </div>
          <h4 className="font-semibold text-white mb-2">Suporte Técnico</h4>
          <p className="text-gray-400 text-sm">
            Especialistas disponíveis para te ajudar a qualquer hora
          </p>
        </div>

        {/* Instalação Grátis */}
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-8 w-8 text-[#F0AA30]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M3 10h11M9 21V3m4 0h8v8m0 0l-8 8" />
            </svg>
          </div>
          <h4 className="font-semibold text-white mb-2">Instalação Grátis</h4>
          <p className="text-gray-400 text-sm">
            Sem taxa de adesão ou custos iniciais
          </p>
        </div>

        {/* Canais Exclusivos */}
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-8 w-8 text-[#F0AA30]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M15 10l4.553-2.276a1 1 0 010 1.789L15 12m-6 0l-4.553-2.276a1 1 0 010-1.789L9 10m3 2v4" />
            </svg>
          </div>
          <h4 className="font-semibold text-white mb-2">Canais Exclusivos</h4>
          <p className="text-gray-400 text-sm">
            Conteúdos especiais incluídos nos pacotes
          </p>
        </div>

        {/* Wi-Fi Potente */}
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="h-8 w-8 text-[#F0AA30]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M12 18h.01M9.172 15.172a4 4 0 015.656 0M6.343 12.343a8 8 0 0111.314 0M3.515 9.515a12 12 0 0116.97 0" />
            </svg>
          </div>
          <h4 className="font-semibold text-white mb-2">Wi-Fi Potente</h4>
          <p className="text-gray-400 text-sm">
            Cobertura para todos os ambientes da sua casa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
