import ProjectItem from "./ProjectItem";

import nhpsImg from "../../public/assets/projects/nhps.png";
import aivrartImg from "../../public/assets/projects/aivrart.png";
import petcoraImg from "../../public/assets/projects/petcora.png";
import swdnnImg from "../../public/assets/projects/swdnn.png";



// holds all project items in projects
function ProjectsContainer(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      
      <ProjectItem
        backgroundImg={aivrartImg}
        projectUrl="/aivrartech"
        tech=""
        title="Aivrar"
      />

      <ProjectItem
        backgroundImg={nhpsImg}
        projectUrl="/nhps"
        tech=""
        title="New Haven Phlebotomy School"
      />

      <ProjectItem
        backgroundImg={swdnnImg}
        projectUrl="/swdnn"
        tech=""
        title="She Wit Da Nupes Now"
      />

      <ProjectItem
        backgroundImg={petcoraImg}
        projectUrl="/petcoraa"
        tech=""
        title="Pet Cora"
      />
      


    </div>
  );
}

// projects component
export default function Projects(): JSX.Element {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-7xl mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-indigo-600 text-center xl:text-start pt-12 lg:pt-64">
          Projects
        </p>
        <h2 className="py-4 text-center xl:text-start">
          Projects I loved Developing
        </h2>
        <ProjectsContainer />
      </div>
    </div>
  );
}
