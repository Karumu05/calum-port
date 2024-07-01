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
            <h1 className="text-5xl text-center font-bold my-8 underline">
              Calum Borders
            </h1>
            <h2 className="text-5xl text-center font-bold my-8">
              Software Engineer
            </h2>
          </div>
        </section>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <section className="px-4">
          <h2 className="text-2xl font-bold my-4">Bio</h2>
          <h3 className="text-lg underline font-bold">
            🎌 From Japanophile to Aspiring Dev: My Coding Odyssey 🧑🏻‍💻{" "}
          </h3>
          <div className="my-4 text-justify text-lg">
            <p>
              {" "}
              I wasn&apos;t always coding! My love affair with Japan started in
              Primary school. I quickly needed to know more. This fascination
              led me to delve deeper into high school, where I mastered two
              Japanese writing systems, Hiragana and Katakana. Then, I
              encountered Kanji, which some may see as daunting. I saw it as
              exciting and a challenge, which I am still tackling to this day.
              Learning Kanji perfectly matches my passion for continuous
              learning, or kaizen, as many Japanese firms would say.
            </p>
            <br></br>
            <p>
              {" "}
              Fast-forward to Tokyo—living the dream and surrounded by tech
              innovation. After securing a spot at the University of Manchester,
              I finally landed in Tokyo. Fueled by my goal of speaking Japanese
              fluently, after six months of nonstop talking to anyone who would
              entertain me, I could finally immerse myself in Japanese society
              and the vibrant tech scene. From trains delivering sushi to my
              table to captivating 3D billboards, Japan sparked a new passion.
            </p>
            <br></br>
            <p>
              {" "}
              Back in the UK, from festivals to code, the magic of seeing a
              Dev&apos;s creations come to life. Returning to complete my
              dissertation through the challenges of COVID-19, I graduated and
              started working at UK festivals. Working in the EPOS team, I rose
              to Project Manager, gaining valuable tech knowledge and people
              skills. I wanted to know more. Seeing the use of the developer&apos;s
              code on large-scale events ignited a passion to learn more about
              software development.
            </p>
            <br></br>
            <p>
              {" "}
              Determined to become a software developer, I enrolled at
              Northcoders, where I leveraged my language-learning skills to
              conquer new coding challenges. Here, I came to grips with the
              industry&apos;s ever-changing nature. My experience with learning
              Japanese taught me valuable learning strategies, helping me break
              down technologies and understand syntax. Now, my confidence is at
              its peak, and I am ready to approach new challenges.
            </p>
            <br></br>
            <p>
              My goal? Right now, to join an inclusive, innovative, and
              progressive team that values tech and soft skills to reach its
              goals. My ultimate dream goal? To combine my love of Japan and
              coding into a fulfilling career that makes a positive impact. This
              could mean bridging a gap between tech worlds on a global scale,
              allowing me to continuously improve and use my communication
              skills. So, if you&apos;re looking for an inquisitive software
              developer with a superb work ethic and some questionable skills in
              Karaoke (in Japanese, of course!), drop me a message!
            </p>
          </div>
        </section>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <section className="flex justify-evenly">
          <div className="flex flex-row justify-evenly">
            <div className="px-4">
              <h2 className="text-2xl font-bold my-4">Technical Skills</h2>
              <ul className="text-lg">
                <li>
                  {" "}
                  <span className="font-bold">Languages:</span> JavaScript,
                  TypeScript using Node.js and browsers as an environment
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Methodologies:</span> Object
                  Oriented Programming (OOP), Model View Controller (MVC){" "}
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Testing:</span> Test Driven
                  Development (TDD), Jest, Supertest
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Back-End:</span> Express.js, SQL,
                  Postgres SQL, Firebase
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Front-End:</span> HTML, CSS,
                  React, React Native, Axios, accessibility tools such as
                  Lighthouse, Expo, NextJS
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Other:</span> Paired programming,
                  technical communication, Regex, Agile and SCRUM methodologies
                </li>
              </ul>
            </div>

            <div className="px-4">
              <h2 className="text-2xl font-bold my-4">Skills And Expertise</h2>
              <ul className="text-lg">
                <li>Japanese Language</li>
                <li>Project Management</li>
                <li>Learning quickly under high pressure</li>
                <li>Communication skills</li>
                <li>Working efficiently in a team</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="w-full h-px bg-black dark:bg-white"></div>

        <section className="flex justify-center">
          <div className="px-4">
            <h2 className="text-2xl text-center font-bold my-4">Hobbies And Interets</h2>
            <ul className="text-lg text-center">
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
            <div className="my-4 text-lg">
              <p>
                {" "}
                I am very open and honest, and I believe everyone has the right
                to be heard on any matter. I have always been an incredibly
                inquisitive person. Whenever I have had an issue, question, or
                doubt why something is, you can be sure I will ask why. If you
                ask any of my school teachers, I&apos;m sure they would agree. I
                don&apos;t see the point in being confused when people and resources
                are available everywhere to quench the thirst for
                inquisitiveness.{" "}
              </p>
              <br></br>
              <p>
                {" "}
                I have experienced many hardships in life, just as I am sure
                many others have. I believe it is important to learn from life&apos;s
                lessons and move forward with new knowledge in hopes of being
                prepared for future events or becoming wise enough to prevent
                them from happening again. With this in mind, although sometimes
                with extreme difficulty, I think it is essential to look at
                one&apos;s life in detail and try to think about the question &quot;What
                if&quot; as much as possible in all aspects of life.{" "}
              </p>
              <br></br>
              <p>
                As you can probably tell, I am a big fan of communication. I
                think it is important in all aspects of life, from personal to
                work. Effective communication not only helps get a task done but
                also helps each other understand thoughts and feelings regarding
                whatever situation. Through good communication, problems can
                become easier to solve and help ensure everyone is happy, and
                thus, in my opinion, produce better results for everyone.
              </p>
              <br></br>
              <p>
                {" "}
                Although I love to talk and interact with people, I also respect
                when they don&apos;t. Everyone is different, and I believe that
                everyone feels comfortable communicating with themselves or
                others in the right situation, time, and place. Respecting
                people&apos;s differences and communication methods is very important
                and a hard skill to learn. I hope that as my life continues, I
                can continue to develop my communication skills and help not
                only myself but also others.{" "}
              </p>
              <br></br>
              <p>
                {" "}
                I aim to work in an environment where these values shine through.
                Clear and respectful communication is very important to achieve.
                I would hope that all workplaces strive for this value to
                develop a trusting team that can work under trust and provide
                outstanding results.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
