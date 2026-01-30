import { About } from "./components/About";
import { Contact } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { projects } from "./constants/projects";

export default function Home() {
  return (
    <main className="bg-white min-h-screen pt-20">
      <Header />

      <div id="home">
        <Hero />
      </div>

      <div id="projects">
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-zinc-900 mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((proj, index) => (
              <ProjectCard
                key={index}
                imageUrl={proj.image}
                title={proj.title}
                techs={proj.techs ?? []}
                description={proj.description}
                repositoryUrl={proj.repositoryUrl}
                demoUrl={proj.demoUrl}
              />
            ))}
          </div>
        </section>
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}
