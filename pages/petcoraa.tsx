import Image from "next/image";
import Link from "next/link";

import petcoraImg from "../public/assets/projects/petcora.png";

import BackButton from "../components/BackButton";

import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "Frontend",
"React 18 with TypeScript",
"Vite for build tooling and development server",
"Tailwind CSS for styling",
"Radix UI components for accessible UI primitives",
"React Hook Form with Zod validation",
"TanStack React Query for data fetching",
"Wouter for client-side routing",
"Framer Motion for animations",
"Three.js with React Three Fiber for 3D components",

"Backend:",
"Node.js with Express.js",
"TypeScript throughout",
"Drizzle ORM for database operations",
"PostgreSQL as the database",
"bcrypt for password hashing",
"express-session for session management",
"Passport.js for authentication",
"Multer for file uploads",
"OpenAI integration for AI features",
"Development & Deployment",
"ESBuild for production builds",
"TSX for TypeScript execution in development",
"Drizzle Kit for database migrations",

"Additional Features",
"Stripe for payment processing",
"WebSocket support for real-time features",
"OpenID Connect for OAuth authentication",
"Session storage with PostgreSQL",
] as const;

// body of text found in project pages
function DictionaryTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
      Pet parent social media and Ecomm platform. 
       {" "}
        <Link
          href=""
          target="_blank"
          className="text-blue-500 cursor-pointer"
        >
          {" "}
        </Link>
        <span></span>
      </p>

      <ProjectButtonDemo url="https://mypetcora.com" />
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
          src={petcoraImg}
        />
        <ProjectHeroText h2="Pet Cora" h3="" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <DictionaryTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
