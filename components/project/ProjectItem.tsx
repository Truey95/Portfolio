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
      <p className="text-center py-3 rounded-4xl bg-sand-gray text-white font-bold cursor-pointer shadow-embossed-sm hover:translate-y-[2px] active:shadow-debossed transition-all">
        View
      </p>
    </Link>
  );
}

// project item component
export default function ProjectItem(props: {
  backgroundImg: StaticImageData | string;
  projectUrl: string;
  tech: string;
  title: string;
}) {
  const { title, backgroundImg, projectUrl, tech } = props;
  return (
    <Link href={projectUrl}>
      <div className="relative flex items-center justify-center h-[280px] w-[350px] embossed-card group overflow-hidden p-3 cursor-pointer">
        <div className="relative w-full h-full overflow-hidden rounded-4xl transition-all duration-500 debossed-container border-none">
          <Image
            alt={title}
            className="group-hover:scale-110 transition-transform duration-700 object-cover"
            src={backgroundImg}
            fill
          />
          <div className="absolute inset-0 bg-sand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
            <h3 className="text-xl text-white tracking-wider text-center uppercase font-bold">
              {title}
            </h3>
            <p className="pt-2 text-white text-center text-xs tracking-widest">{tech}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
