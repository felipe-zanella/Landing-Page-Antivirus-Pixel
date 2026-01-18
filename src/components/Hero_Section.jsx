import { Download, Star } from "lucide-react";
import TrustLogo from "../assets/imagens/Trustpilot_Logo.svg";
import imagem_hero_section from "../assets/imagens/imagem_hero_section.png"

export default function Hero_Section() {
  return ( 
    <section className="relative min-h-screen min-w-full flex items-start pt-20 lg:pt-28 overflow-hidden">

      {/* Container da imagem principal da hero section*/}
      <div className="absolute top-0 right-0 h-[95%] hidden lg:block z-0 ">
        <img 
          src={imagem_hero_section}
          alt="Imagem principal da Hero Section"
          className="h-full w-full object-contain origin-right" 
        />
      </div>

      {/* Container dos itens da HeroSection */}
      <div className="max-w-7xl px-16 pb-10 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-[57px] font-roboto font-medium leading-tight tracking-tight">
            Proteção inteligente contra ameaças digitais
          </h1>
          <p className="text-base font-roboto leading-relaxed mb-4 max-w-xl text-gray-800">
            Nosso antivírus protege seus dispositivos em tempo real contra
            vírus, malwares, ransomware e ataques online. Tecnologia avançada,
            atualizações automáticas e desempenho otimizado para garantir
            segurança sem comprometer sua experiência.
          </p>
          <div className="mb-6">
            <button className="flex items-center gap-4 px-10 py-6 lg:px-16 lg:py-12 bg-sentinel-blue-primary text-white rounded-full hover:bg-sentinel-blue-secondary transition-all shadow-[0_8px_13.1px_0_rgba(0,0,0,0.25)] hover:shadow-[0_12px_20px_0_rgba(0,0,0,0.3)]">
              <Download className="w-10 h-10"/>
              <span className="text-3xl font-roboto font-normal">
                Baixar Agora
              </span>
            </button>
          </div>
          <div className="border-t border-black w-44 mb-3 shadow-sm"></div>
          <p className="text-xs font-roboto text-sentinel-blue-light mb-4">
            Disponível para MacOS, IOS, Android, Windows e Linux
          </p>

          {/*Seção do Trustpilot*/}
          <div className="flex flex-col items-start bg-white p-4 rounded-lg shadow-lg h-[120px] w-[200px] hover:shadow-xl transition-all">
            <p className="text-base font-semibold text-gray-800">Excelente</p>
            <div className="flex items-center gap-1">

              {/*Desenha as estrelas com fundo verde usando array*/}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-5 h-5 bg-green-500 flex items-center justify-center">
                  <Star className="w-4 h-4 fill-white stroke-0" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <a href="https://br.trustpilot.com/" target="_blank" className="text-xs underline text-gray-700">
                <span className="font-bold">31239</span> avalições na
              </a>
              <img src={TrustLogo} alt="Trustpilot" className="pt-1 w-[40%] object-fill"/>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-12 right-12 h-px bg-black"></div>
    </section>
  );
}