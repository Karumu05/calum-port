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
  const [allProjects, setAllProjects] = useState<Project[]>([]);

  useEffect(() => {
    
    const projectsRef = ref(db, "projects");

    async function fetchData() {
      try {
        const projectSnap = await get(projectsRef);

        if (projectSnap.exists()) {
          const projectArray = Object.entries(projectSnap.val()).map(
            ([id, data]) => ({ id, ...data })
          );
          setAllProjects(projectArray);
        } else {
          console.warn("No Data Avaliable");
        }
      } catch (error) {
        console.error("Error fetching Project data", error);
      }
    }

    fetchData();
  }, []);

  const mapProjectsArray = allProjects.slice(3);

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
            name={allProjects[2]?.name}
            date={allProjects[2]?.date}
            info={allProjects[2]?.info}
            key={allProjects[2]?.name}
          />

          <ProjectArticle
            date={allProjects[0]?.date}
            name={allProjects[0]?.name}
            info={allProjects[0]?.info}
            key={allProjects[0]?.name}
          />
          <ProjectArticle
            date={allProjects[1]?.date}
            name={allProjects[1]?.name}
            info={allProjects[1]?.info}
            key={allProjects[1]?.id}
          />
        </div>
        <div className="hidden w-full h-px md:block bg-black dark:bg-white "></div>

        <div>
          <div className="flex justify-evenly">
            {mapProjectsArray.map((genProject) => {
              return (
                <ProjectArticle
                  date={genProject.date}
                  name={genProject.name}
                  info={genProject.info}
                  key={genProject.id}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
