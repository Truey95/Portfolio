import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const heroData = [
  {
    label: "github",
    href: "https://github.com/Truey95",
    style:
      "rounded-full shadow-embossed p-6 cursor-pointer hover:shadow-embossed-sm hover:scale-105 transition-all duration-300 bg-sand-gray text-white",
    icon: <FaGithub />,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/trevor-smith-b827a0192/",
    style:
      "rounded-full shadow-embossed p-6 cursor-pointer hover:shadow-embossed-sm hover:scale-105 transition-all duration-300 bg-sand-gray text-white",
    icon: <FaLinkedinIn />,
  },

] as const;
