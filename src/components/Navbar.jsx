import { useState, useEffect, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import devikaLogo from "../assets/images/devika_logo.jpeg";

const menuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for navbar background intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = menuItems
      .map((item) => document.querySelector(item.link))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-lg shadow-black/20"
          : "bg-slate-950/40 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 group"
        >
          <img
            src={devikaLogo}
            alt="Devika Jangid"
            className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400/70 group-hover:border-cyan-400 transition-colors"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
              Devika Jangid
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
              Java Full Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
          {menuItems.map((item) => {
            const isActive = activeSection === item.link.slice(1);

            return (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`relative py-1 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:text-cyan-400 hover:after:w-full ${
                    isActive
                      ? "text-cyan-400 after:w-full drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      : "text-slate-300 after:w-0"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
        >
          {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-5 gap-1 font-medium text-sm">
          {menuItems.map((item) => {
            const isActive = activeSection === item.link.slice(1);

            return (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={closeMenu}
                  className={`block py-2.5 px-3 rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-slate-900/60"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;