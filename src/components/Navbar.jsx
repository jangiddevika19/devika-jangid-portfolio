import devikaLogo from "../assets/images/devika_logo.jpeg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white shadow-lg z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <img
            src={devikaLogo}
            alt="Devika Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400"
          />

          <span className="text-2xl font-bold text-cyan-400 tracking-wide">
            Devika Jangid
          </span>
        </a>


        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <a
              href="#home"
              className="
              relative
              transition-all
              duration-300
              hover:text-cyan-400
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-0.5
              after:bg-cyan-400
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              Home
            </a>
          </li>


          <li>
            <a
              href="#about"
              className="
              relative
              transition-all
              duration-300
              hover:text-cyan-400
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-0.5
              after:bg-cyan-400
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              About
            </a>
          </li>


          <li>
            <a
              href="#skills"
              className="
              relative
              transition-all
              duration-300
              hover:text-cyan-400
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-0.5
              after:bg-cyan-400
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              Skills
            </a>
          </li>


          <li>
            <a
              href="#projects"
              className="
              relative
              transition-all
              duration-300
              hover:text-cyan-400
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-0.5
              after:bg-cyan-400
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              Projects
            </a>
          </li>


          <li>
            <a
              href="#contact"
              className="
              relative
              transition-all
              duration-300
              hover:text-cyan-400
              after:absolute
              after:left-0
              after:-bottom-1
              after:w-0
              after:h-0.5
              after:bg-cyan-400
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              Contact
            </a>
          </li>

        </ul>


        {/* Mobile Menu Button */}

        <button
          className="
          md:hidden
          text-3xl
          hover:text-cyan-400
          transition
          "
        >
          ☰
        </button>


      </div>
    </nav>
  );
}

export default Navbar;