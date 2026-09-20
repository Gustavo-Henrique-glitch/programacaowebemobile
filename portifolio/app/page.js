import Link from "next/link";
import Header from "./components/Header";
import estilos from "./page.module.css";

const GITHUB = "https://github.com/Gustavo-Henrique-glitch";
const LINKEDIN =
  "https://www.linkedin.com/in/gustavo-henrique-mendes-pinheiro-07708333b/";
const EMAIL = "gh33493@gmail.com";

const TECNOLOGIAS = [
  "Python",
  "JavaScript",
  "React",
  "Next.js",
  "Django",
  "Java",
  "C",
  "C++",
  "Arduino",
  "PostgreSQL",
  "Jupyter",
  "Git",
  "LaTeX",
];

const PESQUISA = [
  {
    titulo:
      "Iniciação Científica: previsão de crises epilépticas a partir de sinais de EEG",
    texto:
      "Pesquisa em andamento voltada à identificação de padrões em sinais de EEG capazes de antecipar crises em pacientes com epilepsia. Envolve análise de dados, revisão de literatura científica internacional e aplicação de técnicas computacionais a dados clínicos.",
  },
  {
    titulo: "Replicação de artigo científico em Inteligência Artificial",
    texto:
      "Reprodução dos experimentos do artigo “Joint Diagnosis of Pneumonia, COVID-19, and Tuberculosis from Chest X-ray Images: A Deep Learning Approach” (Diagnostics, MDPI, 2023), com redes neurais convolucionais aplicadas a radiografias de tórax, validação dos resultados originais e proposta de melhoria sobre o método do autor.",
  },
];

const EXPERIENCIA = [
  {
    titulo:
      "Sistema de Controle de Acesso Biométrico — 5º CTA (Exército Brasileiro)",
    texto:
      "Projeto desenvolvido em parceria com o 5º Centro de Telemática de Área a partir de dois problemas levantados em visita técnica: a dificuldade de remover usuários do sistema biométrico em uso e a ausência de histórico de entradas e saídas. A solução integra um terminal biométrico Anviz T50M, um servidor e um painel web administrativo, com autenticação em duas etapas, gestão de ambientes com permissões por pessoa, registro de todas as tentativas de acesso, logs de auditoria e integração com câmeras de vigilância. Inclui documentação técnica completa produzida em LaTeX.",
  },
  {
    titulo: "Projeto Integrador — Astech",
    texto:
      "Site institucional e catálogo de produtos para empresa de venda e locação de equipamentos hospitalares em Recife, com carrinho de compras, chatbot e fluxo de contato via WhatsApp. Desenvolvido em equipe com Next.js, CSS Modules, Zustand e Back4App.",
  },
];

const EXTRACURRICULARES = [
  "Estudo autodidata de Inteligência Artificial e Machine Learning",
  "Experimentos com sistemas embarcados e robótica (Arduino e C++)",
  "Desenvolvimento web pessoal com Django e Next.js",
  "Produção de documentação técnica e artigos em LaTeX / Overleaf",
];

const PROJETOS = [
  {
    titulo: "Projeto de Inteligência Artificial",
    descricao:
      "Classificação de imagens médicas com redes neurais convolucionais, desenvolvido em Jupyter Notebook.",
    tecnologias: "Python · Jupyter · CNN · Keras",
    repositorio: `${GITHUB}/projetoInteligenciaArtificial`,
  },
  
  {
    titulo: "Métodos Numéricos — Interpolação",
    descricao:
      "Implementação e comparação de dois métodos de interpolação, com análise de desempenho e precisão no formato IEEE Conference.",
    tecnologias: "Python",
    repositorio: `${GITHUB}/Metodos-Numericos-Interpolacao`,
  },
  {
    titulo: "Projeto Transporte UDP",
    descricao:
      "Chat com confirmação de entrega (ACK) e reenvio manual de mensagens pendentes sobre o protocolo UDP.",
    tecnologias: "Python · Sockets",
    repositorio: `${GITHUB}/projeto_Transporte_UDP`,
  },
  {
    titulo: "Programação Web e Mobile",
    descricao:
      "Aplicação web desenvolvida em grupo com Next.js e Back4App.",
    tecnologias: "Next.js · React · CSS",
    repositorio: `${GITHUB}/programacaowebemobile`,
  }
  
];

