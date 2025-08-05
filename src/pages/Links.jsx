"use client";

import { BackgroundEffects } from "../Components/BackgroundEffects";
import { Header } from "../Components/HeaderLinkBio";
import { SocialLinks } from "../Components/SocialLinks";
import { SystemCard } from "../Components/SystemCard/SystemCard";
import { Footer } from "../Components/FooterLinkBio";
import ImageMercadoPago from "../images/MercadoPago.png";
import NossoSite from "../images/NossoSite.png";
import ContactLink from "../images/ContactLink.png";
import MpFast from "../images/MpFast.png";
import { Contact } from "lucide-react";

const systems = [
  {
    title: "",
    description: "",
    image: NossoSite,
    icon: "Building2",
    url: "#",
  },
  {
    title: "",
    description: "",
    image: ContactLink,
    icon: "BarChart3",
    url: "https://wa.me/5561986781663",
  },
  {
    title: "",
    description: "",
    image: MpFast,
    icon: "Users",
    url: "https://wa.me/5561986781663?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20MP%20Fast.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
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
          <div className="space-y- max-w-lg mx-auto">
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
            href="https://api.whatsapp.com/send?phone=5561986781663&text=Ol%C3%A1%2C%20tenho%20interesse%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            className="inline-block"></a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
