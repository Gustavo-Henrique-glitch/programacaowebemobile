"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import estilos from "./page.module.css";

const PALAVRAS = [
  "ALGORITMO",
  "VARIAVEL",
  "FUNCAO",
  "OBJETO",
  "CLASSE",
  "METODO",
  "HERANCA",
  "VETOR",
  "MATRIZ",
  "RECURSAO",
  "COMPILADOR",
  "DEPURACAO",
  "SERVIDOR",
  "CLIENTE",
  "REQUISICAO",
  "PROTOCOLO",
  "PACOTE",
  "ROTEADOR",
  "SOCKET",
  "CRIPTOGRAFIA",
  "BIOMETRIA",
  "FIREWALL",
  "CONSULTA",
  "INDICE",
  "CHAVE",
  "TABELA",
  "PYTHON",
  "JAVASCRIPT",
  "REACT",
  "COMPONENTE",
  "ESTADO",
  "RENDERIZACAO",
  "REPOSITORIO",
  "COMMIT",
  "INTERFACE",
  "NEURONIO",
  "TREINAMENTO",
  "ACURACIA",
  "HARDWARE",
  "MEMORIA",
];

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LINHAS_TECLADO = [
  ALFABETO.slice(0, 9),
  ALFABETO.slice(9, 18),
  ALFABETO.slice(18),
];
const MAX_ERROS = 6;

function sortearPalavra(atual) {
  let nova = atual;
  while (nova === atual) {
    nova = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
  }
  return nova;
}

export default function JogoDaForca() {
  const [palavra, setPalavra] = useState("");
  const [corretas, setCorretas] = useState([]);
  const [erradas, setErradas] = useState([]);

 
  useEffect(() => {
    setPalavra(sortearPalavra(""));
  }, []);

  const venceu =
    palavra !== "" &&
    palavra.split("").every((letra) => corretas.includes(letra));
  const perdeu = erradas.length >= MAX_ERROS;
  const fimDeJogo = venceu || perdeu;

  const tentarLetra = useCallback(
    (letra) => {
      if (palavra === "" || fimDeJogo) return;
      if (corretas.includes(letra) || erradas.includes(letra)) return;

      if (palavra.includes(letra)) {
        setCorretas((anteriores) => [...anteriores, letra]);
      } else {
        setErradas((anteriores) => [...anteriores, letra]);
      }
    },
    [palavra, corretas, erradas, fimDeJogo]
  );

  useEffect(() => {
    function aoPressionar(evento) {
      const tecla = evento.key.toUpperCase();
      if (/^[A-Z]$/.test(tecla)) {
        tentarLetra(tecla);
      }
    }
    window.addEventListener("keydown", aoPressionar);
    return () => window.removeEventListener("keydown", aoPressionar);
  }, [tentarLetra]);

  function reiniciar() {
    setPalavra((atual) => sortearPalavra(atual));
    setCorretas([]);
    setErradas([]);
  }

  function estadoDaTecla(letra) {
    if (corretas.includes(letra)) return estilos.teclaCerta;
    if (erradas.includes(letra)) return estilos.teclaErrada;
    return estilos.tecla;
  }

  const erros = erradas.length;

  return (
    <>
      <Header />

      <main className={estilos.pagina}>
        <h1 className={estilos.titulo}>Jogo da Forca</h1>
        <p className={estilos.subtitulo}>
          Adivinhe a palavra secreta relacionada a tecnologia e programação.
        </p>

        <div className={estilos.tabuleiro}>
          <div className={estilos.colunaForca}>
            <svg
              viewBox="0 0 220 250"
              className={estilos.desenho}
              role="img"
              aria-label={`Forca com ${erros} de ${MAX_ERROS} erros`}
            >
              <line x1="20" y1="230" x2="160" y2="230" />
              <line x1="60" y1="230" x2="60" y2="25" />
              <line x1="60" y1="25" x2="165" y2="25" />
              <line x1="60" y1="65" x2="100" y2="25" />
              <line x1="165" y1="25" x2="165" y2="55" />

              {erros > 0 && <circle cx="165" cy="72" r="17" />}
              {erros > 1 && <line x1="165" y1="89" x2="165" y2="148" />}
              {erros > 2 && <line x1="165" y1="105" x2="140" y2="128" />}
              {erros > 3 && <line x1="165" y1="105" x2="190" y2="128" />}
              {erros > 4 && <line x1="165" y1="148" x2="142" y2="192" />}
              {erros > 5 && <line x1="165" y1="148" x2="188" y2="192" />}
            </svg>
          </div>

          <div className={estilos.colunaInfo}>
            <p>
              Tentativas restantes: {MAX_ERROS - erros} de {MAX_ERROS}
            </p>

            <div className={estilos.palavra}>
              {palavra.split("").map((letra, indice) => (
                <span key={indice} className={estilos.espaco}>
                  {corretas.includes(letra) || perdeu ? letra : ""}
                </span>
              ))}
            </div>

            <p className={estilos.registro}>
              Letras corretas:{" "}
              <span className={estilos.acertos}>
                {corretas.length > 0 ? corretas.join(" ") : "—"}
              </span>
            </p>
            <p className={estilos.registro}>
              Letras erradas:{" "}
              <span className={estilos.erros}>
                {erradas.length > 0 ? erradas.join(" ") : "—"}
              </span>
            </p>
          </div>
        </div>

        {venceu && (
          <p className={estilos.avisoVitoria} role="status">
            Você acertou! A palavra era {palavra}.
          </p>
        )}

        {perdeu && (
          <p className={estilos.avisoDerrota} role="status">
            Fim de jogo. A palavra era {palavra}.
          </p>
        )}

        <div className={estilos.teclado}>
          {LINHAS_TECLADO.map((linha, indice) => (
            <div key={indice} className={estilos.linhaTeclado}>
              {linha.map((letra) => (
                <button
                  key={letra}
                  type="button"
                  className={estadoDaTecla(letra)}
                  onClick={() => tentarLetra(letra)}
                  disabled={
                    fimDeJogo ||
                    corretas.includes(letra) ||
                    erradas.includes(letra)
                  }
                >
                  {letra}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className={estilos.areaBotao}>
          <button type="button" className={estilos.botao} onClick={reiniciar}>
            Reiniciar jogo
          </button>
        </div>
      </main>

      <footer className={estilos.rodape}>
        © 2026 Gustavo Henrique Mendes Pinheiro — Recife/PE
      </footer>
    </>
  );
}