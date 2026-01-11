import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { gsap } from "gsap";

import About from "../components/About";
import Contact from "../components/contacts/Contact";
import Hero from "../components/heros/Hero";
import Projects from "../components/project/Projects";
import Skills from "../components/skill/Skills";
import Photos from "../components/Photos";
import SandBackground from "../components/SandBackground";

const inter = Inter({ subsets: ["latin"] });

const SECTIONS = [
  { id: "hero", component: Hero },
  { id: "projects", component: Projects },
  { id: "photos", component: Photos },
  { id: "about", component: About },
  { id: "skills", component: Skills },
  { id: "contact", component: Contact },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initial hidden state for all except first
    sectionRefs.current.forEach((ref, i) => {
      if (ref && i !== 0) {
        gsap.set(ref, { opacity: 0, scale: 0.95, pointerEvents: "none", filter: "blur(10px)" });
      }
    });
  }, []);

  const goToSection = (nextIndex: number) => {
    if (isTransitioning || nextIndex < 0 || nextIndex >= SECTIONS.length) return;

    setIsTransitioning(true);
    const prevIndex = index;
    const outgoing = sectionRefs.current[prevIndex];
    const incoming = sectionRefs.current[nextIndex];

    if (outgoing && incoming) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsTransitioning(false);
          setIndex(nextIndex);
        }
      });

      // Recede outgoing
      tl.to(outgoing, {
        opacity: 0,
        scale: 1.15,
        filter: "blur(40px)",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: () => {
          gsap.set(outgoing, { pointerEvents: "none" });
        }
      });

      // Fade in incoming
      tl.fromTo(incoming,
        {
          opacity: 0,
          scale: 0.85,
          filter: "blur(40px)",
          pointerEvents: "none"
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "expo.out",
          pointerEvents: "auto"
        },
        "-=1.2"
      );
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          goToSection(index + 1);
        } else {
          goToSection(index - 1);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSection(index + 1);
        } else {
          goToSection(index - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Hash navigation integration
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const targetIdx = SECTIONS.findIndex((s) => s.id === hash);
      if (targetIdx !== -1 && targetIdx !== index) {
        goToSection(targetIdx);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Handle initial hash on load
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [index, isTransitioning]);

  return (
    <div className="relative bg-sand-black text-gray-200 h-screen w-screen overflow-hidden">
      <Head>
        <link rel="icon" href="/redcitylogo.png" />
        <meta
          name="description"
          content="Ricky Rollins Portfolio | Creative Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ricky Rollins | Portfolio</title>
      </Head>

      <SandBackground />

      <main className="relative z-10 w-full h-full">
        {SECTIONS.map((section, i) => {
          const Component = section.component;
          return (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
              style={{ zIndex: SECTIONS.length - i }}
            >
              <div className="w-full max-h-full overflow-y-auto px-4 py-8 pointer-events-auto">
                <Component />
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
