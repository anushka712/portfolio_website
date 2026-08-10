import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiVisualstudiocode,
  SiGithub,
  SiGit,
} from "react-icons/si";

const skills = [
  { icon: SiReact, label: "React.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiSocketdotio, label: "Socket.io" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
];

const tools = [
  { icon: SiVisualstudiocode, label: "VS Code" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiGit, label: "Git" },
];

const SectionLabel = ({ children }) => (
  <p
    className="text-xs tracking-widest text-[#4FD8C4] uppercase"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    {children}
  </p>
);

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#0B1220] text-[#F3F5F8] border-t border-[#1E293B] scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 sm:py-20">
        <SectionLabel>About</SectionLabel>
        <h2
          className="mt-2 text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          A quick glimpse
        </h2>

        {/* bio */}
        <div className="mt-10 grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-10">
          <p className="font-semibold hidden sm:block">Who I am</p>
          <p className="text-[#96A3B8] leading-relaxed max-w-2xl">
            Hey, I'm Anushka — a full-stack MERN developer based in Kathmandu. I
            graduated with a BSc in Computer Science and Information Technology,
            and I currently work as a Full Stack Developer at Nepal Can Code,
            where I build real-time, production web systems from the database up
            to the interface.
            <br />
            <br />I like the parts of engineering most people skip past — order
            tracking logic, real-time sync, queue-based background jobs — and I
            try to ship things that hold up outside a demo.
          </p>
        </div>

        {/* skills */}
        <div className="mt-14 grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-10">
          <p className="font-semibold">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E293B] bg-[#121B2E] px-3 py-2 text-sm text-[#B8C2D6]"
              >
                <Icon className="text-[#4FD8C4]" size={16} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* tools */}
        <div className="mt-10 grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-10">
          <p className="font-semibold">Tools</p>
          <div className="flex flex-wrap gap-2">
            {tools.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-[#1E293B] bg-[#121B2E] px-3 py-2 text-sm text-[#B8C2D6]"
              >
                <Icon className="text-[#A78BFA]" size={16} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* education */}
        <div className="mt-14 grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-10">
          <p className="font-semibold">Education</p>
          <div className="rounded-xl border border-[#1E293B] bg-[#121B2E] p-5">
            <p className="font-medium">
              BSc Computer Science and Information Technology (BSc CSIT)
            </p>
            <p className="text-sm text-[#96A3B8] mt-1">
              Madan Bhandari Memorial College · Kathmandu
            </p>
            <p
              className="text-xs text-[#8FA0BD] mt-2"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              2020 — 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
