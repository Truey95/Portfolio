import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// create button in project items
function ProjectItemButton({
  projectUrl,
}: {
  projectUrl: string;
}): JSX.Element {
  return (
    <Link href={projectUrl}>
      <p className="text-center py-3 rounded-lg bg-sand-gray text-white font-bold cursor-pointer shadow-embossed-sm hover:shadow-debossed transition-all">
        View
      </p>
    </Link>
  );
}

// project item component
export default function ProjectItem(props: {
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
  title: string;
}) {
  const { title, backgroundImg, projectUrl, tech } = props;
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-embossed rounded-xl group hover:bg-sand-black/80 transition-all duration-300">
      <Image
        alt="/"
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
      />
      <div className="hidden group-hover:block absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        {ProjectItemButton({ projectUrl })}
      </div>
    </div>
  );
}
