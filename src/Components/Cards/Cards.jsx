import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de profissionais que transformaram seu networking
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 backdrop-blur-sm rounded-lg p-6 flex-1">
            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <h3 className="text-white font-semibold">Maria Santos</h3>
                  <p className="text-purple-300 text-sm">CEO, TechStart</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-purple-400 text-purple-400"
                    viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-gray-300">
              "Revolucionou completamente minha forma de fazer networking. Em
              eventos, consigo compartilhar meus contatos de forma elegante e
              profissional. O retorno de investimento foi imediato!"
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 backdrop-blur-sm rounded-lg p-6 flex-1">
            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <h3 className="text-white font-semibold">Roberto Lima</h3>
                  <p className="text-purple-300 text-sm">Arquiteto</p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-purple-400 text-purple-400"
                    viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-gray-300">
              "A qualidade do cartão físico é impressionante, e a tecnologia NFC
              funciona perfeitamente. Meus clientes ficam sempre impressionados
              com a inovação. Recomendo sem hesitar!"
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 backdrop-blur-sm rounded-lg p-6 flex-1">
            <div className="mb-4">
              <div className="flex items-center space-x-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ana Costa</h3>
                  <p className="text-purple-300 text-sm">
                    Consultora de Marketing
                  </p>
                </div>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-purple-400 text-purple-400"
                    viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="text-gray-300">
              "O suporte da Nask Card é excepcional. Sempre que preciso
              atualizar informações ou tenho dúvidas, eles respondem
              rapidamente. A página virtual é linda e profissional!"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
