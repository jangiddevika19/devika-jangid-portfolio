import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaTools
} from "react-icons/fa";


function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-6"
    >

      <div className="max-w-6xl mx-auto">


        <h2
          className="
          text-4xl
          font-bold
          text-center
          text-cyan-400
          mb-12
          "
        >
          About Me
        </h2>



        <div
          className="
          grid
          md:grid-cols-2
          gap-12
          items-center
          "
        >


          {/* Left Content */}

          <div>

            <h3 className="text-3xl font-bold mb-5">
              Java Full Stack Developer
            </h3>


            <p className="text-gray-400 leading-8 mb-5">

              I'm{" "}
              <span className="text-cyan-400 font-semibold">
                Devika Jangid
              </span>
              , a Full Stack Developer passionate about building
              modern, responsive and scalable web applications using
              Java, Spring Boot, React.js and MySQL.

            </p>



            <p className="text-gray-400 leading-8 mb-5">

              I completed my Bachelor of Computer Applications (BCA)
              and Java Full Stack Development training where I gained
              practical knowledge of backend development, databases,
              and real-world application development.

            </p>



            <p className="text-gray-400 leading-8">

              I have built projects including E-Commerce Application,
              Hotel Management System and database-driven applications.
              I focus on writing clean code and improving my backend
              development skills.

            </p>


          </div>






          {/* Journey Card */}

          <div
            className="
            bg-slate-950
            rounded-2xl
            p-8
            border
            border-slate-700
            shadow-xl
            hover:border-cyan-400
            transition
            "
          >


            <h3
              className="
              text-2xl
              font-semibold
              text-cyan-400
              mb-8
              "
            >
              My Journey
            </h3>



            <div className="space-y-7">



              <div className="flex gap-4 items-start">

                <FaGraduationCap className="text-cyan-400 text-3xl mt-1"/>

                <div>
                  <h4 className="font-bold text-lg">
                    Education
                  </h4>

                  <p className="text-gray-400">
                    Bachelor of Computer Applications (BCA)
                  </p>
                </div>

              </div>






              <div className="flex gap-4 items-start">

                <FaLaptopCode className="text-cyan-400 text-3xl mt-1"/>

                <div>
                  <h4 className="font-bold text-lg">
                    Training
                  </h4>

                  <p className="text-gray-400">
                    Java Full Stack Development Training
                  </p>
                </div>

              </div>






              <div className="flex gap-4 items-start">

                <FaBriefcase className="text-cyan-400 text-3xl mt-1"/>

                <div>
                  <h4 className="font-bold text-lg">
                    Internship
                  </h4>

                  <p className="text-gray-400">
                    Application Development Intern - Backend Development
                  </p>
                </div>

              </div>






              <div className="flex gap-4 items-start">

                <FaTools className="text-cyan-400 text-3xl mt-1"/>

                <div>
                  <h4 className="font-bold text-lg">
                    Tech Stack
                  </h4>

                  <p className="text-gray-400">
                    Java • Spring Boot • React.js • MySQL • Git
                  </p>
                </div>

              </div>



            </div>


          </div>



        </div>


      </div>


    </section>
  );
}


export default About;