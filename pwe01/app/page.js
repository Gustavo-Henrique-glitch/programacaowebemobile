import styles from "./page.module.css";
 
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
          <h1>
            Aula de Programação Web e Mobile PWE01
          </h1>
          <br />
          <img src ="images.jpeg" width ="300" height="200"></img>
          <br />
          <p><b>Lorem</b> Ipsum é simplesmente uma simulação de texto da indústria <i>tipográfica</i> e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
          <br />
          <hr />
          <p>Lorem <strong>Ipsum</strong> é simplesmente uma simulação de texto da <em>indústria</em> tipográfica e de impressos, e vem sendo utilizado desde o <u></u>, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>
          <br />
          <table border ="1">
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
     
      </main>
    </div>
  );
}
 