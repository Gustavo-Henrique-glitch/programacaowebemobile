import styles from "./page.module.css";
 
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
          <h1>
            Aula de Programação Web e Mobile PWE01
          </h1>
          <h2>Links Úteis</h2>
          <h3>
            <ul>
            <l1><a href="https://react.dev/" target="_blank"> React</a></l1>
            <l1><a href="https://nextjs.org/" target="_blank"> NextJS</a></l1>
            <l1><a href="https://github.com/marciobueno1/pwm-2026-2" target="_blank"></a></l1>

            </ul>
          </h3>
          <h2> Slides HTML CSS JS</h2>
          <h3>
            <ul>
              <l1>
                <a href="https://christianosantos.com.br/files/cs1/construcao-de-sites-1.12.pdf" target="_blank"> Slide 1</a>
              </l1>
              <l1> 
                <a href="https://christianosantos.com.br/files/cs2/construcao-de-sites-2.10.pdf" target="_blank"> Slide 2</a>
              </l1>

            </ul>
          </h3>
         
      </main>
    </div>
  );
}
 