import Image from "next/image";
import gatsbyRecipeImg from "../public/assets/projects/gatsbyrecipes.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

function Recipes(): JSX.Element {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1 object-cover"
          fill
          src={gatsbyRecipeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Gatsby Recipes</h2>
          <h3>GatsbyJs, Contentful CMS, GraphQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="my-1">Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            GatsbyJS was the first static site generator I used to build
            websites. This is my favorite since it contains cooking recipes I
            personally use. I like to cook and needed a way to keep up with
            recipes I enjoyed making. Pages are generated with the help of
            Contentful CMS and GraphQL.
          </p>
          <Link
            href="https://github.com/milliorn/Recipe-Page"
            target="_blank"
            
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link
            href="https://gatsbyrecipes.gatsbyjs.io/"
            target="_blank"
            
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tech Stacks</p>
            <div className="grid grid-cols-2 md:grid-cols-1 text-sm lg:text-base">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> GatsbyJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> GatsbyCloud
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> GraphQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Contentful CMS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> React-Helmet
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 mr-1" /> Slugify
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer ml-4">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Recipes;
