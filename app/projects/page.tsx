import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import NorthCoders from "../../public/NorthCoders.png"

export default function Projects() {
  return (
    <>
      <header className="container flex flex-row items-center justify-between p-6 mx-auto">
        <Link href="/">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" />
        </Link>
      </header>
      <main className="h-screen px-6 mx-auto space-y-8 max-w-7xl">
        <div className="max-w-3xl ">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="mt-4">
            Some projects have been made on my own, and some in a team. My projects are
            listed in order from the first project I worked on to the most
            recent project. Work-in-progress projects are also included.
          </p>
        </div>
        <div className="w-full h-px bg-black"></div>

        <div className="flex max-w-full justify-between p-2">
          <div className="flex flex-column items-center">
          <h3 className="text-2xl font-bold -m-2">NorthCoders Projects</h3>
          </div>
          <Image src={NorthCoders} width={50} height={0} alt="Northcoders Logo"/>
        </div>
        

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 relative">
          <div className="border-2 border-black rounded-xl lg:row-span-2">
            <Link href="">
              <article className=" w-full h-full p-4 group">
                <div className="flex">
                  <time dateTime="">insert date</time>
                </div>

                <h2 className="mt-4 text-3xl text-bold font-medium  ">
                  Project Name
                </h2>

                <p className="mt-4 ">Project information</p>

                <div className="group-hover:text-white mt-4 lg:absolute bottom-8">
                  <p>Read more...</p>
                </div>
              </article>
            </Link>
          </div>

          <div className="flex flex-col gap-8 mx-auto border-2 border-black rounded-xl lg:mx-0">
            <Link href="">
              <article className="w-full h-full p-4 group">
                <div className="flex">
                  <time dateTime="">insert date</time>
                </div>

                <h2 className="mt-4 text-3xl text-bold font-medium group-hover:text-white">
                  Project Name
                </h2>

                <p className="mt-4 group-hover:text-white">
                  Project information
                </p>
              </article>
            </Link>
          </div>

          <div className="flex flex-col gap-8 max-auto border-2 border-black rounded-xl">
            <Link href="">
              <article className="w-full h-full p-4 group">
                <div className="flex">
                  <time dateTime="">insert date</time>
                </div>

                <h2 className="mt-4 text-3xl text-bold font-medium group-hover:text-white">
                  Project Name
                </h2>

                <p className="mt-4 group-hover:text-white">
                  Project information
                </p>
              </article>
            </Link>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-black "></div>

        <div className="grid grid-col-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid-cols-1 gap-4"></div>
          <div className="grid-cols-2 gap-4"></div>
          <div className="grid-cols-3 gap-4"></div>
        </div>
      </main>
    </>
  );
}
