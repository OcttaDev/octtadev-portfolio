"use client";

import Box from "@/components/box/box";
import Header from "@/components/header/header";
import { MdOutlineWebStories } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import Container from "@/components/container/container";
import StackIcons from "@/components/stackIcons/stackIcons";

function Home() {
  return (
    <main className="space-y-16 h-screen">
      <Header />
      <section className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col items-center gap-10 w-[80%]">
          <h1 className="text-3xl font-semibold text-white w-full">
            Sobre mim
          </h1>
        </div>
        <div className="flex flex-col gap-10 w-[80%]">
          <p className="text-white">
            Como desenvolvedor, destaco-me por minha habilidade excepcional em
            transformar conceitos em soluções inovadoras. Com uma paixão
            incansável pela resolução de problemas, sou movido pela busca
            constante da excelência técnica. Minha habilidade de colaboração e
            comunicação eficaz fortalece equipes. Com um compromisso inabalável
            com a aprendizagem contínua, estou sempre atualizado com as últimas
            tecnologias, garantindo que cada projeto seja uma expressão de
            qualidade e eficiência. Sou, acima de tudo, um arquiteto digital
            apaixonado, construindo pontes entre visões e realidade por meio do
            meu código.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col gap-10 w-[80%]" id="about-me">
          <h1 className="text-3xl font-semibold text-white">Oque eu faço?</h1>
          <div className="flex flex-col lg:flex-row justify-around items-center lg:items-baseline gap-5 lg:gap-0">
            <Box
              title="Front-end"
              paragraph="Sou especializado no desenvolvimento de uma variedade de aplicações, sistemas, websites e landing pages."
            >
              <MdOutlineWebStories size={50} color="#fff" />
            </Box>
            <Box
              title="Back-end"
              paragraph="Desenvolvo serviços de back-end ou API para proporcionar maior dinamismo ao front-end."
            >
              <AiOutlineApi size={50} color="#fff" />
            </Box>
            <Box
              title="Mobile"
              paragraph="Tenho expertise no desenvolvimento de aplicativos nativos, proporcionando uma abordagem versátil e eficaz para projetos móveis."
            >
              <CiMobile3 size={50} color="#fff" />
            </Box>
          </div>
        </div>
      </section>
      <section
        className="flex flex-col items-center gap-10 w-full"
        id="projects"
      >
        <div className="flex flex-col items-center gap-10 w-[80%]">
          <h1 className="text-3xl font-semibold text-white w-full">Projetos</h1>
        </div>
        <div className="flex flex-col gap-10 w-[80%]">
          <Container
            path="https://fabiola-tuppeware.vercel.app/"
            title="Amostra de itens"
            paragraph="Um site compacto destinado à venda e exposição de produtos, com funcionalidade de redirecionamento direto para o chat do WhatsApp, feito em React e Tailwind."
            imageUrl="/images/fabiolatuppeware.png"
          />
          <Container
            title="Marli PLM"
            paragraph="Um sistema abrangente de gerenciamento de cadastros com backend em Next.js, banco de dados próprio e integração ao Firebase. Oferece controle avançado de cadastros e apresenta uma interface visual moderna usando Tailwind CSS. Obs: Por motivos de privacidade, a cliente não autorizou o link de acesso ao projeto."
            imageUrl="/images/marliplm.png"
          />
          <Container
            title="RPV"
            path="/images/rpv.pdf"
            download={true}
            paragraph="Uma landing page exclusiva focada em loteamentos, cuidadosamente projetada com botões de ação estrategicamente posicionados e chamadas visuais em todo o layout. A página inclui um formulário de contato intuitivo para facilitar a comunicação e apresenta imagens envolventes que destacam a beleza do ambiente. Obs: Por motivos de privacidade, não recebemos a autorização de expor alguns dados sobre o ambiente."
            imageUrl="/images/rpv.png"
          />

          <Container
            title="Landing Page App IeadMPS"
            paragraph="Uma landing page com inspiração em blogs, equipada com uma área de administração para gerenciar o conteúdo da página principal. O objetivo é direcionar e destacar de maneira eficaz o aplicativo da instituição, proporcionando uma experiência atraente e informativa, levando o usuário final a baixar o app."
            imageUrl="/images/webieadmps.png"
          />
          <Container
            title="Aplicativo IeadMPS"
            paragraph="Um aplicativo simples com React Native e Firebase para gerenciar cadastros em uma instituição. Permite aos membros criar carteiras, acessar agendas, horários anuais e ficar atualizado sobre eventos recorrentes."
            imageUrl="/images/bannerCellPhone.png"
          />
          <Container
            title="Horizon Ville"
            path="/images/horizonville.pdf"
            download={true}
            paragraph="Uma landing page exclusiva focada em loteamentos, cuidadosamente projetada com botões de ação estrategicamente posicionados e chamadas visuais em todo o layout. A página inclui um formulário de contato intuitivo para facilitar a comunicação e apresenta imagens envolventes que destacam a beleza do ambiente. Obs: Por motivos de privacidade, não recebemos a autorização de expor alguns dados sobre o ambiente."
            imageUrl="/images/horizonville.png"
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-10 mt-10">
        <div className="flex flex-col items-center gap-10 w-[80%]">
          <h1 className="text-3xl font-semibold text-white w-full">
            Minhas Skills
          </h1>
        </div>
        <div className="flex justify-center items-center w-full">
          <StackIcons />
        </div>
      </section>
    </main>
  );
}

export default Home;
