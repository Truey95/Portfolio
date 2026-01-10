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
    <Link href={projectUrl}>
      <div className="relative flex items-center justify-center h-[280px] w-[350px] shadow-debossed rounded-3xl group overflow-hidden bg-sand-black p-4 cursor-pointer hover:shadow-debossed-sm transition-all duration-300">
        <div className="relative w-full h-full overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
          <Image
            alt={title}
            className="rounded-2xl group-hover:scale-110 transition-transform duration-700 object-cover"
            src={backgroundImg}
            fill
          />
          <div className="absolute inset-0 bg-sand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
            <h3 className="text-xl text-white tracking-wider text-center uppercase font-bold">
              {title}
            </h3>
            <p className="pt-2 text-white/80 text-center text-xs tracking-widest">{tech}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
