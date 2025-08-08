"use client";

import React, { useState } from "react";
import { Icon } from "../../Lib/Ultils/Icons/icons";
import ContactImage from "../../images/ContactImage.png";

export default function TrabalheConosco() {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center lg:w-full bg-black p-8 rounded-3xl mb-[5%] scroll-mt-10 md:scroll-mt-32"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}>
      <div className="p-4 w-full max-w-6xl">
        <div className="text-center">
          <div className="flex items-center flex-col mb-8 text-center">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Entre em Contato Agora Mesmo
            </h1>
            <p className="text-lg font-bold mt-2 text-white md:text-xl">
              Fale com a nossa equipe e tire todas as suas dúvidas agora mesmo
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="relative w-full max-w-[460px] aspect-square overflow-hidden rounded-lg mb-6 lg:mb-0 lg:mr-[5%]">
              <img
                src={ContactImage}
                alt="Imagem da Seção de Contato"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 mb-8 w-full max-w-md">
              <div
                className="bg-transparent border-[3px] border-[#F0AA30] p-6 rounded-lg text-center"
                style={{
                  boxShadow:
                    "rgba(255, 145, 0, 0.19) 0px 10px 20px, rgba(255, 192, 98, 0.45) 0px 6px 6px",
                }}>
                <h3
                  className="text-xl font-semibold mb-4 text-white"
                  style={{ textShadow: "0 1px 1px rgba(0, 0, 0, 0.9)" }}>
                  Informações de Contato
                </h3>
                <div className="space-y-4 text-white">
                  
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Phone" color="white" size={20} />
                    <span className="text-lg font-semibold">
                      (61) 98678-1663
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
