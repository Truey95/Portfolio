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
          className="text-2xl p-5 embossed-card rounded-4xl hover:scale-110 transition-all duration-300"
        >
          {hero.icon}
        </Link>
      ))}
    </div>
  );
}
