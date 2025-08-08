import React from "react";

const ContactForm = () => {
  return (
    <section id="budget" className="scroll-mt-20 px-[20px] py-[40px]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-[40px]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Consultar Disponibilidade
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas
          </p>
        </div>

        <div className="mt-[30px] flex flex-wrap gap-[20px]">

          <a
            href="https://wa.me/556186781663?text=Ol%C3%A1!%20Gostaria%20de%20combo%20com%20internet,%20TV%20e%20telefone."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-[12px] hover:bg-yellow-500 text-white border cursor-pointer bg-transparent duration-300 border-white hover:border-yellow-500 rounded-lg justify-center flex items-center"
          >
            Personalizar Combo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
