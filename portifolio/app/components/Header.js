"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import estilos from "./page.module.css";

const LINKS = [
  { rotulo: "Sobre", href: "/#sobre" },
  { rotulo: "Formação", href: "/#formacao" },
  { rotulo: "Pesquisa", href: "/#pesquisa" },
  { rotulo: "Experiência", href: "/#experiencia" },
  { rotulo: "Extracurriculares", href: "/#extracurriculares" },
  { rotulo: "Projetos", href: "/#projetos" },
  { rotulo: "Jogo da Forca", href: "/forca" },
];

export default function Header() {
  const caminho = usePathname();
  const naForca = caminho === "/forca";

  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.conteudo}>
        <Link href="/" className={estilos.marca}>
          Gustavo H. M. Pinheiro
        </Link>

        <nav className={estilos.navegacao} aria-label="Navegação principal">
          {LINKS.map((link) => {
            const ativo = link.href === "/forca" ? naForca : !naForca;
            return (
              <Link
                key={link.rotulo}
                href={link.href}
                className={ativo ? estilos.linkAtivo : estilos.link}
              >
                {link.rotulo}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}