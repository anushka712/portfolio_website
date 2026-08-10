import React from "react";
import self from "../assets/self.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin, FiArrowRight, FiDownload } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

/**
 * Fonts used below: 'Space Grotesk' (display), 'JetBrains Mono' (labels/status),
 * 'Inter' (body). Add this once to index.html <head> if not already present:
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
 *
 * If skipped, everything falls back gracefully to system fonts.
 */

const stack = [
  { icon: SiReact, label: "React.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiSocketdotio, label: "Socket.io" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const ReHome = () => {
  return (
    <div
      id="home"
      className="bg-[#0B1220] text-[#F3F5F8] scroll-mt-16 sm:scroll-mt-20"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
    >
      {/* HERO */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-6 max-w-6xl mx-auto px-6 lg:px-12 pt-14 lg:pt-28 pb-16 lg:pb-24 min-h-[calc(100vh-4rem)] lg:min-h-0">
        <div className="w-full lg:w-1/2">
          {/* status eyebrow — reads like her own apps' presence indicator */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#121B2E] px-3 py-1.5 text-xs tracking-wide text-[#8FE3D3]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4FD8C4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4FD8C4]"></span>
            </span>
            status: open to full-stack roles
          </div>

          <h1
            className="mt-6 text-4xl sm:text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Anushka Aryal
          </h1>

          <p
            className="mt-2 text-2xl sm:text-3xl font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-[#4FD8C4]">Full-Stack</span>{" "}
            <span className="text-[#A78BFA]">MERN Developer</span>
          </p>

          <p className="mt-5 text-[#96A3B8] leading-relaxed max-w-md">
            I build real-time, production-grade web systems end to end — from
            React interfaces down to the Node APIs and databases behind them.
            Currently shipping chat and logistics platforms at{" "}
            <span className="text-[#F3F5F8]">Nepal Can Code</span>.
          </p>

          {/* tech chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#1E293B] bg-[#121B2E] px-2.5 py-1 text-xs text-[#B8C2D6]"
              >
                <Icon className="text-[#4FD8C4]" size={13} />
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToSection("project")}
              className="inline-flex items-center gap-2 rounded-lg bg-[#4FD8C4] px-5 py-2.5 text-sm font-semibold text-[#0B1220] hover:bg-[#6EE3D2] transition-colors"
            >
              View my work <FiArrowRight />
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1E293B] px-5 py-2.5 text-sm font-semibold text-[#F3F5F8] hover:border-[#4FD8C4] transition-colors"
            >
              Resume <FiDownload />
            </a>
          </div>

          {/* social row */}
          <div className="mt-8 flex items-center gap-5 text-[#8FA0BD]">
            <a
              href="https://www.linkedin.com/in/anushka-aryal-27916722a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4FD8C4] hover:scale-105 duration-200"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="https://github.com/anushka712"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4FD8C4] hover:scale-105 duration-200"
            >
              <BsGithub size={22} />
            </a>
            <a
              href="mailto:aryalanushka2020@gmail.com"
              className="hover:text-[#4FD8C4] hover:scale-105 duration-200"
            >
              <AiOutlineMail size={22} />
            </a>
          </div>
        </div>

        {/* PHOTO + signature status card */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-56 sm:w-72 lg:w-full lg:max-w-sm">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#4FD8C4]/20 to-[#A78BFA]/20 blur-xl" />
            <img
              src={self}
              alt="Anushka Aryal"
              className="relative rounded-2xl w-full object-cover border border-[#1E293B]"
            />

            {/* floating "live product" card — echoes her own chat/notification UI work */}
            <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-[#121B2E] border border-[#1E293B] rounded-xl px-4 py-3 shadow-lg shadow-black/30 max-w-[220px]">
              <div
                className="flex items-center gap-1.5 text-[10px] text-[#4FD8C4] tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#4FD8C4]" />
                LIVE PRODUCT
              </div>
              <p className="mt-1 text-sm font-medium text-[#F3F5F8]">
                CAN Logistics
              </p>
              <p className="text-xs text-[#8FA0BD]">
                Order tracking, live in production
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReHome;
