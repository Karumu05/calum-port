"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FetchAboutImageUrl } from "../services/fireBaseFunctions";
import Bio from "../components/bioSection";
import Values from "../components/valuesSection";
import HobbiesAndInterests from "../components/hobbiesAndInterests";
import Skills from "../components/skillsSection";

export default function About() {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = await FetchAboutImageUrl("croppedMe");
      setProfilePic(url);
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="container flex flex-row items-center justify-between p-6 mx-auto">
        <Link href="/">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" />
        </Link>
      </header>

      <main className="h-screen px-6 mx-auto space-y-8 max-w-7xl">
        <section className=" flex justify-evenly my-4 p-8">
          <Image
            src={profilePic}
            height={500}
            width={500}
            alt="A picture of me for the about page"
            className="rounded-full"
          />

          <div className="flex flex-col text-center justify-center p-4 m-4">
            <h1 className="text-5xl text-center font-bold my-8 underline">
              Calum Borders
            </h1>
            <h2 className="text-5xl text-center font-bold my-8">
              Software Engineer
            </h2>
          </div>
        </section>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <Bio/>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <Skills/>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <HobbiesAndInterests/>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <Values/>
       
        <div className="absolute left-0 text-gray-100">
          <a href="https://www.freepik.com/free-photo/mint-blue-watercolor-texture-background-wallpaper_15601165.htm#from_view=detail_alsolike">
            Background by rawpixel.com on Freepik
          </a>
        </div>
      </main>
    </>
  );
}
