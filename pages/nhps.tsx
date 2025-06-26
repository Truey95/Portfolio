import Image from "next/image";
import Link from "next/link";

import nhpsImg from "../public/assets/projects/nhps.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "Frontend - React 18 with TypeScript - Vite for build tooling and development server - Tailwind CSS for styling with custom theme support - Radix UI components for accessible UI primitives - Wouter for client-side routing - TanStack Query for server state management - React Hook Form with Zod validation - Framer Motion for animations - Lucide React for icons ",
  "",
  
] as const;

// body of text found in project pages
function WeatherTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      Ai powered phlebotomy school, each user account has ai agents catered towards their learning style . {" "}
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
      
      <ProjectButtonDemo url="https://newhavenphlebotomy.com" />
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
          src={nhpsImg}
        />
        <ProjectHeroText
          h2="New Haven phlebotomy School"
          h3="Wordpress, Divi"
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
