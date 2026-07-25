import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

function Experience() {

  const timeline = [

    {
      icon: FaBriefcase,
      title: "Application Developer Intern",
      org: "NexaNova Pro Tech",
      duration: "Jun 2025 – Dec 2025",

      points: [
        "Worked on real-world application development tasks",
        "Built and improved application features",
        "Debugged issues and maintained clean code",
        "Collaborated within the development workflow",
      ],

      tech: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
      ],

      certificate:
        "/certificates/internship-completion.pdf",
    },


    {
      icon: FaGraduationCap,
      title: "Java Full Stack Development Diploma",
      org: "FirstBit Solutions, Pune",
      duration: "June 2025 – Jan 2026",

      points: [
        "Completed industry-oriented full stack development training",
        "Built frontend and backend applications",
        "Worked with Java, Spring Boot, React.js and databases",
      ],

      tech: [
        "Java",
        "Spring Boot",
        "React.js",
        "Hibernate",
        "MySQL",
      ],

      certificate:
        "/certificates/diploma-completion.pdf",
    },

  ];



  return (

    <section
      id="experience"
      className="relative bg-slate-950 text-white py-20 md:py-28 px-5 overflow-hidden"
    >


      {/* Background Glow */}

      <div className="pointer-events-none absolute top-1/4 -left-40 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="pointer-events-none absolute bottom-0 -right-40 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />




      <div className="relative max-w-4xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-16">


          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">

            Experience

          </h2>


          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">

            Professional journey and hands-on development experience.

          </p>


        </div>





        {/* Timeline */}


        <div className="relative">


          {/* Line */}

          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-slate-800 to-transparent" />



          <div className="space-y-10">


            {
              timeline.map(
                ({
                  icon: Icon,
                  title,
                  org,
                  duration,
                  points,
                  tech,
                  certificate,
                }) => (


                  <div
                    key={title}
                    className="relative pl-20"
                  >


                    {/* Icon */}

                    <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-cyan-400/30 flex items-center justify-center"
                    >

                      <Icon className="text-cyan-400 text-lg" />

                    </div>





                    {/* Card */}

                    <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/50 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] transition-all duration-300">


                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">


                        <div>


                          <h3 className="text-lg font-semibold">

                            {title}

                          </h3>


                          <p className="text-cyan-400 text-sm">

                            {org}

                          </p>


                        </div>




                        <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-3 py-1.5 rounded-full text-xs">


                          <FaCalendarAlt />

                          {duration}


                        </div>


                      </div>





                      <ul className="mt-4 space-y-2 mb-5">


                        {
                          points.map((point)=>(
                            
                            <li
                              key={point}
                              className="flex items-start gap-2 text-slate-400 text-sm leading-6"
                            >

                              <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400" />

                              {point}

                            </li>

                          ))
                        }


                      </ul>





                      <div className="flex flex-wrap gap-2 mb-5">


                        {
                          tech.map((item)=>(

                            <span
                              key={item}
                              className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-[11px]"
                            >

                              {item}

                            </span>

                          ))
                        }


                      </div>





                      <a
                        href={certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-400/60 text-cyan-400 text-sm hover:bg-cyan-400 hover:text-slate-950 transition"
                      >

                        <FaAward />

                        View Certificate

                      </a>



                    </div>


                  </div>


                )
              )
            }


          </div>


        </div>


      </div>


    </section>


  );

}


export default Experience;