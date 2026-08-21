import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "project", label: "project" },
  { id: "contact", label: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setNav(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-30 bg-[#0B1220]/90 backdrop-blur border-b border-[#1E293B]">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-16 sm:h-20 px-6 lg:px-12">
        <button onClick={() => scrollToSection("home")}>
          <h1
            className="text-2xl sm:text-3xl font-bold text-[#F3F5F8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Anushka
          </h1>
        </button>

        <ul className="hidden md:flex items-center">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`px-4 py-1.5 rounded-md capitalize text-sm font-medium transition-colors ${
                  active === id
                    ? "text-[#0B1220] bg-[#4FD8C4]"
                    : "text-[#8FA0BD] hover:text-[#F3F5F8]"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setNav(!nav)}
          aria-label={nav ? "Close menu" : "Open menu"}
          className="md:hidden z-40 text-[#F3F5F8]"
        >
          {nav ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>

        {nav && (
          <ul className="flex flex-col justify-center items-center fixed inset-0 w-full h-screen bg-[#0B1220]">
            {links.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`text-3xl capitalize py-4 transition-colors ${
                    active === id ? "text-[#4FD8C4]" : "text-[#F3F5F8]"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
