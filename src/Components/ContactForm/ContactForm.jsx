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
    <section id="contact" style={{ padding: "40px 20px", border: "1px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff" }}>
            Solicite Seu Orçamento
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#ccc" }}>
            Preencha o formulário e nossa equipe entrará em contato em até 24
            horas
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 300px" }}>
              <label style={{ color: "#fff" }}>Nome Completo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Seu nome completo"
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
                required
              />
            </div>

            <div style={{ flex: "1 1 300px" }}>
              <label style={{ color: "#fff" }}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="seu@email.com"
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
                required
              />
            </div>

            <div style={{ flex: "1 1 300px" }}>
              <label style={{ color: "#fff" }}>Telefone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="(11) 99999-9999"
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
                required
              />
            </div>

            <div style={{ flex: "1 1 300px" }}>
              <label style={{ color: "#fff" }}>Endereço</label>
              <input
                type="text"
                value={formData.adress}
                onChange={(e) =>
                  setFormData({ ...formData, adress: e.target.value })
                }
                placeholder="Nome da sua empresa"
                style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              />
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label style={{ color: "#fff" }}>Plano de Interesse</label>
            <select
              value={formData.plan}
              onChange={(e) =>
                setFormData({ ...formData, plan: e.target.value })
              }
              style={{ width: "100%", padding: "10px", marginTop: "5px" }}
              required>
              <option value="">Selecione um plano</option>
              {plans.map((plan) => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: "20px" }}>
            <label style={{ color: "#fff" }}>Mensagem</label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Conte-nos mais sobre suas necessidades..."
              rows="5"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}></textarea>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}>
            <button
              type="submit"
              style={{
                flex: "1",
                padding: "12px",
                backgroundColor: "#6B21A8",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}>
              Solicitar Orçamento
            </button>
            <a
              href="https://wa.me/556186781663"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: "1",
                padding: "12px",
                backgroundColor: "transparent",
                color: "#A855F7",
                border: "1px solid #A855F7",
                textAlign: "center",
                textDecoration: "none",
              }}>
              Ligar Agora
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
