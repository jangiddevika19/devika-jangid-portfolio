import { useState } from "react";
import devikaLogo from "../assets/images/devika_logo.jpeg";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];


  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white shadow-lg z-50 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
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

          {menuItems.map((item) => (

            <li key={item.name}>

              <a
                href={item.link}
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
                {item.name}
              </a>

            </li>

          ))}

        </ul>




        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
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




      {/* Mobile Menu */}

      {isOpen && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col px-6 py-5 gap-5 font-medium">

            {menuItems.map((item) => (

              <li key={item.name}>

                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="
                  block
                  hover:text-cyan-400
                  transition
                  "
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

        </div>

      )}


    </nav>
  );
}

export default Navbar;