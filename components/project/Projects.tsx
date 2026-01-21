import ProjectItem from "./ProjectItem";

import nhpsImg from "../../public/assets/projects/nhps.png";
import aivrartImg from "../../public/assets/projects/aivrart.png";
import petcoraImg from "../../public/assets/projects/petcora.png";
import swdnnImg from "../../public/assets/projects/swdnn.png";
import legalPresenceImg from "../../public/assets/projects/legal_presence.png";
import albertusImg from "../../public/assets/projects/albertus.png";



// holds all project items in projects with carousel behavior
import { useState, useRef, useEffect } from "react";

const projectData = [
  { img: aivrartImg, url: "/aivrartech", tech: "Next.js", title: "Aivrar" },
  { img: nhpsImg, url: "/nhps", tech: "React", title: "NHPS" },
  { img: swdnnImg, url: "/swdnn", tech: "Static", title: "SWDNN" },
  { img: petcoraImg, url: "/petcoraa", tech: "Typescript", title: "Pet Cora" },
  { img: legalPresenceImg, url: "/legalpresence", tech: "Open Source AI", title: "LegalPresence" },
  { img: albertusImg, url: "/albertus", tech: "AI Education", title: "Albertus AI" },
];

function ProjectsCarousel(): JSX.Element {
  const [scrollX, setScrollX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setHasMoved(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX - scrollX);
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - startX;

    // Bounds check
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.parentElement?.offsetWidth || 0;
      const totalWidth = carouselRef.current.scrollWidth;
      const minScroll = containerWidth - totalWidth;

      if (x > 0) {
        setScrollX(x * 0.2); // Rubber banding
      } else if (x < minScroll) {
        setScrollX(minScroll + (x - minScroll) * 0.2);
      } else {
        setScrollX(x);
      }
    }

    if (Math.abs(clientX - (startX + scrollX)) > 5) {
      setHasMoved(true);
    }
  };

  const onDragEnd = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.parentElement?.offsetWidth || 0;
      const totalWidth = carouselRef.current.scrollWidth;
      const minScroll = Math.min(0, containerWidth - totalWidth - 100);

      if (scrollX > 0) {
        setScrollX(0);
      } else if (scrollX < minScroll) {
        setScrollX(minScroll);
      }
    }
  };

  // Prevent default link behavior if dragging
  const handleItemClick = (e: React.MouseEvent) => {
    if (hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="relative overflow-hidden py-10 cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <div
        ref={carouselRef}
        className="flex gap-8 transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `translateX(${scrollX}px)`, transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
      >
        {projectData.map((project, i) => (
          <div key={i} onClickCapture={handleItemClick}>
            <ProjectItem
              backgroundImg={project.img}
              projectUrl={project.url}
              tech={project.tech}
              title={project.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// projects component
export default function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[100vw] mx-auto px-4 py-8 overflow-hidden w-full">
        <p className="text-xl tracking-widest uppercase text-white text-center xl:text-start lg:pt-4">
          Projects
        </p>
        <h2 className="py-2 text-center xl:text-start border-b border-white/5 mb-4">
          Featured Developments
        </h2>
        <ProjectsCarousel />
      </div>
    </div>
  );
}
