import ProjectItem from "./ProjectItem";

import holsolwellcoverImg from "../../public/assets/projects/holsolwellcover.png";
import uvmgallerycoverImg from "../../public/assets/projects/uvmgallerycover.png";
import passhubcoverImg from "../../public/assets/projects/passhubcover.png";
import StarlocoverImg from "../../public/assets/projects/Starlocover.png";
import chattykenportfileImg from "../../public/assets/projects/chattykenportfile.png";
import AmistadcityImg from "../../public/assets/projects/Amistadcity.png";
import nikemockupImg from "../../public/assets/projects/nikemockup.png";
import tlogogogoImg from "../../public/assets/projects/tlogogogo.jpg";



// holds all project items in projects
function ProjectsContainer(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <ProjectItem
        backgroundImg={passhubcoverImg}
        projectUrl="/passhub"
        tech="React, Typescript, PHP"
        title="PassHub"
      />

      <ProjectItem
        backgroundImg={holsolwellcoverImg}
        projectUrl="/holsolwell"
        tech="Ecwid, Wordpress, Divi, Hyper 3D"
        title="Hol Soul Wellness"
      />

<ProjectItem
        backgroundImg={nikemockupImg}
        projectUrl="/Nikejordan"
        tech="Wordpress, Divi, Hyper3D"
        title="Nike Jordan Mock Up"
      />

      <ProjectItem
        backgroundImg={uvmgallerycoverImg}
        projectUrl="/Upscalevisionmedia"
        tech="Divi Builder, Wordpress, Cpanel, Ecwid"
        title="Upscale Vision Media"
      />

      <ProjectItem
        backgroundImg={AmistadcityImg}
        projectUrl="/Amistadcity"
        tech="Wordpress, Divi, Elementor, Revslider, Cpanel"
        title="Amistad City Festival"
      />

      <ProjectItem
        backgroundImg={StarlocoverImg}
        projectUrl="/Starloworld"
        tech="NodeJS, Tailwind, PHP, Javascript"
        title="Starlo Music & Video Streaming"
      />

<ProjectItem
        backgroundImg={tlogogogoImg}
        projectUrl="/Tasar"
        tech="NodeJS, Tailwind, PHP, Javascript"
        title="3D Ecomm Platform"
      />
      
      <ProjectItem
        backgroundImg={chattykenportfileImg}
        projectUrl="Chattyken"
        tech="OpenAI, Typescript, Javascript, PHP"
        title="Chatty Ken AI"
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
