import depoimento_1 from "../assets/imagens/1_depoimento.png";
import depoimento_2 from "../assets/imagens/2_depoimento.png";
import depoimento_3 from "../assets/imagens/3_depoimento.png";

const depoimentos = [
  {
    fala: '"O Sentinel trouxe a segurança que eu precisava sem complicação. A interface é simples, a proteção é eficiente e o desempenho do meu computador continuou o mesmo."',
    pessoa: "— Fernanda C., produtora de conteúdo",
    imagem: depoimento_1
  },
  {
    fala: '"Depois de testar várias opções, o Sentinel foi o único que entregou proteção real sem impacto no sistema. Recomendo facilmente."',
    pessoa: "— Eduardo V., empreendedor",
    imagem: depoimento_2
  },
  {
    fala: '"O Sentinel trouxe a segurança que eu precisava sem complicação. A interface é simples, a proteção é eficiente e o desempenho do meu computador continuou o mesmo."',
    pessoa: "— Fernanda C., produtora de conteúdo",
    imagem: depoimento_3
  }
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="pt-12 pb-2 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/*Grade dos depoimentos*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

          {/*Cards dos epoimentos*/}
          {depoimentos.map((depoimento, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center">
              <div className="relative group w-full mb-12 hover:scale-105 transition-all">

                {/*Desenho do card, as falas, imagens, efeitos e etc...*/}
                <div className="bg-sentinel-blue-secondary text-white rounded-[10px] p-8 min-h-[274px] flex flex-col justify-center shadow-lg hover:bg-white hover:text-black hover:outline hover:outline-1 transition-all">
                  <p className="text-[22px] font-inter font-extralight leading-snug mb-4 text-center">
                    {depoimento.fala} 
                  </p>
                  <p className="text-[22px] font-inter font-semibold text-center">
                    {depoimento.pessoa}
                  </p>
                </div>
                
                {/*Icone da pessoa embaixo do card*/}
                <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2">
                  <div className="w-[70px] h-[70px] rounded-full bg-sentinel-blue-pale flex items-center justify-center group-hover:bg-white transition-all">
                    <div
                      className="w-[60px] h-[60px] rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${depoimento.imagem})` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
