import React from "react";
import { Icon } from "../../Lib/Ultils/Icons/icons";

const enviarParaWhatsApp = (nomePlano) => {
  const numero = "5561986781663";
  const mensagem = `Olá! Tenho interesse no plano ${nomePlano}. Poderia me dar mais informações?`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
};

const plans = [
  {
    nome: "MP Basic",
    descricao: "400 megas de internet via fibra",
    preco: "R$ 89,90",
    detalhes: "Fixo",
    beneficios: [
      "✅ Instalação gratuita",
      "✅ Wi-Fi incluso",
      "✅ Suporte técnico",
    ],
    destaque: false,
    cores: {
      bg: "bg-black/40",
      texto: "text-gray-300",
      precoTexto: "text-gray-400",
      btn: "bg-gray-700 hover:bg-gray-600 text-white",
    },
  },
  {
    nome: "MP Fast",
    descricao: "600 megas de internet via fibra",
    preco: "R$ 99,90",
    detalhes: "Fixo",
    beneficios: [
      "✅ Instalação gratuita",
      "✅ Wi-Fi incluso",
      "✅ Suporte técnico 24h",
    ],
    destaque: true,
    cores: {
      bg: "bg-gradient-to-br from-yellow-600/40 to-yellow-500/10",
      texto: "text-yellow-200",
      precoTexto: "text-yellow-200",
      btn: "bg-yellow-500 hover:bg-yellow-400 text-black font-semibold",
    },
  },
  {
    nome: "MP Ultra",
    descricao: "800 megas de internet via fibra",
    preco: "R$ 99,90",
    detalhes: "3 meses",
    depois: "R$ 119,90 após",
    beneficios: [
      "✅ Instalação gratuita",
      "✅ Wi-Fi incluso",
      "✅ Suporte técnico completo",
    ],
    destaque: false,
    cores: {
      bg: "bg-black/40",
      texto: "text-gray-300",
      precoTexto: "text-gray-400",
      btn: "bg-gray-700 hover:bg-gray-600 text-white",
    },
  },
];

const Plans = () => {
  return (
    <section id="plans">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Planos e Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escolha o plano ideal para sua casa ou empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plano, index) => (
            <div
              key={index}
              className={`${plano.cores.bg} border border-gray-500/20 backdrop-blur-sm rounded-lg p-6 relative`}
              style={
                plano.destaque
                  ? {
                      boxShadow:
                        "rgba(255, 145, 0, 0.19) 0px 10px 20px, rgba(255, 192, 98, 0.45) 0px 6px 6px",
                    }
                  : {}
              }>
              {plano.destaque && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 text-sm font-semibold rounded">
                  Mais Popular
                </div>
              )}
              <h3 className="text-white text-2xl font-bold mb-2">
                {plano.nome}
              </h3>
              <p className={`${plano.cores.texto} mb-4`}>{plano.descricao}</p>
              <div className="text-3xl font-bold text-white mb-4">
                {plano.preco}
                <span
                  className={`text-lg font-normal ${plano.cores.precoTexto}`}>
                  {" "}
                  {plano.detalhes}
                </span>
                {plano.depois && (
                  <>
                    <br />
                    <span className="text-xl font-semibold text-gray-300">
                      {plano.depois}
                    </span>
                  </>
                )}
              </div>
              <ul className={`space-y-3 ${plano.cores.texto}`}>
                {plano.beneficios.map((beneficio, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {beneficio}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => enviarParaWhatsApp(plano.nome)}
                className={`w-full mt-6 py-2 rounded ${plano.cores.btn}`}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
