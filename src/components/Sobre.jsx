import logo from "../assets/imagens/logo-sentinel-antivirus.png"
import clock from "../assets/imagens/clock.png"
import lupa from "../assets/imagens/lupa.png"
import engrenagem from "../assets/imagens/engrenagem.png"
import atualizacoes from "../assets/imagens/atualizacoes.png"
import internet from "../assets/imagens/internet.png"
import protecao from "../assets/imagens/protecao.png"

/*Array de objetos pra formar a grid dos cards*/
const cards_sobre = [
  {
    imagem: clock,
    titulo: "Proteção em tempo real",
    descricao: "Monitoramento contínuo que identifica e bloqueia vírus, malwares e ameaças digitais antes que causem qualquer dano ao sistema."
  },
  {
    imagem: lupa,
    titulo: "Detecção inteligente",
    descricao: "Análise avançada de comportamento para identificar ameaças conhecidas e desconhecidas, oferecendo proteção além das assinaturas tradicionais."
  },
  {
    imagem: engrenagem,
    titulo: "Leve e otimizado",
    descricao: "Desenvolvido para consumir poucos recursos do sistema, garantindo segurança sem comprometer o desempenho do dispositivo."
  },
  {
    imagem: atualizacoes,
    titulo: "Atualizações automáticas",
    descricao: "Banco de dados atualizado constantemente para proteger contra as ameaças mais recentes, sem necessidade de intervenção do usuário."
  },
  {
    imagem: internet,
    titulo: "Proteção online",
    descricao: "Bloqueio de sites maliciosos, downloads perigosos e tentativas de phishing durante a navegação na internet."
  },
  {
    imagem: protecao,
    titulo: "Privacidade e controle",
    descricao: "Ferramentas que ajudam a proteger dados pessoais e oferecem controle total sobre as permissões e ações do antivírus.",
  }
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-8">
        
        {/*Logo e nome da empresa*/}
        <div className="flex items-center justify-center mb-4">
          <img
            src={logo}
            alt="Sentinel Logo"
            className="h-20 w-auto"
          />
          <h2 className="text-[45px] font-roboto font-normal [text-shadow:0_2px_4px_rgba(0,0,0,0.10)]">
            Sentinel Antivirus
          </h2>
        </div>

        {/*Grade dos cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/*Mapeia a lista de cards*/}
          {cards_sobre.map((card_sobre, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 border border-sentinel-blue-light rounded-[20px] bg-white hover:shadow-lg transition-all"
            >

              {/*Imagem*/}
              <img 
                src={card_sobre.imagem} 
                alt={card_sobre.titulo}
                className="w-32 h-32 mb-4"
              />

              {/*Titulo*/}
              <h3 className="text-[22px] font-roboto font-medium text-center mb-3">
                {card_sobre.titulo}
              </h3>

              {/*Descricao*/}
              <p className="text-sm font-roboto text-center leading-relaxed text-gray-700">
                {card_sobre.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-12 right-12 h-px bg-black"></div>
    </section>
  );
}
