import skills from "../data/skills";

function Skills() {
  const categories = [
    {
      title: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "JDBC",
        "Servlets",
      ],
    },
    {
      title: "Frontend",
      items: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Database & Tools",
      items: [
        "MySQL",
        "Git",
        "VS Code",
        "Eclipse",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14 max-w-2xl mx-auto">
          Technologies I use to build modern, scalable and responsive web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-7
                transition-all
                duration-300
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/10

                ${
                  index === 2
                    ? "md:col-span-2"
                    : ""
                }
              `}
            >

              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((name) => {

                  const skill = skills.find(
                    (item) => item.name === name
                  );

                  if (!skill) return null;

                  const Icon = skill.icon;

                  return (

                    <div
                      key={name}
                      className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      bg-slate-800
                      border
                      border-slate-700
                      hover:border-cyan-400
                      hover:bg-slate-700
                      transition-all
                      duration-300
                      "
                    >

                      <Icon className="text-cyan-400 text-base" />

                      <span className="text-sm font-medium text-gray-200">
                        {name}
                      </span>

                    </div>

                  );

                })}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;