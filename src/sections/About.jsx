import {
  FaGraduationCap,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

function About() {

  const skillGroups = [
    {
      icon: FaCode,
      title: "Frontend",
      skills: [
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
      ],
    },

    {
      icon: FaServer,
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "JDBC",
        "Node.js",
      ],
    },

    {
      icon: FaDatabase,
      title: "Database",
      skills: [
        "MySQL",
        "MongoDB",
      ],
    },
  ];


  const highlightCards = [

    {
      icon: FaGraduationCap,
      title: "Education",
      primary: "Bachelor of Computer Applications",
      secondary: "MDSU Ajmer • BCA Graduate",
    },


    {
      icon: FaCode,
      title: "Full Stack Development",
      primary: "Java, Spring Boot, React.js, MySQL, MongoDB",
      secondary: "Building scalable web applications",
    },

  ];


  const stats = [
    ["6", "Months Internship"],
    ["8+", "Projects Built"],
    ["10+", "Technologies"],
    ["3+", "Full Stack Apps"],
  ];


  return (

    <section
      id="about"
      className="relative bg-slate-950 text-white py-20 md:py-28 px-5 overflow-hidden"
    >


      {/* Background Glow */}

      <div className="pointer-events-none absolute top-1/3 -right-40 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="pointer-events-none absolute bottom-0 -left-40 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />


      <div className="relative max-w-6xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-16">


          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">

            Who I{" "}

            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              am
            </span>

          </h2>


          <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-7">

            A Java Full Stack Developer focused on building scalable,
            secure and user-friendly web applications using modern
            technologies.

          </p>


        </div>



        {/* Main */}

        <div className="grid lg:grid-cols-2 gap-8 items-start">



          {/* LEFT */}

          <div>


            <h3 className="text-2xl md:text-3xl font-bold mb-5">

              Java Full Stack Developer

            </h3>



            <p className="text-slate-300 text-sm md:text-base leading-8 mb-5">

              Hi, I'm{" "}

              <span className="text-cyan-400 font-semibold">
                Devika Jangid
              </span>

              , a Java Full Stack Developer and BCA graduate
              with hands-on experience in React.js, Spring Boot,
              MySQL and MongoDB.

            </p>



            <p className="text-slate-400 text-sm md:text-base leading-8 mb-5">

              I build complete web applications including REST APIs,
              database solutions and responsive user interfaces.
              My focus is on writing clean code, solving problems
              and creating reliable software solutions.

            </p>



            <p className="text-slate-400 text-sm md:text-base leading-8 mb-7">

              I am looking for a full-time developer role where I can
              contribute to real-world projects and continue growing
              as a software developer.

            </p>





            {/* Skills */}

            <div className="grid sm:grid-cols-3 gap-4">


              {skillGroups.map(({ icon: Icon, title, skills }) => (

                <div
                  key={title}
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-xl p-5 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
                >


                  <Icon className="text-cyan-400 text-2xl mb-3"/>


                  <h4 className="text-base font-semibold mb-2">
                    {title}
                  </h4>


                  <p className="text-slate-400 text-sm leading-7">

                    {skills.map((skill,i)=>(

                      <span key={skill}>

                        {skill}

                        {i < skills.length-1 && <br />}

                      </span>

                    ))}

                  </p>


                </div>

              ))}


            </div>


          </div>





          {/* RIGHT CARDS */}

          <div className="grid gap-4">


            {highlightCards.map(
              ({ icon: Icon, title, primary, secondary }) => (

                <div
                  key={title}
                  className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/50 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] transition-all duration-300"
                >


                  <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">

                    <Icon className="text-cyan-400 text-lg" />

                  </div>


                  <h4 className="text-base font-semibold mb-2">
                    {title}
                  </h4>


                  <p className="text-slate-300 text-sm leading-6">
                    {primary}
                  </p>


                  <span className="block text-slate-500 text-xs mt-2 font-mono">
                    {secondary}
                  </span>


                </div>

              )
            )}


          </div>


        </div>





        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">


          {stats.map(([value,label])=>(

            <div
              key={label}
              className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-xl py-6 text-center hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
            >

              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {value}
              </h3>


              <p className="text-slate-400 text-sm">
                {label}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default About;