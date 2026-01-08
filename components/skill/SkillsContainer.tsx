import Link from "next/link";
import { skillsData } from "./skillsData";

// container to hold all elements in grid
export default function SkillsContainer(): JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skillsData.map((skillData) => (
        <div
          key={skillData.h3}
          className="p-6 shadow-embossed rounded-xl hover:shadow-embossed-sm hover:scale-[1.02] transition-all duration-300 bg-sand-gray border border-gray-900/30"
        >
          <Link
            href={skillData.href}
            target="_blank"
            className="grid grid-cols-2 gap-4 justify-center items-center"
          >
            <div className={skillData.style}>{skillData.icon}</div>
            <div className="flex flex-col items-start justify-center text-xs lg:text-sm">
              <h3 className="uppercase tracking-widest font-luxury text-gray-200">{skillData.h3}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
