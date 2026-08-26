import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Olá mundo!</h1>
      <p>Meu primeiro projeto com React e Next.js.</p>
      <h4>Links para paginas de atividades:</h4>
      <Link href="/Atividade_210">Atividade (pag:210)</Link><br/>
      <Link href="/Atividade_231">Atividade (pag: 231)</Link><br/>
      <Link href="/Atividade_246">Atividade (pag:246)</Link><br/>
      <Link href="/Atividade_263">Atividade  (pag: 263)</Link>
    </main>
  );
}