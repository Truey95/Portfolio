import Image from "next/image";
import Link from "next/link";

import tlogogogoImg from "../public/assets/projects/tlogogogo.jpg";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "",
  "",
  
] as const;

// body of text found in project pages
function WeatherTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      Tasar is the frist Ecmm platform that allows daily smart phone users to upload their own items and sell from an augmented reality environment. {" "}
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span>
          {" "}
        </span>
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span>
          
        </span>
      </p>
      
      <ProjectButtonDemo url="https://Tasars.com" />
    </div>
  );
}

// weather page
export default function Weather(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={tlogogogoImg}
        />
        <ProjectHeroText
          h2="Tasar"
          h3="PHP,Javascript, React"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <WeatherTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