export default function Portfolio() {
  return (
    <>
      <Header />

      <main className={estilos.pagina}>
        <header className={estilos.topo}>
          <h1 className={estilos.nome}>Gustavo Henrique Mendes Pinheiro</h1>
          <p className={estilos.subtitulo}>
            Estudante de Ciência da Computação — UNICAP, Recife/PE
          </p>
          <p className={estilos.contatoTopo}>
            <a href={`mailto:${EMAIL}`}>E-mail</a>
            <span className={estilos.separador}>·</span>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className={estilos.separador}>·</span>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </header>

        <section className={estilos.secao} id="sobre">
          <h2 className={estilos.tituloSecao}>Sobre mim</h2>
          <p>
            Estudante de Ciência da Computação na UNICAP, com atuação em
            pesquisa científica aplicada à saúde, inteligência artificial e
            desenvolvimento web. Interesse em Ciência de Dados, IA/ML e
            Cibersegurança.
          </p>
          <p className={estilos.tecnologias}>{TECNOLOGIAS.join(" · ")}</p>
        </section>

        <section className={estilos.secao} id="formacao">
          <h2 className={estilos.tituloSecao}>Formação acadêmica</h2>
          <h3 className={estilos.tituloEntrada}>
            Bacharelado em Ciência da Computação
          </h3>
          <p className={estilos.auxiliar}>
            Universidade Católica de Pernambuco (UNICAP) — Recife/PE — em
            andamento
          </p>
        </section>

        <section className={estilos.secao} id="pesquisa">
          <h2 className={estilos.tituloSecao}>Pesquisa científica</h2>
          {PESQUISA.map((item) => (
            <article key={item.titulo} className={estilos.entrada}>
              <h3 className={estilos.tituloEntrada}>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </section>

        <section className={estilos.secao} id="experiencia">
          <h2 className={estilos.tituloSecao}>Experiência e projetos técnicos</h2>
          {EXPERIENCIA.map((item) => (
            <article key={item.titulo} className={estilos.entrada}>
              <h3 className={estilos.tituloEntrada}>{item.titulo}</h3>
              <p>{item.texto}</p>
            </article>
          ))}
        </section>

        <section className={estilos.secao} id="extracurriculares">
          <h2 className={estilos.tituloSecao}>Atividades extracurriculares</h2>
          <ul className={estilos.lista}>
            {EXTRACURRICULARES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={estilos.secao} id="projetos">
          <h2 className={estilos.tituloSecao}>Projetos</h2>
          <div className={estilos.galeria}>
            {PROJETOS.map((projeto) => (
              <article key={projeto.titulo} className={estilos.card}>
                <h3 className={estilos.tituloEntrada}>{projeto.titulo}</h3>
                <p className={estilos.auxiliar}>{projeto.descricao}</p>
                <p className={estilos.tags}>{projeto.tecnologias}</p>
                <p className={estilos.linksCard}>
                  <a
                    href={projeto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no GitHub
                  </a>
                  {projeto.jogo && (
                    <>
                      <span className={estilos.separador}>·</span>
                      <Link href="/forca">Abrir jogo</Link>
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className={estilos.secao} id="contato">
          <h2 className={estilos.tituloSecao}>Contato</h2>
          <p>
            <strong className={estilos.rotulo}>E-mail:</strong>{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>
            <strong className={estilos.rotulo}>GitHub:</strong>{" "}
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              github.com/Gustavo-Henrique-glitch
            </a>
          </p>
          <p>
            <strong className={estilos.rotulo}>LinkedIn:</strong>{" "}
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
        </section>
      </main>

      <footer className={estilos.rodape}>
        © 2026 Gustavo Henrique Mendes Pinheiro — Recife/PE
      </footer>
    </>
  );
}