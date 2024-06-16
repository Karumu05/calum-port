"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import NorthCodersLogo from "../../public/NorthCoders.png";
import { push, get, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import ProjectArticle from "../components/projectArticle";
import FeaturedProjectArticle from "../components/featuredProjectArticle";

type Project = {
  id?: string;
  date: string;
  description: string;
  image: string;
  name: string;
  techUsed: string;
  info: string;
};

interface FetchedProjectData {
  id?: string;
  date: string;
  description: string;
  image: string;
  name: string;
  techUsed: string;
  info: string;
}

export default function Projects() {
  const [ncProjects, setNCProjects] = useState<Project[]>([]);
  const [genProjects, setGenProjects] = useState<Project[]>([])

  useEffect(() => {
    const projectsRef = ref(db, "projects");
    get(projectsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const projectArray: Project[] = Object.entries(
            snapshot.val() as FetchedProjectData[]
          ).map(([id, data]) => ({ id, ...data }));
          setNCProjects(projectArray);
        } else {
          alert("No Data Avaliable");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
            Some projects have been made on my own, and some in a team. My
            projects are listed in order from the first project I worked on to
            the most recent project. Work-in-progress projects are also
            included.
          </p>
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div className="flex max-w-full justify-between p-2">
          <div className="flex flex-column items-center">
            <h3 className="text-2xl font-bold -m-2">NorthCoders Projects</h3>
          </div>
          <Image
            src={NorthCodersLogo}
            width={50}
            height={0}
            alt="Northcoders Logo"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 relative">
          <FeaturedProjectArticle
            name={ncProjects[0]?.name}
            date={ncProjects[0]?.date}
            info={ncProjects[0]?.info}
          />

          <ProjectArticle
            date={ncProjects[1]?.date}
            name={ncProjects[1]?.name}
            info={ncProjects[1]?.info}
          />
          <ProjectArticle
            date={ncProjects[2]?.date}
            name={ncProjects[2]?.name}
            info={ncProjects[2]?.info}
          />
        </div>
        <div className="hidden w-full h-px md:block bg-black dark:bg-white "></div>

        <div className="grid grid-col-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid-cols-1 gap-4">
            {/* <ProjectArticle
              date={projects[3]?.date}
              name={projects[3]?.name}
              info={projects[3]?.info}
            /> */}
          </div>
          <div className="grid-cols-2 gap-4"></div>
          <div className="grid-cols-3 gap-4"></div>
        </div>
      </main>
    </>
  );
}
