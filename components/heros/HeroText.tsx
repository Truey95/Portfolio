// text found in hero component
export default function HeroText(): JSX.Element {
  return (
    <>
      <div>
        <p className="uppercase text-lg tracking-widest text-gray-600">
          Let&apos;s build mobile & web applications!
        </p>
      </div>

      <h6 className="py-4 text-grey-700">
        Hello, I&apos;m <span className="text-red-600">Trevor Smith</span>
      </h6>
      <h1 className="py-4 text-gray-700">Software Engineer</h1>
      <p className="py-4 text-gray-600 max-w-xs m-auto">
        Focused on building responsive, mobile first web applications while
        learning back-end technologies.
      </p>
    </>
  );
}
