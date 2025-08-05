import React, { useState } from "react";

const plans = [
  {
    value: "basic",
    label: "MP Basic - R$ 89,90",
    description: "400 megas de internet via fibra\nInstalação grátis",
    price: "R$ 89,90 FIXO",
  },
  {
    value: "fast",
    label: "MP Fast - R$ 99,90",
    description: "600 megas de internet via fibra\nInstalação grátis",
    price: "R$ 99,90 FIXO",
  },
  {
    value: "ultra",
    label: "MP Ultra - R$ 99,90 (3 meses), após R$ 119,90",
    description: "800 megas de internet via fibra\nInstalação grátis",
    price: "R$ 99,90 após 3 meses: R$ 119,90",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
    plan: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPlan = plans.find((p) => p.value === formData.plan);

    const message = `
*Solicitação de Orçamento - MP Telecom*

 *Nome:* ${formData.name}
 *Email:* ${formData.email}
 *Telefone:* ${formData.phone}
 *Endereço:* ${formData.adress}

*Plano de Interesse:* ${selectedPlan?.label}
*Descrição:* ${selectedPlan?.description}

 *Mensagem adicional:* ${formData.message}
`;

    const url = `https://wa.me/556186781663?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
 <section id="budget" className="scroll-mt-20 px-[20px] py-[40px] ">
  <div className="max-w-[800px] mx-auto">
    <div className="text-center mb-[40px]">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Solicite Seu Orçamento</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Preencha o formulário e nossa equipe entrará em contato em até 24 horas
      </p>
    </div>

    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap gap-[20px]">
        <div className="flex-1 min-w-[300px]">
          <label className="text-white">Nome Completo</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome completo"
            className="w-full mt-[5px] p-[10px] bg-transparent  border rounded-lg"
            required
          />
        </div>

        <div className="flex-1 min-w-[300px] ">
          <label className="text-white">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
            className="w-full mt-[5px] p-[10px] bg-transparent  border rounded-lg"
            required
          />
        </div>

        <div className="flex-1 min-w-[300px]">
          <label className="text-white">Telefone</label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(11) 99999-9999"
            className="w-full mt-[5px] p-[10px] bg-transparent  border rounded-lg"
            required
          />
        </div>

        <div className="flex-1 min-w-[300px]">
          <label className="text-white">Endereço</label>
          <input
            type="text"
            value={formData.adress}
            onChange={(e) => setFormData({ ...formData, adress: e.target.value })}
            placeholder="Nome da sua empresa"
            className="w-full mt-[5px] p-[10px] bg-transparent  border rounded-lg"
          />
        </div>
      </div>

      <div className="mt-[20px]">
        <label className="text-white">Plano de Interesse</label>
        <select
          value={formData.plan}
          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          className="w-full mt-[5px] p-[10px] text-white bg-transparent  border rounded-lg"
          required
        >
          <option value="">Selecione um plano</option>
          {plans.map((plan) => (
            <option key={plan.value} value={plan.value}>
              {plan.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-[20px]">
        <label className="text-white ">Mensagem</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Conte-nos mais sobre suas necessidades..."
          rows="5"
          className="w-full mt-[5px] p-[10px] bg-transparent  border rounded-lg"
        ></textarea>
      </div>

      <div className="mt-[30px] flex flex-wrap gap-[20px]">
        <button
          type="submit"
          className="flex-1 p-[12px] hover:bg-yellow-500 text-white border cursor-pointer bg-transparent duration-300  border-white hover:border-yellow-500 rounded-lg"
        >
          Solicitar Orçamento
        </button>
        <a
          href="https://wa.me/556186781663"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 p-[12px] bg-transparent text-yellow-500 hover:text-black text-center no-underline  border border-yellow-500 hover:border-white  hover:bg-white rounded-lg"
        >
          Ligar Agora
        </a>
      </div>
    </form>
  </div>
</section>

  );
};

export default ContactForm;
