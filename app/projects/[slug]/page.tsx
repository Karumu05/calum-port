"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import Image from "next/image";
import testImage from "../../../public/TestImage.jpg";
import { useEffect, useState } from "react";
import { db } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { usePathname } from "next/navigation";

export default function individualPage() {
  const [pageProjet, setPageProject] = useState({})
  const route = usePathname();

  useEffect(() => {

    const projectRef = ref(db, `${route}`)
    get(projectRef).then((snapshot) => {
      if (snapshot.exists()){
        const object = snapshot.val()
        setPageProject(object)
      }
    })

  }, [db])

 

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
            {"INSERT PROJECT NAME"}
          </h2>
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div className="h-1/2 max-w-full relative">
          <Image src={testImage} fill={true} alt="Image of Project" />
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div>
          <p className="text-lg font-medium tracking-wide text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
            risus id mi consequat viverra. Donec aliquet malesuada nisl sed
            fermentum. Cras fringilla vestibulum diam at porta. Phasellus nibh
            lorem, viverra ac leo et, eleifend aliquet massa. Donec lobortis
            dapibus tellus, ac tincidunt nibh accumsan in. Sed fringilla
            ultricies hendrerit. Praesent ac laoreet tortor. Ut volutpat ex
            facilisis massa euismod, eu porttitor dui tincidunt. Phasellus ac
            fermentum neque, sed suscipit nisi. Sed vel urna sit amet sem
            efficitur vehicula ut id magna. Fusce sed neque purus. Maecenas
            ultrices iaculis mattis. Curabitur pellentesque magna vitae luctus
            porttitor. Morbi consectetur, enim vel sodales rutrum, ipsum felis
            auctor diam, vitae aliquet libero ante at ipsum. Nam non turpis
            vitae purus auctor sodales a ac mi. Nam dignissim tristique dolor
            non rutrum. Duis sodales, nibh ut mollis aliquam, sem nunc lacinia
            nulla, nec mattis dolor quam quis lorem. Etiam sed aliquam leo.
            Donec consequat nunc at convallis tempor. Phasellus placerat rutrum
            porta. Nam molestie maximus euismod. Curabitur eget viverra mi. Ut
            quis urna eget est tincidunt posuere id vel nulla. Sed condimentum
            felis a dapibus venenatis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid-cols-1">
            <h3 className="text-2xl font-bold text-center my-2">Tech Used:</h3>
            <div className="w-full h-px bg-black dark:bg-white"></div>

            <ul className="list-disc list-inside flex justify-evenly items-center h-full">
              <li>JS</li>
              <li>TS</li>
            </ul>
          </div>

          <div className="grid-cols-2">
            <h3 className="text-center text-2xl font-bold my-2">
              Personal Comments
            </h3>
            <div className="w-full h-px bg-black dark:bg-white"></div>
            <p className="text-md tracking-wide text-justify my-2 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id
              risus id mi consequat viverra. Donec aliquet malesuada nisl sed
              fermentum. Cras fringilla vestibulum diam at porta. Phasellus nibh
              lorem, viverra ac leo et, eleifend aliquet massa.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <div>
          <h3 className="text-center">Project Links</h3>
          <div className="flex justify-evenly">
            <a>Github</a>
            <a>Hosting</a>
          </div>
        </div>
      </main>
    </>
  );
}
