import Link from "next/link";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// bottom section of global side menu navbar
export default function NavbarBottomSideMenu(): JSX.Element {
  const sideMenuNavbarData = [
    {
      className:
        "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-sky-600",
      href: "https://www.linkedin.com/in/trevor-smith-b827a0192/",
      icon: <FaLinkedinIn />,
    },
    {
      className:
        "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
      href: "https://github.com/Truey95",
      icon: <FaGithub />,
    },

  ] as const;

  return (
    <div className="pt-20">
      <p className="uppercase tracking-[0.3em] text-gray-500 font-luxury text-sm">
        Connect
      </p>

      <div className="flex items-center justify-between my-8 w-full">
        {sideMenuNavbarData.map((e) => (
          <Link href={e.href} target="_blank" key={e.href}>
            <div className="rounded-full shadow-embossed p-4 cursor-pointer hover:shadow-debossed transition-all duration-300 bg-sand-gray text-white">
              {e.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
