import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter */}
      <div className="border-b border-border/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display mb-2">
                Receba <span className="text-primary">Ofertas Exclusivas</span>
              </h3>
              <p className="text-secondary-foreground/70">
                Cadastre-se e ganhe 10% OFF na primeira compra
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 md:w-80 px-4 py-3 rounded-md bg-background/10 border border-border/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">Cadastrar</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="font-display text-xl font-bold text-primary-foreground">FT</span>
              </div>
              <span className="font-display text-xl font-bold">FerraTech</span>
            </div>
            <p className="text-secondary-foreground/70 mb-4">
              Sua loja completa de ferramentas para marcenaria e DIY. Qualidade profissional com os melhores preços.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Institucional</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-lg mb-4">Ajuda</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Como Comprar</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Formas de Pagamento</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Prazo de Entrega</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">Troca e Devolução</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/70">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/70">contato@ferratech.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70">Rua das Ferramentas, 123<br />São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
            <p>© 2024 FerraTech. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
