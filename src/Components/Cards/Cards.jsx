import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, white, #f7b032)",
            }}>
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#f7b032" }}>
            Experiências reais de quem confia na conexão da MP Telecom
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              nome: "Carlos Ferreira",
              cargo: "Empresário",
              inicial: "C",
              texto:
                "A internet da MP Telecom superou minhas expectativas. A velocidade é excelente, e o suporte sempre me atende com rapidez e cordialidade.",
            },
            {
              nome: "Juliana Rocha",
              cargo: "Designer Gráfica",
              inicial: "J",
              texto:
                "Trabalho de casa e preciso de uma conexão estável. Com a MP Telecom, nunca tive problemas. A instalação foi super rápida e gratuita!",
            },
            {
              nome: "André Souza",
              cargo: "Streamer e Criador de Conteúdo",
              inicial: "A",
              texto:
                "Finalmente encontrei uma empresa de internet que entrega o que promete. Posso fazer transmissões ao vivo com qualidade e sem quedas!",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#f7b03233] to-black border border-[#f7b03244] backdrop-blur-sm rounded-lg p-6 flex-1">
              <div className="mb-4">
                <div className="flex items-center space-x-4 mb-2">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #f7b032, #d69825)",
                    }}>
                    {card.inicial}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{card.nome}</h3>
                    <p style={{ color: "#f7b032" }} className="text-sm">
                      {card.cargo}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-4 w-4"
                      style={{ fill: "#f7b032", color: "#f7b032" }}
                      viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-yellow-100">{`"${card.texto}"`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
