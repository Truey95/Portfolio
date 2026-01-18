import Link from "next/link";
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlinePresentationChartLine, HiOutlineAcademicCap } from "react-icons/hi2";

// about text component
function AboutText(): JSX.Element {
  return (
    <div className="col-span-2 mx-4 group">
      <p className="uppercase text-sm tracking-[0.3em] text-white text-center xl:text-start font-luxury flex items-center gap-2 justify-center xl:justify-start">
        <span className="w-8 h-[1px] bg-white hidden xl:block"></span>
        About Me
      </p>
      <h2 className="py-4 text-center xl:text-start uppercase tracking-wider text-3xl font-luxury text-white">
        Intellectual Developer
      </h2>

      <div className="space-y-10 mt-8 relative">
        {/* Decorative vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-800 via-gray-700 to-transparent hidden xl:block"></div>

        <section className="xl:pl-8 relative group/section debossed-container p-6 rounded-4xl bg-sand-base/20 border-none">
          {/* Section Marker */}
          <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-gray-600 hidden xl:block group-hover/section:bg-white transition-colors"></div>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlineLightBulb className="text-white text-lg" />
            <h3 className="text-white font-luxury text-xs uppercase tracking-widest italic">The Nexus of Tech & Arts</h3>
          </div>
          <p className="text-white font-premium leading-relaxed text-lg">
            I traverse the boundaries between code and creativity. To me, development isn&apos;t just about logic—it&apos;s an art form.
            By fusing technical precision with artistic intuition, I craft digital environments that resonate on a human level.
          </p>
        </section>

        <section className="xl:pl-8 relative group/section debossed-container p-6 rounded-4xl bg-sand-base/20 border-none">
          <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-gray-600 hidden xl:block group-hover/section:bg-white transition-colors"></div>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlineUserGroup className="text-white text-lg" />
            <h3 className="text-white font-luxury text-xs uppercase tracking-widest italic">Community & Connection</h3>
          </div>
          <p className="text-white font-premium leading-relaxed text-lg">
            Leading through action, I&apos;ve hosted events that bridge the gap between innovators.
            Building a network isn&apos;t just about &quot;contacts&quot;; it&apos;s about fostering an ecosystem where ideas thrive and collective growth is the primary currency.
          </p>
        </section>

        <section className="xl:pl-8 relative group/section debossed-container p-6 rounded-4xl bg-sand-base/20 border-none">
          <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-gray-600 hidden xl:block group-hover/section:bg-white transition-colors"></div>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlinePresentationChartLine className="text-white text-lg" />
            <h3 className="text-white font-luxury text-xs uppercase tracking-widest italic">The Entrepreneurial Crucible</h3>
          </div>
          <p className="text-white font-premium leading-relaxed text-lg">
            Past businesses were my ultimate proving ground. I&apos;ve experienced the weight of failure and the grit required to bounce back.
            Every venture that didn&apos;t go as planned was a masterclass in resilience, shifting my mindset from survival to strategic evolution.
          </p>
        </section>

        <section className="xl:pl-8 relative group/section debossed-container p-6 rounded-4xl bg-sand-base/20 border-none">
          <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-gray-600 hidden xl:block group-hover/section:bg-white transition-colors"></div>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlineAcademicCap className="text-white text-lg" />
            <h3 className="text-white font-luxury text-xs uppercase tracking-widest italic">Intellectual Growth & Private Study</h3>
          </div>
          <p className="text-white font-premium leading-relaxed text-lg">
            In the quiet hours of private study, I&apos;ve dismantled &quot;sinking mindsets&quot; through relentless self-education.
            I believe in the power of an autodidact&apos;s drive—constantly refining my craft and expanding my intellectual horizon to solve complex global problems.
          </p>
        </section>

        <section className="xl:pl-8 relative group/section debossed-container p-6 rounded-4xl bg-sand-base/20 border-none">
          <div className="absolute -left-1 top-1 w-2 h-2 rounded-full bg-gray-600 hidden xl:block group-hover/section:bg-white transition-colors"></div>

          <div className="flex items-center gap-3 mb-3">
            <HiOutlineGlobeAlt className="text-white text-lg" />
            <h3 className="text-white font-luxury text-xs uppercase tracking-widest italic">Vision & Global Influence</h3>
          </div>
          <p className="text-white font-premium leading-relaxed text-lg">
            I see my influence in the world as a catalyst for meaningful change.
            As an Intellectual Developer, my mission is to build solutions that don&apos;t just solve tasks, but elevate the way we interact with technology and each other.
          </p>
        </section>
      </div>

      <Link href="/#projects" scroll={false}>
        <p className="py-12 text-white underline cursor-pointer hover:underline transition-all font-luxury tracking-[0.4em] text-xs uppercase text-center xl:text-start flex items-center justify-center xl:justify-start gap-4">
          Explore My Portfolio
          <span className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-white transition-all duration-500"></span>
        </p>
      </Link>
    </div>
  );
}


// about component
export default function About(): JSX.Element {
  return (
    <section id="about" className="w-full h-auto p-2 flex items-center py-12 bg-transparent">
      <div className="max-w-4xl m-auto embossed-card p-10 md:p-16">
        <AboutText />
      </div>
    </section>
  );
}
