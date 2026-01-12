import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useState, useEffect } from "react";

import NavbarLogoGlobal from "./NavbarLogoGlobal";
import NavbarBottomSideMenu from "./NavbarBottomSideMenu";

const navbarLinksData = [
  { href: "#hero", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#photos", text: "Photos" },
  { href: "#contact", text: "Contact" },
  { href: "https://drive.google.com/file/d/1Fpq992lIVQcYGcYLo5ijypVmbDOkUSsq/view?usp=sharing", text: "Resume" },
] as const;

// global navbar component
export default function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // handler events
  function handleNav(): void {
    setNav(!nav);
  }

  useEffect(() => {
    // show/hide shadow on navbar based on viewpoint
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const showHideNavbar: string = nav
    ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
    : "invisible";

  const showHideSideMenu: string = nav
    ? "fixed left-0 top-0 w-9/12 h-screen bg-sand-black p-8 ease-in duration-500 border-r border-gray-900"
    : "fixed left-[-100%] top-0 p-10 ease-in duration-500";

  const showHideShadow: string = shadow
    ? "fixed w-full h-20 shadow-embossed z-50 ease-in-out duration-300"
    : "fixed w-full h-20 z-50";

  // links found in the navbar component
  function SideMenuNavbarLinks(): JSX.Element {
    return (
      <ul className="uppercase">
        {navbarLinksData.map((link) => (
          <li
            key={link.text}
            onClick={() => setNav(false)}
            className="py-4 text-sm tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            <Link scroll={false} href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // links found in the navbar component
  function NavbarLinks(): JSX.Element {
    return (
      <>
        <ul className="hidden md:flex mr-8 uppercase">
          {navbarLinksData.map((link) => (
            <li
              key={link.text}
              className="ml-10 text-xs font-luxury tracking-[0.2em] hover:text-white transition-colors border-b border-transparent hover:border-white/50 py-1"
            >
              <Link scroll={false} href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="md:hidden cursor-pointer text-white">
          <AiOutlineMenu size={25} />
        </div>
      </>
    );
  }

  // top of side bar menu
  function SideMenuTop(): JSX.Element {
    return (
      <>
        <div className="relative">{<SideMenuTopCloseButton />}</div>
        <div className="border-b border-gray-900">
          <p className="w-10/12 sm:w-11/12 py-4 font-luxury tracking-widest text-xs text-gray-400">
            CRAFTING DIGITAL ELEGANCE
          </p>
        </div>
      </>
    );

    // button to close side menu
    function SideMenuTopCloseButton() {
      return (
        <div
          onClick={handleNav}
          className="rounded-full shadow-embossed p-2 cursor-pointer absolute top-0 right-0 bg-sand-gray text-white"
        >
          <AiOutlineClose />
        </div>
      );
    }
  }

  return (
    <div className={showHideShadow}>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-sand-black/90 backdrop-blur-md border-b border-gray-900">
        <NavbarLogoGlobal />
        <NavbarLinks />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={showHideNavbar}>
        {/* Side Menu */}
        <div className={showHideSideMenu}>
          <SideMenuTop />
          <SideMenuNavbarLinks />
          <NavbarBottomSideMenu />
        </div>
      </div>
    </div>
  );
}
