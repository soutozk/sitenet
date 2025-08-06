import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Search } from "lucide-react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";  

export default function FAQMpTelecom() {
  const [expanded, setExpanded] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const handleExpansion = (panel) => () => {
    setExpanded((prevExpanded) => (prevExpanded === panel ? null : panel));
  };

  const faqData = [
    {
      id: "panel1",
      title: "1. O que é internet via fibra óptica?",
      content:
        "É uma tecnologia de transmissão de dados que utiliza cabos de fibra de vidro, oferecendo alta velocidade e estabilidade mesmo em horários de pico.",
    },
    {
      id: "panel2",
      title: "2. Qual a diferença entre 600MB e 900MB?",
      content:
        "O plano de 900MB oferece maior velocidade de download e upload, ideal para casas com muitos dispositivos conectados ou para quem joga online e faz transmissões.",
    },
    {
      id: "panel3",
      title: "3. Como funciona a instalação da internet?",
      content:
        "Após a contratação, um técnico vai até o local, passa os cabos de fibra e configura o roteador. O processo dura cerca de 1 a 2 horas.",
    },
    {
      id: "panel4",
      title: "4. Preciso estar presente na hora da instalação?",
      content:
        "Sim, é necessário que o titular ou responsável esteja presente para autorizar a instalação e o acesso à residência ou empresa.",
    },
    {
      id: "panel5",
      title: "5. O modem está incluso?",
      content:
        "Sim, o modem/roteador é fornecido pela MP Telecom durante a instalação, já configurado para uso imediato.",
    },
    {
      id: "panel6",
      title: "6. Posso mudar de plano depois de contratar?",
      content:
        "Claro! Basta entrar em contato com nosso suporte para fazer o upgrade ou downgrade do plano.",
    },
    {
      id: "panel7",
      title: "7. Existe fidelidade?",
      content:
        "Trabalhamos com planos com e sem fidelidade. Consulte as opções disponíveis na sua região.",
    },
    {
      id: "panel8",
      title: "8. A internet continua funcionando sem energia elétrica?",
      content:
        "O serviço depende de energia elétrica para funcionar. Recomendamos uso de nobreak caso deseje manter a conexão em quedas de luz.",
    },
    {
      id: "panel9",
      title: "9. Qual a cobertura da MP Telecom?",
      content:
        "Atendemos diversas regiões do Distrito Federal. Consulte nosso atendimento para saber se seu endereço está coberto.",
    },
    {
      id: "panel10",
      title: "10. Como entro em contato com o suporte?",
      content: (
        <>
          Você pode entrar em contato por e-mail:{" "}
          <a
            className="text-yellow-400 underline"
            href="mailto:sac@mptelecom.net.br">
            sac@mptelecom.net.br
          </a>{" "}
          ou pelo WhatsApp:{" "}
          <a
            className="text-yellow-400 underline"
            href="https://wa.me/5561986781663"
            target="_blank"
            rel="noopener noreferrer">
            (61) 98678-1663
          </a>
          .
        </>
      ),
    },
  ];

  const filteredFaqData = faqData.filter((faq) =>
    faq.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar />

      <div
        className="
          min-h-screen bg-black text-white pt-24 pb-10 px-4
        ">
        <h1 className="text-3xl font-bold text-center mb-8">
          Perguntas Frequentes (FAQ)
        </h1>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Pesquisar perguntas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full pl-10 pr-4 py-2 rounded border border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F0AA30] transition-colors duration-300 `}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqData.map((faq) => (
            <Accordion
              key={faq.id}
              ref={faq.ref || null}
              expanded={expanded === faq.id}
              onChange={handleExpansion(faq.id)}
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                {
                  backgroundColor: "#444",
                  border: "1px solid #F0AA30",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px #F0AA30",
                  color: "#fff",
                  overflow: "hidden",
                },
                expanded === faq.id
                  ? {
                      [`& .${accordionClasses.region}`]: { height: "auto" },
                      [`& .${accordionDetailsClasses.root}`]: {
                        display: "block",
                      },
                    }
                  : {
                      [`& .${accordionClasses.region}`]: { height: 0 },
                      [`& .${accordionDetailsClasses.root}`]: {
                        display: "none",
                      },
                    },
              ]}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}>
                <Typography component="span">{faq.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
