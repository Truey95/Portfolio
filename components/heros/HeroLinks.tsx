import Link from "next/link";
import { heroData } from "./heroData";

// hero links component that creates buttons in hero
export default function HeroLinks(): JSX.Element {
  return (
    <div className="flex justify-center gap-8 py-8">
      {heroData.map((hero) => (
        <Link
          key={hero.label}
          aria-label={hero.label}
          href={hero.href}
          target="_blank"
          className="text-2xl p-4 bg-sand-gray rounded-xl text-gray-200 shadow-embossed border border-white/5 hover:shadow-embossed-hover hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          {hero.icon}
        </Link>
      ))}
    </div>
  );
}
