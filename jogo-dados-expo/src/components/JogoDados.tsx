import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Dado from "./Dado";

const TOTAL_RODADAS = 5;

function sortear() {
  return Math.floor(Math.random() * 6) + 1;
}

type BotaoProps = {
  titulo: string;
  onPress: () => void;
  desabilitado?: boolean;
};

function Botao({ titulo, onPress, desabilitado = false }: BotaoProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={desabilitado}
      style={({ pressed }) => [
        styles.botao,
        desabilitado && styles.botaoDesabilitado,
        pressed && !desabilitado && styles.botaoPressionado,
      ]}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </Pressable>
  );
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

  function calcularResultado(dados1: number[], dados2: number[]) {
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
      <View style={styles.container}>
        <Text style={styles.titulo}>Fim de jogo!</Text>
        <Text style={styles.resultadoFinal}>{resultadoFinal()}</Text>
        <Text style={styles.placar}>
          Placar: Jogador 1 ({vitoriasJogador1}) x Jogador 2 ({vitoriasJogador2})
        </Text>
        <Botao titulo="Jogar Novamente" onPress={jogarNovamente} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Rodada {rodada} de {TOTAL_RODADAS}
      </Text>

      <View style={styles.jogadores}>
        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 1</Text>
          <View style={styles.dados}>
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </View>
          <Botao
            titulo="Jogar"
            onPress={jogarJogador1}
            desabilitado={jogadorDaVez !== 1 || rodadaTerminou}
          />
        </View>

        <View style={styles.jogador}>
          <Text style={styles.nomeJogador}>Jogador 2</Text>
          <View style={styles.dados}>
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </View>
          <Botao
            titulo="Jogar"
            onPress={jogarJogador2}
            desabilitado={jogadorDaVez !== 2 || rodadaTerminou}
          />
        </View>
      </View>

      {resultadoRodada !== "" && (
        <Text style={styles.resultado}>{resultadoRodada}</Text>
      )}

      {rodadaTerminou && rodada < TOTAL_RODADAS && (
        <Botao titulo="Próxima Rodada" onPress={proximaRodada} />
      )}

      {rodadaTerminou && rodada === TOTAL_RODADAS && (
        <Botao titulo="Ver Resultado Final" onPress={() => setJogoAcabou(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
  },
  jogadores: {
    flexDirection: "row",
    gap: 24,
  },
  jogador: {
    alignItems: "center",
    gap: 10,
  },
  nomeJogador: {
    fontSize: 20,
    fontWeight: "600",
  },
  dados: {
    flexDirection: "row",
    gap: 8,
  },
  resultado: {
    fontSize: 18,
    fontWeight: "600",
  },
  resultadoFinal: {
    fontSize: 22,
    fontWeight: "bold",
  },
  placar: {
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botaoDesabilitado: {
    backgroundColor: "#9ca3af",
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
