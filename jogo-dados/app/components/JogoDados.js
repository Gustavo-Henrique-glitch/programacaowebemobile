"use client";

import { useState } from "react";
import Dado from "./Dado";

const TOTAL_RODADAS = 5;

function sortear() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [dadosJogador1, setDadosJogador1] = useState([1, 1]);
  const [dadosJogador2, setDadosJogador2] = useState([1, 1]);
  const [jogadorDaVez, setJogadorDaVez] = useState(1);
  const [resultadoRodada, setResultadoRodada] = useState("");
  const [rodadaTerminou, setRodadaTerminou] = useState(false);
  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);
  const [jogoAcabou, setJogoAcabou] = useState(false);

  function jogarJogador1() {
    const novosDados = [sortear(), sortear()];
    setDadosJogador1(novosDados);
    setJogadorDaVez(2);
  }

  function jogarJogador2() {
    const novosDados = [sortear(), sortear()];
    setDadosJogador2(novosDados);
    calcularResultado(dadosJogador1, novosDados);
  }

  function calcularResultado(dados1, dados2) {
    const soma1 = dados1[0] + dados1[1];
    const soma2 = dados2[0] + dados2[1];

    if (soma1 > soma2) {
      setResultadoRodada("Jogador 1 venceu a rodada!");
      setVitoriasJogador1((v) => v + 1);
    } else if (soma2 > soma1) {
      setResultadoRodada("Jogador 2 venceu a rodada!");
      setVitoriasJogador2((v) => v + 1);
    } else {
      setResultadoRodada("Empate na rodada!");
    }

    setRodadaTerminou(true);
  }

  function proximaRodada() {
    setRodada((r) => r + 1);
    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);
    setJogadorDaVez(1);
    setResultadoRodada("");
    setRodadaTerminou(false);
  }

  function jogarNovamente() {
    setRodada(1);
    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);
    setJogadorDaVez(1);
    setResultadoRodada("");
    setRodadaTerminou(false);
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setJogoAcabou(false);
  }

  function resultadoFinal() {
    if (vitoriasJogador1 > vitoriasJogador2) return "Jogador 1 venceu o jogo!";
    if (vitoriasJogador2 > vitoriasJogador1) return "Jogador 2 venceu o jogo!";
    return "O jogo terminou empatado!";
  }

  if (jogoAcabou) {
    return (
      <div>
        <h1>Fim de jogo!</h1>
        <p>{resultadoFinal()}</p>
        <p>
          Placar: Jogador 1 ({vitoriasJogador1}) x Jogador 2 ({vitoriasJogador2})
        </p>
        <button onClick={jogarNovamente}>Jogar Novamente</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Rodada {rodada} de {TOTAL_RODADAS}</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <div>
          <h2>Jogador 1</h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>
          <button
            onClick={jogarJogador1}
            disabled={jogadorDaVez !== 1 || rodadaTerminou}
          >
            Jogar
          </button>
        </div>

        <div>
          <h2>Jogador 2</h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>
          <button
            onClick={jogarJogador2}
            disabled={jogadorDaVez !== 2 || rodadaTerminou}
          >
            Jogar
          </button>
        </div>
      </div>

      {resultadoRodada && <p>{resultadoRodada}</p>}

      {rodadaTerminou && rodada < TOTAL_RODADAS && (
        <button onClick={proximaRodada}>Próxima Rodada</button>
      )}

      {rodadaTerminou && rodada === TOTAL_RODADAS && (
        <button onClick={() => setJogoAcabou(true)}>Ver Resultado Final</button>
      )}
    </div>
  );
}