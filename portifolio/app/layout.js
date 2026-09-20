import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo Henrique Mendes Pinheiro — Currículo e Portfólio",
  description:
    "Currículo e portfólio de Gustavo Henrique Mendes Pinheiro, estudante de Ciência da Computação na UNICAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}