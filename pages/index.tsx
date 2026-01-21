import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { gsap } from "gsap";

import About from "../components/About";
import Journey from "../components/Journey";
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
  { id: "journey", component: Journey },
  { id: "about", component: About },
  { id: "skills", component: Skills },
  { id: "contact", component: Contact },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
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
          // Sync URL hash with current section
          if (window.location.hash !== `#${SECTIONS[nextIndex].id}`) {
            window.history.replaceState(null, "", `#${SECTIONS[nextIndex].id}`);
          }
        }
      });

      // Recede outgoing
      tl.to(outgoing, {
        opacity: 0,
        scale: 1.15,
        filter: "blur(40px)",
        duration: 0.8,
        ease: "power4.inOut",
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
          duration: 1.0,
          ease: "power4.out",
          pointerEvents: "auto"
        },
        "-=0.6"
      );
    }
  };

  const lastTriggerRef = useRef(0);
  const cooldown = 1000; // ms

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastTriggerRef.current < cooldown) return;

      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          goToSection(index + 1);
        } else {
          goToSection(index - 1);
        }
        lastTriggerRef.current = now;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTriggerRef.current < cooldown) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 30) {
        if (diff > 0) {
          goToSection(index + 1);
        } else {
          goToSection(index - 1);
        }
        lastTriggerRef.current = now;
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Hash navigation integration via useRouter
    const handleHashSync = () => {
      const hash = router.asPath.split('#')[1] || "hero";
      const targetIdx = SECTIONS.findIndex((s) => s.id === hash);
      if (targetIdx !== -1 && targetIdx !== index) {
        goToSection(targetIdx);
      }
    };

    handleHashSync();

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [index, isTransitioning, router.asPath, goToSection]);

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
              className="absolute inset-0 w-full h-full flex items-start justify-center overflow-y-auto"
              style={{
                zIndex: SECTIONS.length - i,
                pointerEvents: i === index ? "auto" : "none"
              }}
            >
              <div className="w-full min-h-full flex flex-col items-center justify-center py-12 md:py-20 px-4">
                <Component />
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
