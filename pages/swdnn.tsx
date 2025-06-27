import Image from "next/image";
import Link from "next/link";

import swdnnImg from "../public/assets/projects/swdnn.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "",
  "",
  ""
] as const;

// body of text found in project pages
function LandingPageTextBody() {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        Clothing Ecomm website for members of Kappa Alpha Psi organization.
        Tech Stack: Frontend:

React with TypeScript - Main website framework
Tailwind CSS - Styling and design
Vite - Fast development tool
Backend:

Node.js with Express - Server handling requests
PostgreSQL - Database for storing data
Drizzle - Database management
Key Integrations:

Printify API - Handles printing and shipping orders
OpenAI API - Powers the virtual try-on feature
Shopify API - Additional e-commerce features {" "}
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
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          
        </Link>
      </p>

      <ProjectButtonDemo url="https://www.shewitdanupes.com" />
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
          src={swdnnImg}
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
