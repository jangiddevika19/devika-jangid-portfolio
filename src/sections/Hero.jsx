import { FaGithub, FaLinkedin, FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const badges = [
    { icon: FaJava, label: "Java", position: "lg:-top-6 lg:-left-8", delay: "0s" },
    { icon: SiSpringboot, label: "Spring Boot", position: "lg:top-1/4 lg:-right-10", delay: "0.6s" },
    { icon: FaReact, label: "React.js", position: "lg:bottom-1/3 lg:-left-10", delay: "1.2s" },
    { icon: SiMysql, label: "MySQL", position: "lg:-bottom-6 lg:right-10", delay: "1.8s" },
    { icon: FaNodeJs, label: "Node.js", position: "lg:top-4 lg:right-1/4", delay: "0.3s" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden pt-16 md:pt-20"
    >
      {/* Local keyframes for floating badges */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-badge { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-20 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
              Open to Full-Time Opportunities
            </span>
          </div>

          <p className="text-cyan-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-4">
            Hi, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            Devika
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Jangid
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React.js Developer",
              2000,
              "Frontend Developer",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl lg:text-3xl text-slate-200 font-medium mb-5"
          />

          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-7 max-w-xl mb-8">
            I build scalable, responsive and user-focused web applications
            using Java, Spring Boot, React.js and MySQL. Passionate about
            writing clean code and turning ideas into efficient, real-world
            products.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
            <a
              href="#projects"
              className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-center transition-all duration-300 hover:bg-cyan-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_-6px_rgba(34,211,238,0.6)]"
            >
              View Projects
            </a>

            <a
              href="/Resume/resume.pdf"
              download
              className="border border-slate-700 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-center transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jangiddevika19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </a>

            <a
              href="https://www.linkedin.com/in/devika-jangid-4b5796310/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* RIGHT — Code card with floating tech badges */}
        <div className="relative mt-8 lg:mt-0">
          {/* Floating tech badges (visible on large screens to avoid clutter on mobile) */}
          {badges.map(({ icon: Icon, label, position, delay }) => (
            <div
              key={label}
              className={`hidden lg:flex float-badge absolute z-10 items-center gap-2 rounded-xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 px-3 py-2 shadow-lg hover:border-cyan-400/50 transition-colors ${position}`}
              style={{ animationDelay: delay }}
            >
              <Icon className="text-cyan-400 text-sm" />
              <span className="font-mono text-[11px] text-slate-300 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}

          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl overflow-hidden hover:border-cyan-400/30 transition-colors duration-500">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-slate-400 text-xs sm:text-sm font-mono">
                Devika.java
              </span>
            </div>

            {/* Code */}
            <div className="p-5 sm:p-8 font-mono text-xs sm:text-sm leading-7 overflow-x-auto">
              <p>
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-cyan-400">Devika</span> {"{"}
              </p>

              <br />

              <p className="ml-4 sm:ml-6">
                String name ={" "}
                <span className="text-green-400">"Devika Jangid"</span>;
              </p>

              <p className="ml-4 sm:ml-6">
                String role ={" "}
                <span className="text-green-400">
                  "Java Full Stack Developer"
                </span>
                ;
              </p>

              <br />

              <p className="ml-4 sm:ml-6 text-cyan-400">Skills = {"{"}</p>

              <p className="ml-8 sm:ml-10">Java,</p>
              <p className="ml-8 sm:ml-10">Spring Boot,</p>
              <p className="ml-8 sm:ml-10">React.js,</p>
              <p className="ml-8 sm:ml-10">MySQL,</p>
              <p className="ml-8 sm:ml-10">Node.js</p>

              <p className="ml-4 sm:ml-6 text-cyan-400">{"}"}</p>

              <br />

              <p>
                {"}"}
                <span className="text-cyan-400 animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;