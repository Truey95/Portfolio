import Image from "next/image";
import Link from "next/link";

import aivrartImg from "../public/assets/projects/aivrart.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "JavaScript",
  "Hyper 3D"
] as const;

// body of text found in project pages
function DictionaryTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      As the sole architect behind Hol Sol Wellness,
       a health-focused e-commerce website, I meticulously crafted a 
       seamless online experience using WordPress and the Divi Builder, 
       integrated immersive 3D visualizations with Hyper3D, and implemented a 
       secure Stripe payment system to ensure a smooth, engaging, and 
       trustworthy shopping journey for wellness enthusiasts.{" "}
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span></span>
      </p>

      <ProjectButtonDemo url="https:holsoulwellness.com" />
    </div>
  );
}

// dictionary page
export default function Dictionary(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={aivrartImg}
        />
        <ProjectHeroText h2="Hol Sol Wellness" h3="Wordpress, Divi, Hyper 3D, Ecwid" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <DictionaryTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
