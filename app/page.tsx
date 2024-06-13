
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faEnvelope, faMailBulk, faMailForward, faMailReply } from "@fortawesome/free-solid-svg-icons";


config.autoAddCss = false;

export default function Home() {


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <nav className="z-10 w-full max-w-5xl items-center justify-evenly font-mono text-lg flex">
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
        </nav>

        <div>
          <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title  sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text glow-text ">
            Calum Borders
          </h1>

          <p className="text-center mt-8 z-10 text-xl text-transparent duration-1000 bg-white text-edge-outline animate-title whitespace-nowrap bg-clip-text glow-text">
            Software Engineer
          </p>
        </div>

        <div className="mb-32 grid text-center gap-5 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3">
          <Link href="https://github.com/Karumu05" className="contact-link">
            <FontAwesomeIcon icon={faGithub} size="9x"/>
            <p>github.com/Karumu05</p>
          </Link>

          <Link href="https://www.linkedin.com/in/calum-borders/" className="contact-link">
            <FontAwesomeIcon icon={faLinkedin} size="9x" />
            <p>linkedin.com/in/calum-borders</p>
          </Link>

          <a href="mailto:calum.borders@gmail.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} size="9x"/>
            <p>calum.borders@gmail.com</p>
          </a>
          
        </div>
      </main>
    </>
  );
}
