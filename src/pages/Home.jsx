import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import BannerHome from "../Components/BannerHome/BannerHome";
import Cards from "../Components/Cards/Cards";
import TourVirtual from "../Components/TourVirtual/TourVirtual";
import FaqSection from "../Components/Faq/Faq";
import TrabalheConosco from "../Components/WorkWithUs/TrabalheConosco";
import Footer from "../Components/Footer/Footer";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import Plans from "../Components/Planos/Planos";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black ">
      <NavBar />
      <BannerHome />
      <Plans />
      <Cards />
      <TourVirtual />
      <TrabalheConosco />
      <FaqSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
