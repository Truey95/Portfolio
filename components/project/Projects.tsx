import ProjectItem from "./ProjectItem";

import nhpsImg from "../../public/assets/projects/nhps.png";
import aivrartImg from "../../public/assets/projects/aivrart.png";
import petcoraImg from "../../public/assets/projects/petcora.png";
import swdnnImg from "../../public/assets/projects/swdnn.png";



// holds all project items in projects with carousel behavior
function ProjectsCarousel(): JSX.Element {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="flex gap-8 animate-carousel-move hover:pause-animation">
        {/* Repeating the list to ensure smooth infinite loop */}
        {[1, 2].map((loop) => (
          <div key={loop} className="flex gap-8 min-w-full">
            <ProjectItem
              backgroundImg={aivrartImg}
              projectUrl="/aivrartech"
              tech="Next.js"
              title="Aivrar"
            />
            <ProjectItem
              backgroundImg={nhpsImg}
              projectUrl="/nhps"
              tech="React"
              title="NHPS"
            />
            <ProjectItem
              backgroundImg={swdnnImg}
              projectUrl="/swdnn"
              tech="Static"
              title="SWDNN"
            />
            <ProjectItem
              backgroundImg={petcoraImg}
              projectUrl="/petcoraa"
              tech="Typescript"
              title="Pet Cora"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes carouselScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel-move {
          display: flex;
          width: fit-content;
          animation: carouselScroll 40s linear infinite;
        }
        .hover\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// projects component
export default function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[100vw] mx-auto px-4 py-8 overflow-hidden">
        <p className="text-xl tracking-widest uppercase text-gray-500 text-center xl:text-start pt-4 lg:pt-8">
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
