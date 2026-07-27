import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >

      {/* Glow */}
      <div className="pointer-events-none absolute top-0 -right-40 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />


      <div className="relative max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>


          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A collection of full-stack applications, websites and database
            projects built using modern technologies.
          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


          {projects.map((project)=>(
            
            <div
              key={project.title}
              className="
              group
              bg-slate-900/60
              backdrop-blur-xl
              border
              border-slate-800
              rounded-2xl
              p-6
              flex
              flex-col
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/50
              hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.4)]
              "
            >


              <h3
                className="
                text-xl
                font-semibold
                mb-3
                group-hover:text-cyan-400
                transition
                "
              >
                {project.title}
              </h3>



              <p
                className="
                text-slate-400
                text-sm
                leading-7
                mb-5
                flex-grow
                "
              >
                {project.description}
              </p>




              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech)=>(

                  <span
                    key={tech}
                    className="
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-cyan-400/10
                    border
                    border-cyan-400/20
                    text-cyan-400
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
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-2.5
                    rounded-lg
                    border
                    border-cyan-400/60
                    text-cyan-400
                    text-sm
                    hover:bg-cyan-400
                    hover:text-slate-950
                    transition
                    "
                  >

                    <FaGithub />
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
                    flex
                    items-center
                    justify-center
                    gap-2
                    py-2.5
                    rounded-lg
                    bg-cyan-400
                    text-slate-950
                    text-sm
                    font-semibold
                    hover:bg-cyan-300
                    transition
                    "
                  >

                    <FaExternalLinkAlt />
                    Demo

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