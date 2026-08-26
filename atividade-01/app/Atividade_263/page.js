import styles from "./page.module.css";

export default function At263() {
  return (
    <>
      <main>
        <h1>Loja de Sapatos</h1>
        <div className={styles.pagina}>
          
          <div className={styles.caixaVerde}>
            <img src="./sapato01.jpg" alt="Imagem de paisagem"></img>
            <p>Tênis Branco</p>
            <p>R$ 300,00</p>
          </div>
          <div className={styles.caixaVerde}>
            <img src="./sapato02.jpg" alt="Imagem de paisagem"></img>
            <p>Tênis Azul</p>
            <p>R$ 380,00</p>
          </div>
          <div className={styles.caixaVerde}>
            <img src="./sapato03.jpg" alt="Imagem de paisagem"></img>
            <p>Tênis de Corrida</p>
            <p>R$ 250,00</p>
          </div>
        </div>
      </main>
      <footer className={styles.rodape}>
        <h2>Loja de sapatos</h2>
      </footer>
    </>
  );
}
