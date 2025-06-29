import Image from "next/image";
import Link from "next/link";

import aivrartImg from '../public/assets/projects/aivrart.png';

import BackButton from "../components/BackButton";
import ProjectButtonCode from "../components/project/ProjectButtonCode";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import ProjectTextHeading from "../components/project/ProjectTextBody";
import TechStack from "../components/TechStack";

const techStack = [
  "Frontend Technology Stack",
"Core Framework & Build Tools:",

"React 18 with TypeScript - Main frontend framework",
"Vite - Fast build tool and development server",
"Wouter - Lightweight client-side routing",
"UI & Styling:",

"Tailwind CSS - Utility-first CSS framework",
"Radix UI - Headless UI components library",
"Framer Motion - Animation library",
"Sass/SCSS - CSS preprocessor",
"Custom UI Components - Built with shadcn/ui pattern",
"State Management & Data:",

"React Query (@tanstack/react-query) - Server state management",
"React Hooks - Local state management",
"Axios - HTTP client",
"Specialized Libraries:",

"Monaco Editor - Code editor for web development tools",
"Three.js - 3D graphics and models",
"React Beautiful DnD - Drag and drop functionality",
"React Player - Video playback",
"React Markdown - Markdown rendering",
"Recharts - Data visualization",
"Backend Technology Stack",
"Core Backend:",

"Node.js with Express.js - Web server framework",
"TypeScript - Type-safe JavaScript",
"WebSocket (ws) - Real-time communication",
"Database & ORM:",

"PostgreSQL (via Neon serverless) - Primary database",
"Drizzle ORM - Type-safe database operations",
"Drizzle Kit - Database migrations",
"Authentication & Security:",

"Passport.js with local strategy - Authentication",
"Express Session - Session management",
"JSON Web Tokens (jsonwebtoken) - Token-based auth",
"AI & External Services",
"AI Integration:",

"OpenAI API - GPT models for various AI features",
"Anthropic Claude - Alternative AI model",
"ElevenLabs - Text-to-speech",
"Media & Content:",

"Mux - Video streaming and processing",
"AWS SDK - Cloud services integration",
"Multer - File upload handling",
"Payment & E-commerce:",

"Stripe - Payment processing",
"Communication:",

"Nodemailer - Email services",
"Development & DevOps",
"Build & Development:",

"ESBuild - Fast JavaScript bundler",
"TSX - TypeScript execution",
"PostCSS - CSS processing",
"Autoprefixer - CSS vendor prefixes",
"Code Quality:",

"TypeScript - Static type checking",
"ESLint configuration (implied)",
"Deployment:",

"Nix - Package management",
"Key Features Supported:",

"Multi-platform Learning Management System",
"AI-powered tutoring and content generation",
"Real-time chat and collaboration",
"Video streaming and content delivery",
"E-commerce and payment processing",
"3D model visualization",
"Document editing and CMS functionality",
"Mobile-responsive design",
"WebSocket-based real-time features",
 
] as const;

// body of text found in project pages
function MovieDatabaseTextBody(): JSX.Element {
  return (
    <div className="col-span-4">
      <ProjectTextHeading />
      <p>
        AI powered mobile and web application for educational and social purpose.{" "}
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

      <ProjectButtonCode url="" />
      <ProjectButtonDemo url="https://aivrartech.com" />
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
          src={aivrartImg}
        />
        <ProjectHeroText h2="AIVRAR TECH" h3="" />
      </div>

      <div className="max-w-7xl mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <MovieDatabaseTextBody />
        <TechStack data={techStack} />
        <BackButton />
      </div>
    </div>
  );
}
