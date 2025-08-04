import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const comentarios = [
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
    {
      nome: "Luciana Mendes",
      cargo: "Professora",
      inicial: "L",
      texto:
        "Usar a MP Telecom foi a melhor escolha para minhas aulas online. A estabilidade e o suporte são nota 10!",
    },
    {
      nome: "Tiago Almeida",
      cargo: "Estudante",
      inicial: "T",
      texto:
        "Mesmo em horários de pico, a internet continua estável. Consigo estudar e assistir vídeos sem travar.",
    },
  ];

  return (
    <div
      id="testimonials"
      className="py-20 px-4 mt-[5%] mb-[5%] border border-[#F0AA30] p-8 rounded-3xl w-full"
      style={{
        boxShadow:
          "rgba(255, 145, 0, 0.19) 0px 10px 20px, rgba(255, 192, 98, 0.45) 0px 6px 6px",
      }}>
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

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}>
          {comentarios.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="bg-black border border-white/20 hover:border-[#F0AA30] backdrop-blur-sm rounded-lg p-6 h-full">
                <div className="mb-4">
                  <div className="flex items-center space-x-4 mb-2">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                      style={{
                        background:
                          "linear-gradient(to bottom right,rgba(247, 175, 50, 0.82), #d69825)",
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
                        style={{ fill: "#f7b032" }}
                        viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="text-yellow-100">{`"${card.texto}"`}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
