import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-20 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-3">
          Projects
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Some of my featured projects and applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (

            <div
              key={project.title}
              className="
              bg-slate-800
              border
              border-slate-700
              rounded-2xl
              p-5
              flex
              flex-col
              h-full
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-xl
              hover:shadow-cyan-500/20
              "
            >

              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>


              <p className="text-gray-300 text-sm leading-6 mb-5 flex-grow">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="
                    px-2.5
                    py-1
                    rounded-full
                    bg-cyan-500/20
                    text-cyan-300
                    text-xs
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>


              <div className="flex gap-3 mt-auto">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex-1
                    text-center
                    border
                    border-cyan-400
                    text-cyan-400
                    py-2.5
                    rounded-lg
                    text-sm
                    font-medium
                    hover:bg-cyan-400
                    hover:text-slate-900
                    transition
                    "
                  >
                    GitHub
                  </a>
                )}


                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    flex-1
                    text-center
                    bg-cyan-500
                    hover:bg-cyan-600
                    py-2.5
                    rounded-lg
                    text-sm
                    font-semibold
                    transition
                    "
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;