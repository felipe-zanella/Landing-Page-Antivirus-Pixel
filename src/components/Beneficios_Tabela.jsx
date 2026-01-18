import {Check, X} from "lucide-react";
import logo from "../assets/imagens/logo-sentinel-antivirus.png";

const recursos = [
  "Detecção por IA:",
  "Proteção em tempo real:",
  "Ransomware:",
  "Baixo consumo:",
  "Firewall integrado:",
  "Suporte 24/7:"
];

export default function Beneficios_Tabela() {
  return (
    <section id="beneficios" className="pt-5 pb-10 bg-white relative">
      
      <div className="max-w-5xl mx-auto px-8 text-center">

        {/*Titulo e subtitulo*/}
        <h1 className="text-5xl md:text-[57px] font-roboto font-light leading-tight tracking-tight [text-shadow:0_2px_4px_rgba(0,0,0,0.10)]">
            Por que o Sentinel é superior aos antivírus comuns?
        </h1>
        <h2 className="text-base font-roboto leading-relaxed mb-6 text-gray-800 [text-shadow:0_2px_4px_rgba(0,0,0,0.08)]">
            Compare lado a lado os recursos que realmente protegem seus dados no dia a dia.
          </h2>
        
        {/*Borda e grade da tabela de beneficios*/}
        <div className="border border-[#5B5B5B] rounded overflow-hidden">

          {/*Primeira linha (Recursos e os antivirus)*/}
          <div className="grid grid-cols-3 bg-white border-b border-black">
            <div className="flex items-center justify-center py-14 px-3 border-r border-black">
              <h2 className="text-4xl md:text-5xl font-inter font-extralight text-center">
                Recursos:
              </h2>
            </div>
            <div className="flex items-center justify-center py-8 px-3 border-r border-black bg-gradient-to-b from-white to-gray-50">
              <img
                src={logo}
                alt="Sentinel Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="flex items-center justify-center py-6 px-3">
              <h2 className="text-3xl md:text-5xl font-inter font-extralight text-center leading-tight">
                Antivírus genérico:
              </h2>
            </div>
          </div>

          {/*Resto das linhas*/}
          {recursos.map((recurso, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-b border-black last:border-b-0"
            >
              {/*Primeira coluna (recursos)*/}
              <div className="flex items-center justify-center py-12 md:py-16 px-3 border-r border-black bg-white">
                <p className="text-xl md:text-2xl font-inter font-extralight text-center">
                  {recurso}
                </p>
              </div>

              {/*Segunda coluna (sentinel-antivirus), todos checks*/}
              <div className="flex items-center justify-center py-8 px-3 border-r border-black bg-gradient-to-b from-[rgba(72,202,228,0.12)] to-[rgba(72,202,228,0.12)]">
                <Check className="w-12 h-12 text-sentinel-blue-primary stroke-[3]" />
              </div>

              {/*Terceira coluna (antivirus generico), todos X*/}
              <div className="flex items-center justify-center py-8 px-3 bg-gradient-to-b from-[rgba(255,0,0,0.12)] to-[rgba(255,0,0,0.12)]">
                <X className="w-16 h-16 text-red-600 stroke-[4]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Obs embaixo da tabela*/}
        <p className="mt-4 text-center text-sm text-gray-500">
          Comparação baseada em recursos essenciais de segurança digital em 2026.
        </p>
       <div className="absolute bottom-0 left-12 right-12 h-px bg-black"></div>
    </section>
  );
}