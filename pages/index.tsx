import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const try = {};

export default function Home() {
  return (
    <>
      <Head>
        <title>Woodfern Floral Design</title>
        <meta name="description" content="Nashville Wedding Flowers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/wood+fern+sticker+purpler+mauve.png" />
      </Head>
      <main>
        <h1 className="text-3xl font-light text-yellow-600">Woodfern</h1>
      </main>
    </>
  );
}
