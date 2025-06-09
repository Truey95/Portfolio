import Image from "next/image";
import Link from "next/link";

import AmistadcityImg from "../public/assets/projects/Amistadcity.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "JavaScript",
  "Rev Slider",
  "Wordpress"
] as const;

// body of text found in project pages
function LandingPageTextBody() {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        I used UX/UI experience to build this festival website with various technologies and frameworks. SpaceX landing page was
        made with{" "}
        <Link
          href="https://milliorn.github.io/SpaceX-Website/"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span>
          s{" "}
        </span>
        <Link
          href="https://github.com/Truey95"
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          
        </Link>
      </p>

      <ProjectButtonDemo url="https://www.amistadcity.com" />
    </div>
  );
}

// projects landing page
export default function LandingPage(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={AmistadcityImg}
        />
        <ProjectHeroText h2="Amistad City" h3="React, Tailwind CSS, Rev Slider, Wordpress" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <LandingPageTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
