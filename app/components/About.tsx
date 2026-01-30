import Image from "next/image";
import photo from "../../public/LucianoFigueiredo.jpg";

export function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-zinc-900">Hi there!</h2>
        <div className="space-y-10 text-zinc-600">
          <p>
            Bachelor’s degree in Computer Science from the Federal University of Campina Grande (UFCG). Passionate about web and mobile
            development, occasionally venturing into UI/UX Design.
          </p>
          <div>
            <p className="font-semibold mb-4">Tech Stack</p>
            <div>
              <span className="mr-1">OS & DevOps:</span>
              <span className="font-semibold">Linux, Docker</span>
            </div>
            <div>
              <span className="mr-1">Databases & Caching:</span>
              <span className="font-semibold">PostgreSQL, Redis, MongoDB</span>
            </div>
            <div>
              <span className="mr-1">Backend & Real-time:</span>
              <span className="font-semibold">NestJS, WebSocket, TypeScript</span>
            </div>
            <div>
              <span className="mr-1">React Ecosystem:</span>
              <span className="font-semibold">NextJS, Tailwind CSS, React Query, Zustand</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative justify-self-center">
        <div className="absolute top-4 left-4 w-full h-full bg-purple-400 -z-10 rounded-md" />
        <div className="w-64 h-80 bg-zinc-300 rounded-md overflow-hidden border-2 border-white shadow-lg">
          <div className="flex items-center justify-center h-full text-zinc-500">
            <Image src={photo} alt="photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
