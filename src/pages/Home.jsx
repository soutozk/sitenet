import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import BannerHome from "../Components/BannerHome/BannerHome";
import Cards from "../Components/Cards/Cards";
import TourVirtual from "../Components/TourVirtual/TourVirtual";
import FaqSection from "../Components/Faq/Faq";
import TrabalheConosco from "../Components/WorkWithUs/TrabalheConosco";
import Footer from "../Components/Footer/Footer";
import WhatsAppWidget from "../Components/WppWidget/WppWidget";
import Plans from "../Components/Plans/Plans";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Advantages from "../Components/Advantages/Advantages";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-black ">
      <NavBar />
      <BannerHome />
      <About />
      <Advantages />
      <Cards />
      <Plans />
      <Services />
      {/* sectio de orçamento q o user vai prencher um formulario e ao clicar ele leva para o wpp com o pedido ja escrito */}

      {/* <FaqSection /> */}
      {/* <TourVirtual /> */}
      {/* <TrabalheConosco /> */}
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
