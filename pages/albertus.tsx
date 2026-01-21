import Image from "next/image";
import albertusImg from "../public/assets/projects/albertus.png";
import BackButton from "../components/BackButton";
import ProjectHeroOverlay from "../components/project/ProjectHeroOverlay";
import ProjectHeroText from "../components/project/ProjectHeroText";
import TechStack from "../components/TechStack";
import SandBackground from "../components/SandBackground";
import ProjectButtonDemo from "../components/project/ProjectButtonDemo";

const techStack = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Gemini AI",
    "Cloud Run",
    "TypeScript",
] as const;

export default function AlbertusAI(): JSX.Element {
    return (
        <div className="w-full min-h-screen bg-sand-black relative">
            <SandBackground />

            <div className="relative z-10">
                <div className="w-screen h-[50vh] relative">
                    <ProjectHeroOverlay />
                    <Image
                        alt="Albertus AI"
                        className="absolute z-10 object-cover"
                        fill
                        src={albertusImg}
                        priority
                    />
                    <ProjectHeroText
                        h2="ALBERTUS AI"
                        h3="The Future of Learning | College Site Remake"
                    />
                </div>

                <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-5 gap-8 py-16">
                    <div className="col-span-4">
                        <section className="col-span-4">
                            <h3 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest border-b border-white/5 pb-2">Project Overview</h3>
                            <p className="text-white font-premium leading-relaxed text-lg mb-6">
                                Albertus AI is a modern remake of a college learning environment, reimagined with artificial intelligence at its core.
                                It provides personalized learning paths, AI-driven content summaries, and interactive academic assistance
                                to bridge the gap between traditional curriculum and future tech.
                            </p>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/10 italic text-white/80 font-premium">
                                &quot;Revolutionizing the academic journey through intelligent integration.&quot;
                            </div>
                        </section>

                        <div className="flex justify-center gap-6 mt-10">
                            <ProjectButtonDemo url="https://albertus-ai-future-of-learning-980465155264.us-west1.run.app" />
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="sticky top-24 space-y-8">
                            <TechStack data={techStack} />
                            <div className="pt-4 flex flex-col gap-4">
                                <ProjectButtonDemo url="https://albertus-ai-future-of-learning-980465155264.us-west1.run.app" />
                                <BackButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
