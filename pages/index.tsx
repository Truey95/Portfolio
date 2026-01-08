import Head from "next/head";
import { Inter } from "@next/font/google";

import About from "../components/About";
import Contact from "../components/contacts/Contact";
import Hero from "../components/heros/Hero";
import Projects from "../components/project/Projects";
import Skills from "../components/skill/Skills";
import HandScroll from "../components/HandScroll";

const inter = Inter({ subsets: ["latin"] });

// home page
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/redcitylogo.png" />
        <meta
          name="description"
          content="My Developer Portfolio site, Trevor Smith
          "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Trevor Smith Portfolio</title>
      </Head>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <HandScroll />
    </>
  );
}
