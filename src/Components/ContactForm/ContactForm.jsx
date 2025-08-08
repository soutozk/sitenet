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

  const [combo, setCombo] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedPlan = plans.find((p) => p.value === formData.plan);

    let message = `
*Solicitação de Orçamento - MP Telecom*

 *Nome:* ${formData.name}
 *Email:* ${formData.email}
 *Telefone:* ${formData.phone}
 *Endereço:* ${formData.adress}

*Plano de Interesse:* ${selectedPlan?.label}
*Descrição:* ${selectedPlan?.description}

 *Mensagem adicional:* ${formData.message}
`;

    if (combo) {
      message += `

*Combo Personalizado:* Olá! Gostaria de combo com internet, TV e telefone.
`;
    }

    const url = `https://wa.me/556186781663?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="budget" className="scroll-mt-20 px-[20px] py-[40px]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-[40px]">
          <p className="text-lg font-bold mt-2 text-white md:text-xl">
            Preencha o formulário e nossa equipe entrará em contato em até 24
            horas
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-[20px]">
            {/* Nome, Email, Telefone, Endereço */}
            {["name", "email", "phone", "adress"].map((field, index) => (
              <div key={index} className="flex-1 min-w-[300px]">
                <label className="text-white capitalize">
                  {field === "adress"
                    ? "Endereço"
                    : field === "phone"
                    ? "Telefone"
                    : field === "name"
                    ? "Nome Completo"
                    : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  placeholder={
                    field === "adress"
                      ? "Seu endereço completo"
                      : field === "phone"
                      ? "(11) 99999-9999"
                      : field === "name"
                      ? "Seu nome completo"
                      : "seu@email.com"
                  }
                  className="w-full mt-[5px] p-[10px] text-white bg-transparent border rounded-lg"
                  required={field !== "adress"}
                />
              </div>
            ))}
          </div>

          {/* Plano de Interesse */}
          <div className="mt-[20px]">
            <label className="text-white">Plano de Interesse</label>
            <select
              value={formData.plan}
              onChange={(e) =>
                setFormData({ ...formData, plan: e.target.value })
              }
              className="w-full mt-[5px] p-[10px] text-white bg-transparent border rounded-lg"
              required>
              <option
                value=""
                style={{ backgroundColor: "black", color: "white" }}>
                Selecione um plano
              </option>
              {plans.map((plan) => (
                <option
                  key={plan.value}
                  value={plan.value}
                  className="bg-black text-white">
                  {plan.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mensagem */}
          <div className="mt-[20px]">
            <label className="text-white">Mensagem</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Conte-nos mais sobre suas necessidades..."
              rows="5"
              className="w-full mt-[5px] p-[10px] text-white bg-transparent border rounded-lg"></textarea>
          </div>

          {/* Botão Personalizar Combo */}
          <div className="mt-[20px] flex items-center gap-4">
            <button
              type="button"
              onClick={() => setCombo(!combo)}
              className={`px-4 py-2 border rounded-lg duration-300 ${
                combo
                  ? "bg-yellow-500 border-yellow-500 text-black"
                  : "bg-transparent border-white text-white hover:border-yellow-500 hover:text-yellow-500"
              }`}>
              {combo ? "Combo Ativado" : "Personalizar Combo"}
            </button>

            {/* ícone (i) de info */}
            <button
              type="button"
              onClick={() => setShowInfo(!showInfo)}
              className="text-white border border-white rounded-full w-[30px] h-[30px] flex items-center justify-center hover:bg-white hover:text-black transition duration-300"
              title="O que é o combo?">
              i
            </button>
          </div>

          {/* Info do combo */}
          {showInfo && (
            <p className="mt-2 text-sm text-yellow-400 max-w-[500px]">
              O combo inclui Internet + TV + Telefone com preços especiais. Você
              será atendido por um consultor para montar o melhor pacote para
              sua casa ou empresa.
            </p>
          )}

          {/* Botões finais */}
          <div className="mt-[30px] flex flex-wrap gap-[20px]">
            <button
              type="submit"
              className="flex-1 p-[12px] hover:bg-yellow-500 text-white border cursor-pointer bg-transparent duration-300  border-white hover:border-yellow-500 rounded-lg">
              Consultar disponibilidade
            </button>
            <a
              href="https://wa.me/556186781663"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-[12px] hover:bg-yellow-500 text-white border cursor-pointer bg-transparent duration-300  border-white hover:border-yellow-500 rounded-lg justify-center flex items-center">
              Ligar Agora
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
