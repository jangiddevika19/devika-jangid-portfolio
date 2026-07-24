import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}

        <div>

          <p className="text-cyan-400 tracking-[5px] text-sm font-semibold mb-8">
            JAVA FULL STACK DEVELOPER
          </p>


          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Devika
            <br />
            <span className="text-cyan-400">
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
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl text-slate-200 font-medium mb-6"
          />


          <p className="text-slate-400 text-lg leading-8 max-w-xl mb-8">
            I build scalable, responsive and user-focused web applications
            using Java, Spring Boot, React.js and MySQL. Passionate about
            writing clean code and developing efficient, real-world
            applications.
          </p>


          <div className="flex gap-5 mb-10">

            <a
              href="#projects"
              className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
            >
              View Projects
            </a>


            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              Contact Me
            </a>

          </div>


          <div className="flex gap-6 text-3xl">

            <a
              href="#"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>


            <a
              href="#"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>



        {/* Right Code Card */}


        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">

          <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-800">

            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>

            <span className="ml-5 text-slate-400 text-sm">
              Devika.java
            </span>

          </div>


          <div className="p-8 font-mono text-sm leading-8">

            <p>
              <span className="text-purple-400">
                public class
              </span>{" "}
              <span className="text-cyan-400">
                Devika
              </span>{" "}
              {"{"}
            </p>


            <br />


            <p className="ml-5">
              String name ={" "}
              <span className="text-green-400">
                "Devika Jangid"
              </span>;
            </p>


            <p className="ml-5">
              String role ={" "}
              <span className="text-green-400">
                "Java Full Stack Developer"
              </span>;
            </p>


            <br />


            <p className="ml-5 text-cyan-400">
              Skills = {"{"}
            </p>


            <p className="ml-10">
              Java,
            </p>

            <p className="ml-10">
              Spring Boot,
            </p>

            <p className="ml-10">
              React.js,
            </p>

            <p className="ml-10">
              MySQL,
            </p>

            <p className="ml-10">
              Git
            </p>


            <p className="ml-5 text-cyan-400">
              {"}"}
            </p>


            <br />


            <p>
              {"}"}
            </p>

          </div>

        </div>


      </div>
    </section>
  );
}

export default Hero;