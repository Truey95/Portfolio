import ProjectItem from "./ProjectItem";


import nhpsImg from "../../public/assets/projects/nhps.png";
import aivrarImg from "../../public/assets/projects/aivrar.png";
import petcoraImg from "../../public/assets/projects/petcora.png";
import swdnnImg from "../../public/assets/projects/swdnn.png";




// holds all project items in projects
function ProjectsContainer(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <ProjectItem
        backgroundImg={aivrarImg}
        projectUrl="/aivrar"
        tech="React, Typescript, PHP"
        title="Aivrar"
      />

      <ProjectItem
        backgroundImg={nhpsImg}
        projectUrl="/nhps"
        tech="Divi Builder, Wordpress, Cpanel, Ecwid"
        title="New Haven Phlebotomy School"
      />

      <ProjectItem
        backgroundImg={swdnnImg}
        projectUrl="/swdnn"
        tech="Wordpress, Divi, Elementor, Revslider, Cpanel"
        title="She Wit Da Nupes Now"
      />

      <ProjectItem
        backgroundImg={petcoraImg}
        projectUrl="/Starloworld"
        tech="NodeJS, Tailwind, PHP, Javascript"
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
