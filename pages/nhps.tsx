import Image from "next/image";
import Link from "next/link";

import uvmgallerycoverImg from "../public/assets/projects/uvmgallerycover.png";

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
      Upscale Vision Media, a sophisticated media marketing portal, 
      utilizing the intuitive WordPress ecosystem, and infused it with the 
      elegance of the Divi theme. To streamline e-commerce functionality, 
      I adeptly linked Ecwid for product management and integrated Stripe for 
      secure payment processing, creating a harmonious 
      online shopping environment. {" "}
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
      
      <ProjectButtonDemo url="https://upscalevisionmedia.org" />
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
          src={uvmgallerycoverImg}
        />
        <ProjectHeroText
          h2="Upscale Vision Media"
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
