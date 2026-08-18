import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Aula de Programação Web e Mobile PWE01</h1>
        <br />
        <h2>Aula 01</h2>
        <br />
        <h2>Links Úteis</h2>
        <h3>
          <p>
            <a href="https://react.dev/" target="_blank">
              {" "}
              <u>React</u>
            </a>
          </p>
          <p>
            <a href="https://nextjs.org/" target="_blank">
              {" "}
              <u>NextJS</u>
            </a>
          </p>
          <p>
            <a
              href="https://github.com/marciobueno1/pwm-2026-2"
              target="_blank"
            >
              {" "}
              <u>git hub de PWE</u>{" "}
            </a>
          </p>
        </h3>
        <br />
        <h2> Slides HTML CSS JS</h2>
        <h3>
          <p>
            <a
              href="https://christianosantos.com.br/files/cs1/construcao-de-sites-1.12.pdf"
              target="_blank"
            >
              {" "}
              <u>Slide 1</u>
            </a>
          </p>
          <p>
            <a
              href="https://christianosantos.com.br/files/cs2/construcao-de-sites-2.10.pdf"
              target="_blank"
            >
              {" "}
              <u>Slide 2</u>
            </a>
          </p>
        </h3>

        <br />
        <h2>Aula 02</h2>
        <br />
        <img src="images.jpeg" width="300" height="200"></img>
        <br />
        <p>
          <b>Lorem</b> Ipsum é simplesmente uma simulação de texto da indústria{" "}
          <i>tipográfica</i> e de impressos, e vem sendo utilizado desde o
          século XVI, quando um impressor desconhecido pegou uma bandeja de
          tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem
          Ipsum sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado.Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker.
        </p>
        <br />
        <hr />
        <p>
          Lorem <strong>Ipsum</strong> é simplesmente uma simulação de texto da{" "}
          <em>indústria</em> tipográfica e de impressos, e vem sendo utilizado
          desde o <u>Lorem</u>, quando um impressor desconhecido pegou uma
          bandeja de tipos e os embaralhou para fazer um livro de modelos de
          tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao
          salto para a editoração eletrônica, permanecendo essencialmente
          inalterado.
        </p>
        <br />
        <table border="1">
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gustavo</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        <br />
        <form action="buscar.jps" method="POST">
          <fieldset>
            <legend>Informações do Aluno</legend>
            <label id="nome"> Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite o nome"
              required
            ></input>
            <br />
            <label id="email"> Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
            ></input>
            <br />
            <select name="Cursos">
              <option value="Ciência da computação">
                Ciência da computação
              </option>
              <option value="Administração">Administração</option>
              <option value="Medicina">Medicina</option>
            </select>
            <br />
            <input type="radio" name="genero" value="homem" /> Homem
            <input type="radio" name="genero" value="mulher" /> Mulher
            <input type="radio" name="genero" value="outro" /> Prefiro não
            informar
            <br />
            <input type="submit" value="enviar"></input>
            
          </fieldset>
        </form>
      </main>
    </div>
  );
}
