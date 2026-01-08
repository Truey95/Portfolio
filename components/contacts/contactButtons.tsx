import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const contactButtons = [
  {
    button: <FaGithub />,
    className: "rounded-full m-0.02 p-6 shadow-embossed cursor-pointer hover:shadow-embossed-sm hover:scale-105 transition-all duration-300 bg-sand-gray text-white",
    href: "https://github.com/Truey95",
    label: "Github",
  },
  {
    button: <FaLinkedinIn />,
    className: "rounded-full m-0.02 p-6 shadow-embossed cursor-pointer hover:shadow-embossed-sm hover:scale-105 transition-all duration-300 bg-sand-gray text-gray-400 hover:text-white",
    href: "https://www.linkedin.com/in/ricky-rollins-b827a0192/",
    label: "LinkedinIn",
  },

] as const;
