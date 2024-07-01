"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { db, storage } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { usePathname } from "next/navigation";
import { getDownloadURL, ref as storageRef } from "firebase/storage";

interface Project {
  name: string;
  date: string;
  description: string;
  info?: string;
  comments?: string;
  techUsed: string;
  links?: { [key: string]: string };
}

export default function IndividualPage() {
  const [pageProjet, setPageProject] = useState<Project>({} as Project);
  const [imageURL, setImageURL] = useState("");
  const route = usePathname();

  const fetchIndividualProject = async (route: string) => {
    const projectRef = ref(db, `${route}`);
    const snapshot = await get(projectRef);

    try {
      if (snapshot.exists()) {
        const object = snapshot.val();
        return object;
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const fetchImageUrl = async (imageName: string) => {
    const imageRef = storageRef(storage, `project-images/${imageName}.png`);

    try {
      const url = await getDownloadURL(imageRef);
      return url;
    } catch (error) {
      console.error("Error fetching image", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchIndividualProject(route);
      setPageProject(data);

      const url = await fetchImageUrl(data.name);
      if (url) {
        setImageURL(url);
      } else {
        console.error("Cannot find imageURL");
      }
    };

    fetchData();
  },[route]);



  return (
    <>
      <header className="container flex flex-row items-center justify-between p-6 mx-auto">
        <Link href="/projects">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} size="3x" />
        </Link>
      </header>

      <main className="h-screen px-6 mx-auto space-y-8 max-w-7xl">
        <div className="max-w-full">
          <h2 className="text-5xl text-center font-bold my-8">
            {pageProjet.name}
          </h2>
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div className="h-1/2 max-w-full relative">
          {imageURL ? (
            <Image src={imageURL} fill={true} alt="Image of Project" />
          ) : (
            <p className="text-center">No image found </p>
          )}
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div>
          <p className="text-lg font-medium tracking-wide text-justify">
            {pageProjet.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid-cols-1">
            <h3 className="text-2xl font-bold  my-2">Tech Used:</h3>
            <div className="w-full h-px bg-black dark:bg-white"></div>

            <ul className="list-disc list-inside items-center  p-2 h-full">
              {pageProjet.techUsed?.split(" ").map((tech) => {
                return <li key={tech}>{tech}</li>;
              })}
            </ul>
          </div>

          <div className="grid-cols-2">
            <h3 className="text-center text-2xl font-bold my-2">
              Personal Comments
            </h3>
            <div className="w-full h-px bg-black dark:bg-white"></div>
            <p className="text-md tracking-wide text-justify my-2 mx-2">
              {pageProjet.comments}
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div className=" p-4">
          <h3 className="text-center font-bold text-2xl">Project Links</h3>
          <div className="flex justify-evenly font-bold text-lg">
            {pageProjet.links ? (
              Object.keys(pageProjet.links).map((key) => (
                <a
                  key={key}
                  href={pageProjet.links?.[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {key}
                </a>
              ))
            ) : (
              <p>No Links Avaliable</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
