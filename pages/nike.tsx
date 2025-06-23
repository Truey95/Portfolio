import Image from "next/image";

import nikemockupImg from "../public/assets/projects/nikemockup.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = ["JavaScript", "Wordpress", "Divi", "Hyper3D"];

// body of text found in project pages
function OpenAiTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      Delve into the storied past of the Jordan sneaker on our WordPress site,
       featuring a vivid, interactive 3D model that you can spin and explore, 
       all seamlessly integrated using the Divi Builder.
      </p>

     
      <ProjectButtonDemo url="https://trevors.tsiacademy.org/capstone/week1/WordPress-master/" />
    </div>
  );
}

// open ai page
export default function OpenAi(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={nikemockupImg}
        />
        <ProjectHeroText
          h2="Nike Jordan Mock Up"
          h3="Wordpress, Hyper3D, JavaScript, Divi"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <OpenAiTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
