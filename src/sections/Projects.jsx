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
    "Hospital Management System",
    "Online Shopping Application",
    "Employee Management System",
  ];


  const databaseTitles = [
    "Job Portal Database System",
    "Airline Reservation System",
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

    <div className="mb-10">

      <div className="flex items-center gap-4">

        <div
          className="
          w-11 h-11
          rounded-xl
          bg-cyan-400/10
          border border-cyan-400/20
          flex items-center justify-center
          "
        >

          <Icon className="text-cyan-400 text-xl" />

        </div>


        <div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {title}
          </h3>

          <div className="w-14 h-1 bg-cyan-400 rounded-full mt-2"></div>

        </div>

      </div>


      <p className="text-slate-400 mt-3 text-sm sm:text-base leading-6 max-w-2xl">
        {subtitle}
      </p>


    </div>

  );



  const renderCards = (projectList) => (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

      {projectList.map((project) => (

        <div
          key={project.title}
          className="
          group
          bg-slate-900/70
          backdrop-blur-xl
          border border-slate-800
          rounded-2xl
          p-5
          flex flex-col
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-400/50
          hover:shadow-[0_12px_28px_rgba(34,211,238,0.18)]
          "
        >

          <h3
            className="
            text-lg
            sm:text-xl
            font-semibold
            leading-snug
            mb-3
            group-hover:text-cyan-400
            "
          >
            {project.title}
          </h3>


          <p
            className="
            text-slate-400
            text-sm
            leading-6
            mb-5
            flex-grow
            "
          >
            {project.description}
          </p>



          {project.tech && project.tech.length > 0 && (

            <div className="flex flex-wrap gap-2 mb-5">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="
                  px-2.5
                  py-1
                  rounded-full
                  text-[11px]
                  font-medium
                  bg-cyan-400/10
                  border border-cyan-400/20
                  text-cyan-300
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          )}



          <div className="flex gap-3 mt-auto">


            {project.github && (

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                flex-1
                flex items-center justify-center gap-2
                py-2.5
                rounded-lg
                border border-cyan-400/60
                text-cyan-400
                text-sm
                font-medium
                hover:bg-cyan-400
                hover:text-slate-950
                transition-all
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
                flex items-center justify-center gap-2
                py-2.5
                rounded-lg
                bg-cyan-400
                text-slate-950
                text-sm
                font-semibold
                hover:bg-cyan-300
                transition-all
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
      className="
      relative
      bg-slate-950
      text-white
      py-16 md:py-24
      px-5 sm:px-6
      overflow-hidden
      "
    >

      <div className="relative max-w-6xl mx-auto">


        <div className="text-center mb-14">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">

            My <span className="text-cyan-400">Projects</span>

          </h2>


          <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto">

            Full-stack applications, frontend websites and database systems
            built using modern technologies.

          </p>

        </div>



        <div className="mb-16">

          <SectionHeading
            icon={FaLaptopCode}
            title="Frontend Applications"
            subtitle="Modern frontend applications built using React.js, JavaScript and Tailwind CSS with responsive UI development using HTML and CSS."
          />

          {renderCards(frontendProjects)}

        </div>




        <div className="mb-16">

          <SectionHeading
            icon={FaJava}
            title="Java Applications"
            subtitle="Java and full-stack applications built using Core Java, Spring Boot, REST APIs, JSP, Servlets, JDBC, React and MySQL."
          />

          {renderCards(javaProjects)}

        </div>




        <div>

          <SectionHeading
            icon={FaDatabase}
            title="Database Projects"
            subtitle="Database systems designed using MySQL, SQL queries, ER diagrams and relational database concepts."
          />

          {renderCards(databaseProjects)}

        </div>


      </div>

    </section>

  );

}


export default Projects;