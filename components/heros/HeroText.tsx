// text found in hero component
export default function HeroText(): JSX.Element {
  return (
    <>
      <div>
        <p className="uppercase text-sm tracking-[0.3em] text-gray-400 font-luxury">
          Let&apos;s build mobile & web applications.
        </p>
      </div>

      <h6 className="py-4 text-gray-400 tracking-widest uppercase text-xs">
        Hello, I&apos;m <span className="text-white drop-shadow-sm font-luxury text-lg">Ricky Rollins</span>
      </h6>
      <h1 className="py-4 text-white uppercase tracking-widest">Software Engineer</h1>
      <p className="py-4 text-gray-400 max-w-sm m-auto font-premium leading-relaxed">
        Focused on building responsive, mobile-first web applications while
        mastering high-end digital experiences.
      </p>
    </>
  );
}
