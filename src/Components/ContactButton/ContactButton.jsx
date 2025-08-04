"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "../Animations";

export function ContactButton({ delay }) {
  return (
    <FadeIn delay={delay}>
      <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
        Fale Conosco Agora
        <ArrowRight className="ml-2 w-5 h-5 inline" />
      </button>
    </FadeIn>
  );
}
