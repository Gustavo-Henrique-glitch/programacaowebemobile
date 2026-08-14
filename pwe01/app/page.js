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
            <p><a href="https://react.dev/" target="_blank"> React</a></p>
            <p><a href="https://nextjs.org/" target="_blank"> NextJS</a></p>
            <p><a href="https://github.com/marciobueno1/pwm-2026-2" target="_blank"></a></p>
          </h3>
          <h2> Slides HTML CSS JS</h2>
          <h3>  
            <p><a href="https://christianosantos.com.br/files/cs1/construcao-de-sites-1.12.pdf" target="_blank"> Slide 1</a></p> 
            <p><a href="https://christianosantos.com.br/files/cs2/construcao-de-sites-2.10.pdf" target="_blank"> Slide 2</a></p>
          </h3>
         
      </main>
    </div>
  );
}
 