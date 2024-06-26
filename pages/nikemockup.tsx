import Image from "next/image";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

import nikemockupImg from "../public/assets/projects/nikemockup.png";

const techStack = [
  "GatsbyJs",
  "GatsbyCloud",
  "GraphQL",
  "Contentful CMS",
  "React-Helmet",
  "Slugify",
] as const;

// body of text found in project pages
function RecipeTextBody() {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        GatsbyJS was the first static site generator I used to build websites.
        This is my favorite since it contains cooking recipes I personally use.
        I like to cook and needed a way to keep up with recipes I enjoyed
        making. Pages are generated with the help of Contentful CMS and GraphQL.
      </p>

      <ProjectButtonDemo url="https://trevors.tsiacademy.org/capstone/week1/WordPress-master/" />
    </div>
  );
}

// recipes page
export default function Recipes(): JSX.Element {
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
          h2="Gatsby Recipes"
          h3="GatsbyJs, Contentful CMS, GraphQL"
        />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <RecipeTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
