"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FetchAboutImageUrl } from "../services/fireBaseFunctions";

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
            <h1 className="text-5xl text-center font-bold my-8 underline">Calum Borders</h1>
            <h2 className="text-5xl text-center font-bold my-8">Software Engineer</h2>
          </div>
        </section>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <section className="px-4">
            <h2 className="text-2xl font-bold my-4">Bio</h2>
            <p className="my-4 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis convallis magna ac porttitor. Aliquam ullamcorper est augue, nec euismod leo lobortis sit amet. Aenean gravida eleifend elementum. Donec dictum libero vitae congue posuere. In ut sodales massa. Nulla vitae mattis enim, eget sagittis felis. Ut felis turpis, scelerisque sit amet nisl at, euismod tristique elit. Nulla facilisi. Integer aliquam porta ligula vitae volutpat. Vivamus velit purus, pellentesque id lacus ac, facilisis convallis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent tristique quis massa quis vehicula. Donec interdum volutpat dui eget cursus. Fusce semper sollicitudin ipsum sed auctor.

            Ut interdum purus neque, id placerat neque aliquet a. Praesent molestie varius magna, feugiat consectetur turpis fermentum quis. Nunc porta laoreet dui faucibus bibendum. Integer eget risus vel est congue gravida in id augue. Pellentesque nec ipsum id quam maximus mollis sit amet vel nisl. Nunc blandit orci eu placerat ultrices. Fusce placerat nisi tellus, non pharetra orci ornare vel. Nullam vel ipsum risus. Nunc luctus nulla ut euismod imperdiet. Nam auctor, dui vel consequat pellentesque, elit magna congue lacus, ut aliquam nunc est sed massa. Aliquam imperdiet ullamcorper nibh, ac vestibulum dolor consequat eget. Sed mauris nulla, laoreet a sollicitudin nec, mattis id est. Etiam ex massa, porttitor quis velit at, dictum convallis nisl. Morbi vulputate nibh nulla, sit amet pretium ipsum bibendum sit amet. Nunc et orci sit amet quam blandit faucibus. Integer facilisis tincidunt metus, in facilisis nisi sollicitudin sit amet.</p>
        </section>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <section className="flex justify-evenly">

            <div className="flex flex-row justify-evenly">
                <div className="px-4">
                <h2 className="text-2xl font-bold my-4">Technical Skills</h2>
                <ul>
                    <li> <span className="font-bold">Languages:</span> JavaScript, TypeScript using Node.js and browsers as an environment</li>
                    <li> <span className="font-bold">Methodologies:</span> Object Oriented Programming (OOP), Model View Controller (MVC) </li>
                    <li> <span className="font-bold">Testing:</span> Test Driven Development (TDD), Jest, Supertest</li>
                    <li> <span className="font-bold">Back-End:</span> Express.js, SQL, Postgres SQL, Firebase</li>
                    <li> <span className="font-bold">Front-End:</span> HTML, CSS, React, React Native, Axios, accessibility tools such as Lighthouse, Expo, NextJS</li>
                    <li> <span className="font-bold">Other:</span> Paired programming, technical communication, Regex, Agile and SCRUM methodologies</li>
                </ul>
                </div>

                <div className="px-4">
                <h2 className="text-2xl font-bold my-4">Skills And Expertise</h2>
                <ul>
                    <li>Japanese Language</li>
                    <li>Project Management</li>
                    <li>Learning quickly under high pressure</li>
                    <li>Communication skills</li>
                    <li>Working efficiently in a team</li>
                </ul>
                </div>   
            </div>

            <div>
                <h2 className="text-2xl font-bold my-4">Hobbies And Interets</h2>
                <ul>
                    <li>PC Gaming</li>
                    <li>Japanese Culture and Language</li>
                    <li>Sewing and clothes design</li>
                    <li>Coding with friends</li>
                </ul>
            </div>
        </section>
        
        <div className="w-full h-px bg-black dark:bg-white"></div>

        <section className="flex justify-evenly  ">
            <div>
                <h2 className="text-2xl font-bold my-4">My Values</h2>
            </div>

            <div>
                <h2 className="text-2xl font-bold my-4">Testimonials</h2>
            </div>
        </section>


      </main>
    </>
  );
}
