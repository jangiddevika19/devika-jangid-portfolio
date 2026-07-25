import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaExchangeAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaCogs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";


function Skills() {

  const categories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      items: [
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },

    {
      title: "Backend Development",
      icon: FaServer,
      items: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "Hibernate", icon: FaCogs },
        { name: "JDBC", icon: FaDatabase },
        { name: "REST APIs", icon: FaExchangeAlt },
        { name: "Node.js", icon: FaNodeJs },
      ],
    },

    {
      title: "Database",
      icon: FaDatabase,
      items: [
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },

    {
      title: "Tools & Others",
      icon: FaTools,
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: FaCode },
        { name: "Figma", icon: FaFigma },
      ],
    },
  ];


  return (
    <section
      id="skills"
      className="relative bg-slate-950 text-white py-24 px-6 scroll-mt-24 overflow-hidden"
    >

      <div className="pointer-events-none absolute top-0 -right-40 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="pointer-events-none absolute bottom-0 -left-40 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />


      <div className="relative max-w-6xl mx-auto">


        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skills
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Technologies and tools I use to build scalable web applications.
          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-6">


          {categories.map(({ title, icon: CategoryIcon, items }) => (

            <div
              key={title}
              className="
              bg-slate-900/60
              backdrop-blur-xl
              border border-slate-800
              rounded-2xl
              p-7
              transition-all
              duration-300
              hover:border-cyan-400/50
              hover:-translate-y-0.5
              hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]
              "
            >


              <div className="flex items-center gap-3 mb-6">

                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                  <CategoryIcon className="text-cyan-400 text-base" />

                </div>


                <h3 className="text-lg font-semibold">
                  {title}
                </h3>

              </div>



              <div className="flex flex-wrap gap-3">

                {items.map(({ name, icon: Icon }) => (

                  <div
                    key={name}
                    className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-lg
                    bg-slate-950/60
                    border border-slate-800
                    hover:border-cyan-400/50
                    hover:bg-slate-900
                    hover:-translate-y-0.5
                    transition-all duration-300
                    "
                  >

                    <Icon className="text-cyan-400 text-base" />

                    <span className="text-sm font-medium text-slate-200">
                      {name}
                    </span>

                  </div>

                ))}

              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}


export default Skills;