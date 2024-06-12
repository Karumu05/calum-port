
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <nav className="z-10 w-full max-w-5xl items-center justify-evenly font-mono text-lg flex">
      <Link href="/about" className="hover:text-white" >About</Link>
      <Link href="/projects" className="hover:text-white" >Projects</Link>
     </nav>

     <div>
     <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title  sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text glow-text ">Calum Borders</h1>
     
     <p className="text-center mt-8 z-10 text-xl text-transparent duration-1000 bg-white text-edge-outline animate-title whitespace-nowrap bg-clip-text glow-text">Software Engineer</p>
     </div>

     <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 ">
      <Link href="https://github.com/Karumu05">
        <p>GITHUB</p>
      </Link>

      <Link href="https://www.linkedin.com/in/calum-borders/">
        LINKED IN
      </Link>

      <div>
        <p>CONTACT</p>  
      </div>
     </div>
    </main>
    </>

    
  )
}