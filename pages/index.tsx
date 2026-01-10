import Head from "next/head";
import { Inter } from "@next/font/google";

import About from "../components/About";
import Contact from "../components/contacts/Contact";
import Hero from "../components/heros/Hero";
import Projects from "../components/project/Projects";
import Skills from "../components/skill/Skills";
import Photos from "../components/Photos";
import HandScroll from "../components/HandScroll";
import { MainExperience } from "../components/scene/MainExperience";

const inter = Inter({ subsets: ["latin"] });

// home page
export default function Home() {
  return (
    <div className="relative bg-sand-black text-gray-200">
      <Head>
        <link rel="icon" href="/redcitylogo.png" />
        <meta
          name="description"
          content="My Developer Portfolio site, Trevor Smith"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Trevor Smith | Portfolio</title>
      </Head>

      <MainExperience />

      <main className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Hero />
          <Projects />
          <Photos />
          <About />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  );
}
