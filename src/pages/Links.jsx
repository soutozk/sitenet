"use client";

import { BackgroundEffects } from "../Components/BackgroundEffects";
import { Header } from "../Components/HeaderLinkBio";
import { SocialLinks } from "../Components/SocialLinks";
import { SystemCard } from "../Components/SystemCard/SystemCard";
import { QuickLinkCard } from "../Components/QuickLinkCard";
import { ContactButton } from "../Components/ContactButton/ContactButton";
import { Footer } from "../Components/FooterLinkBio";
import ImageMercadoPago from "../images/MercadoPago.png";
import NossoSite from "../images/NossoSite.png";
import Avaliacao from "../images/Avaliacao.png";
import Zap from "../images/Zap.png";

const systems = [
  {
    title: "Sistema ERP Completo",
    description: "Gestão integrada para sua empresa",
    image: NossoSite,
    color: "from-blue-600 to-blue-800",
    icon: "Building2",
    url: "https://bellaerp.com.br",
  },
  {
    title: "Dashboard Analytics",
    description: "Relatórios e métricas em tempo real",
    image: ImageMercadoPago,
    color: "from-purple-600 to-purple-800",
    icon: "BarChart3",
    url: "https://www.mercadopago.com.br/revendedores/28a8f04a-5425-4faa-adea-f96f1e707722?utm_source=bio_libre&utm_medium=Referral&utm_campaign=general_link",
  },
  {
    title: "Gestão de Pessoas",
    description: "RH completo e folha de pagamento",
    image: Zap,
    color: "from-green-600 to-green-800",
    icon: "Users",
    url: "https://api.whatsapp.com/send?phone=556141412287&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20de%20Gest%C3%A3o%20de%20Pessoas%20da%20BellaERP.",
  },
  {
    title: "Avaliações",
    description: "Feedback dos nossos clientes",
    image: Avaliacao,
    color: "from-green-600 to-green-800",
    icon: "Users",
    url: "https://www.google.com/maps/place//data=!4m3!3m2!1s0x935bb8f9588be0d1:0xccf87820884768f0!12e1?source=g.page.m._&utm_source=bio_libre&laa=merchant-review-solicitation",
  },
];

const quickLinks = [
  {
    title: "Demonstração Gratuita",
    description: "Veja nossos sistemas em ação",
    color: "from-indigo-600 to-indigo-800",
    url: "https://api.whatsapp.com/send?phone=556141412287&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20gratuita%20dos%20sistemas%20BellaERP.",
  },
  {
    title: "Suporte Técnico",
    description: "Atendimento especializado 24/7",
    color: "from-emerald-600 to-emerald-800",
    url: "https://api.whatsapp.com/send?phone=556141412287&text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20o%20suporte%20t%C3%A9cnico%20do%20sistema%20BellaERP.",
  },
];

export default function LinkBio() {
  return (
    <div className="min-h-screen bg-black from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        <Header />
        <SocialLinks />

        {/* Main Systems Grid */}
        <div className="px-8 lg:px-6 mt-12 lg:mt-20">
          <div className="space-y-4 max-w-lg mx-auto">
            {systems.map((system, index) => (
              <a
                href={system.url}
                key={index}
                className="block hover:scale-[1.02] transition-transform duration-200">
                <SystemCard
                  title={system.title}
                  description={system.description}
                  image={system.image}
                  color={system.color}
                  icon={system.icon}
                  delay={index * 100}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-12 lg:mt-16 pb-12">
          <a
            href="https://api.whatsapp.com/send?phone=556141412287&text=Ol%C3%A1%2C%20tenho%20interesse%20nos%20sistemas%20da%20BellaERP%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            className="inline-block">
            <ContactButton delay={(systems.length + quickLinks.length) * 100} />
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
