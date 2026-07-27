import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  const frontendTitles = [
    "Coffee Shop Website",
    "Restaurant Website",
    "Bakery Website",
    "Nomad Horizon Travel Website",
    "Diamond Shopping Website",
  ];

  const javaTitles = [
    "Online Shopping Application",
    "Employee Management System",
  ];

  const databaseTitles = [
    "Job Portal Database System",
    "Airline Reservation System",
    "Hospital Management Database",
  ];

  const frontendProjects = projects.filter((project) =>
    frontendTitles.includes(project.title)
  );

  const javaProjects = projects.filter((project) =>
    javaTitles.includes(project.title)
  );

  const databaseProjects = projects.filter((project) =>
    databaseTitles.includes(project.title)
  );

  const SectionHeading = ({ icon: Icon, title, subtitle }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
          <Icon className="text-cyan-400 text-lg" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {title}
          </h3>

          <div className="w-14 h-1 bg-cyan-400 rounded-full mt-2"></div>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-6 mt-4 max-w-2xl">
        {subtitle}
      </p>
    </div>
  );

  const renderCards = (projectList) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projectList.map((project) => (
        <div
          key={project.title}
          className="
            group
            bg-slate-900/60
            backdrop-blur-xl
            border
            border-slate-800
            rounded-2xl
            p-5
            flex
            flex-col
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-cyan-400/50
            hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.35)]
          "
        >
          <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
            {project.title}
          </h3>

          <p className="text-[14px] text-slate-400 leading-6 mb-5 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-2.5
                  py-1
                  rounded-full
                  text-[11px]
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
                  py-2
                  rounded-lg
                  border
                  border-cyan-400/60
                  text-cyan-400
                  text-[13px]
                  md:text-sm
                  font-medium
                  hover:bg-cyan-400
                  hover:text-slate-950
                  transition-all
                  duration-300
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
                  py-2
                  rounded-lg
                  bg-cyan-400
                  text-slate-950
                  text-[13px]
                  md:text-sm
                  font-semibold
                  hover:bg-cyan-300
                  transition-all
                  duration-300
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
  );

  return (
    <section
      id="projects"
      className="relative bg-slate-950 text-white py-20 md:py-24 px-5 md:px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 -right-40 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A collection of frontend applications, Java applications and database
            projects built using modern technologies.
          </p>

        </div>
                {/* ================= Frontend Applications ================= */}

        <div className="mb-16">
          <SectionHeading
            icon={FaLaptopCode}
            title="Frontend Applications"
            subtitle="Modern frontend applications built using React.js, Tailwind CSS, JavaScript and Vite with responsive UI and clean user experience."
          />

          {renderCards(frontendProjects)}
        </div>

        {/* ================= Java Applications ================= */}

        <div className="mb-16">
          <SectionHeading
            icon={FaJava}
            title="Java Applications"
            subtitle="Backend applications developed using Core Java, JSP, Servlets, JDBC and MySQL following object-oriented programming principles."
          />

          {renderCards(javaProjects)}
        </div>

        {/* ================= Database Projects ================= */}

        <div>
          <SectionHeading
            icon={FaDatabase}
            title="Database Projects"
            subtitle="Database systems designed using MySQL, SQL, ER modeling and relational database concepts."
          />

          {renderCards(databaseProjects)}
        </div>

      </div>
    </section>
  );
}

export default Projects;