import Image from "next/image";
import legalPresenceImg from "../public/assets/projects/legal_presence.png";
import BackButton from "../components/BackButton";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import TechStack from "../components/TechStack";
import SandBackground from "../components/SandBackground";
import LegalPresenceContent from "../components/project/LegalPresenceContent";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";

const techStack = [
    "Node.js",
    "PostgreSQL",
    "React",
    "Tailwind",
    "OpenAI",
    "Docker",
    "Twilio",
] as const;

export default function LegalPresence(): JSX.Element {
    return (
        <div className="w-full min-h-screen bg-sand-black relative">
            <SandBackground />

            <div className="relative z-10">
                <div className="w-screen h-[50vh] relative">
                    <ProjectHeroOverlay />
                    <Image
                        alt="LegalPresence"
                        className="absolute z-10 object-cover"
                        fill
                        src={legalPresenceImg}
                        priority
                    />
                    <ProjectHeroText
                        h2="LEGAL PRESENCE"
                        h3="AI Assistant for Law Firms | Open-Source"
                    />
                </div>

                <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-5 gap-8 py-16">
                    <div className="col-span-4">
                        <LegalPresenceContent />
                    </div>

                    <div className="col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <TechStack data={techStack} />
                            <div className="pt-4 flex flex-col gap-4">
                                <ProjectButtonDemo url="https://lawyer-ai-rho.vercel.app/" />
                                <BackButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
