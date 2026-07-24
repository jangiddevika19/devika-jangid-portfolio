import { Briefcase, GraduationCap } from "lucide-react";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-18 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-cyan-400">
          Experience & Certifications
        </h2>

        <p className="text-center text-gray-400 mt-3 mb-10">
          My internship experience and professional learning journey
        </p>


        <div className="grid md:grid-cols-2 gap-7">


          {/* Internship Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">


            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Briefcase size={28} className="text-cyan-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400">
                  Application Developer Intern
                </h3>

                <p className="text-gray-400">
                  NexaNova Pro Tech
                </p>
              </div>

            </div>


            <p className="text-gray-300 mb-3">
              <span className="font-semibold">
                Duration:
              </span>{" "}
              Jun 2025 – Dec 2025 (6 Months)
            </p>


            <p className="text-gray-400 leading-7 mb-5">
              Selected as an Application Developer Intern at NexaNova Pro Tech.
              Worked on real-world application development, technical training,
              team collaboration and practical software development experience.
            </p>


            <div className="flex flex-wrap gap-2 mb-5">

              {[
                "Java",
                "Web Development",
                "Application Development",
                "Software Development",
                "Team Collaboration",
              ].map((skill) => (

                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs"
                >
                  {skill}
                </span>

              ))}

            </div>


            <a
              href="/certificates/internship-completion.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              View Internship Certificate
            </a>


          </div>




          {/* Diploma Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">


            <div className="flex items-center gap-4 mb-5">

              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <GraduationCap size={28} className="text-cyan-400" />
              </div>


              <div>

                <h3 className="text-xl font-bold text-cyan-400">
                  Java Full Stack Development
                </h3>

                <p className="text-gray-400">
                  FirstBit Solutions, Pune
                </p>

              </div>

            </div>


            <p className="text-gray-300 mb-3">

              <span className="font-semibold">
                Duration:
              </span>{" "}
              Jun 2025 – Jan 2026

            </p>


            <p className="text-gray-400 leading-7 mb-5">

              Successfully completed an industry-oriented Java Full Stack
              Development program with hands-on training in Core Java,
              Spring Boot, Hibernate, MySQL, Angular, HTML, CSS and
              JavaScript through practical projects.

            </p>



            <div className="flex flex-wrap gap-2 mb-5">

              {[
                "Java",
                "Spring Boot",
                "Hibernate",
                "MySQL",
                "Angular",
                "HTML",
                "CSS",
                "JavaScript",
              ].map((skill) => (

                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs"
                >
                  {skill}
                </span>

              ))}

            </div>



            <a
              href="/certificates/diploma-completion.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              View Diploma Certificate
            </a>


          </div>


        </div>

      </div>
    </section>
  );
}

export default Experience;