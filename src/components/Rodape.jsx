import { Phone, Mail, Instagram } from "lucide-react";
import logo from "../assets/imagens/logo-sentinel-antivirus.png";

export default function Rodape() {
  return (
    <footer id="contato" className="bg-sentinel-blue-dark text-white py-4">
      <div className="max-w-7xl mx-auto px-8">
        
        {/*Conteudo do rodape*/}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://www.instagram.com/felipeoz_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-sentinel-blue-pale transition-colors"
          >

            {/*Icone do insta do lucide-react*/}
            <Instagram className="w-6 h-6 text-[#1E1E1E]" />
          </a>

          {/*Contato (numero e email)*/}
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>+55 54 99652-6165</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>felipe.zanella@ejpixel.com.br</span>
            </div>
          </div>

          {/*Contato (endereço)*/}
          <div className="text-center text-sm font-inter">
            <p className="text-base mb-1">
              Rua São Tomás de Aquino, 129, Trindade, Florianópolis, 88036-560
            </p>
          </div>

          {/*Logo do antivirus*/}
          <img
            src={logo}
            alt="Sentinel Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}