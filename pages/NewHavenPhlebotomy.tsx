import Image from "next/image";
import Link from "next/link";

import passhubcoverImg from "../public/assets/projects/passhubcover.png";

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "Javascript",
  "PHP",
  "TypeScript",
] as const;

// body of text found in project pages
function MovieDatabaseTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        In managing my Passhub application via cPanel, I meticulously configure the database
        secure file permissions, automate maintenance with cron jobs, bolster security with SSL
        React waand .htaccess configurations, and enhance functionality with EasyApache extensions,
        robust and secure user experience.{" "}
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
      </p>

      <ProjectButtonCode url="https://github.com/Truey95/PassHub" />
      <ProjectButtonDemo url="https://passhub.trevors.tsiacademy.org/auth" />
    </div>
  );
}

// movie database page
export default function MovieDatabase(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <ProjectHeroOverlay />
        <Image
          alt="/"
          className="absolute z-10 object-cover"
          fill
          src={passhubcoverImg}
        />
        <ProjectHeroText h2="Pass Hub" h3="Javascript, Wordpress, PHP, Typescript" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <MovieDatabaseTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
