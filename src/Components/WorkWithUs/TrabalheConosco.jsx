"use client";

import React, { useState } from "react";
import VagasList from "./VagasList";
import VagaDetalhes from "./VagaDetalhes";
import CandidaturaForm from "./CandidaturaForm";
import ContactImage from "../../images/ContactImage.png";

const vagasDisponiveis = [
  {
    id: 1,
    titulo: "Atendente de Loja",
    departamento: "Vendas",
    tipo: "CLT",
    descricao:
      "Responsável pelo atendimento ao cliente, organização da loja e reposição de produtos.",
    requisitos: [
      "Ensino médio completo",
      "Boa comunicação",
      "Disponibilidade para finais de semana",
    ],
    beneficios: [
      "Vale transporte",
      "Vale refeição",
      "Desconto em produtos da loja",
    ],
  },
  {
    id: 2,
    titulo: "Repositor de Mercadorias",
    departamento: "Estoque",
    tipo: "CLT",
    descricao:
      "Auxiliar na organização das prateleiras e reposição de mercadorias.",
    requisitos: [
      "Ensino fundamental completo",
      "Organização e agilidade",
      "Disponibilidade de horário",
    ],
    beneficios: ["Vale transporte", "Assistência médica", "Cesta básica"],
  },
  {
    id: 3,
    titulo: "Operador de Caixa",
    departamento: "Financeiro",
    tipo: "CLT",
    descricao:
      "Realizar atendimento ao cliente e operação de caixa em supermercado.",
    requisitos: [
      "Ensino médio completo",
      "Experiência com caixa será um diferencial",
      "Pontualidade e responsabilidade",
    ],
    beneficios: ["Plano de saúde", "Vale alimentação", "Bonificação por metas"],
  },
  {
    id: 4,
    titulo: "Auxiliar de Limpeza",
    departamento: "Serviços Gerais",
    tipo: "CLT",
    descricao: "Responsável pela limpeza e conservação dos ambientes da loja.",
    requisitos: ["Ensino fundamental", "Experiência na função", "Proatividade"],
    beneficios: ["Vale transporte", "Vale refeição", "Convênio odontológico"],
  },
];

export default function TrabalheConosco() {
  const [selectedVaga, setSelectedVaga] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [view, setView] = useState("inicial"); // "inicial", "vagas", "detalhes", "form"

  const handleOpenDetails = (vaga) => {
    setSelectedVaga(vaga);
    setView("detalhes");
  };

  const handleOpenForm = (vaga = null) => {
    setSelectedVaga(vaga);
    setView("form");
  };

  const handleBack = () => {
    if (view === "detalhes") setView("vagas");
    else if (view === "form" && selectedVaga) setView("detalhes");
    else if (view === "form") setView("vagas");
    else setView("inicial");
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center lg:w-full bg-black p-8 rounded-3xl mb-[5%]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}>
      <div className="p-4 w-full max-w-6xl">
        {view === "inicial" && (
          <div className="text-center">
            <div className="flex items-center flex-col mb-8 text-center">
              <h1 className="text-4xl font-extrabold text-white">
                Trabalhe Conosco
              </h1>
              <p className="text-lg font-bold mt-2 text-white">
                Faça parte de uma equipe inovadora e apaixonada por tecnologia
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[460px]  aspect-square overflow-hidden rounded-lg mb-6 lg:mb-0 lg:mr-[5%]">
                <img
                  src={ContactImage.src || ContactImage}
                  alt="Imagem da Seção de Freezer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex flex-col gap-6 mb-8">
                  <div
                    className="bg-white/35 border-[4px] border-[#F0AA30] p-6  rounded-lg "
                    style={{
                      boxShadow:
                        "rgba(255, 145, 0, 0.19) 0px 10px 20px, rgba(255, 192, 98, 0.45) 0px 6px 6px",
                    }}>
                    <div className="h-16 w-16 mx-auto mb-4 text-yellow-600">
                      <p>icon</p>
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2 text-white "
                      style={{ textShadow: "0 1px 1px rgba(0, 0, 0, 0.9)" }}>
                      Ambiente Colaborativo
                    </h3>
                    <p className="text-gray-600 font-semibold">
                      Trabalhe com profissionais talentosos em um ambiente
                      dinâmico
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "vagas" && (
          <VagasList
            vagas={vagasDisponiveis}
            onSelect={handleOpenDetails}
            onCandidaturaEspontanea={() => handleOpenForm()}
            onBack={handleBack}
          />
        )}

        {view === "detalhes" && selectedVaga && (
          <VagaDetalhes
            vaga={selectedVaga}
            onBack={handleBack}
            onCandidatar={() => handleOpenForm(selectedVaga)}
          />
        )}

        {view === "form" && (
          <CandidaturaForm
            vaga={selectedVaga}
            onBack={handleBack}
            onSubmit={(formData) => {
              console.log("Formulário enviado:", {
                ...formData,
                vagaId: selectedVaga?.id || null,
              });
              alert("Candidatura enviada com sucesso!");
              setView(selectedVaga ? "detalhes" : "vagas");
            }}
          />
        )}
      </div>
    </div>
  );
}
