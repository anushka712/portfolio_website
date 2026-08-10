import React from "react";
import { FiExternalLink } from "react-icons/fi";

import ecom from "../assets/ecom.png";
import crud from "../assets/crud.png";
import expense from "../assets/expense.png";
import todo from "../assets/todo.png";

const SectionLabel = ({ children }) => (
  <p
    className="text-xs tracking-widest text-[#4FD8C4] uppercase"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    {children}
  </p>
);

const professionalWork = [
  {
    name: "CAN Chat",
    url: "https://can-chat-82ye.onrender.com",
    blurb:
      "Real-time messaging app with reactions, mentions, scheduled reminders via cron jobs, and push notifications as an embeddable PWA.",
    tags: ["Socket.io", "PWA", "Cron Jobs"],
    status: "Live",
  },
  {
    name: "CAN Logistics",
    url: "https://commerce.thecanbrand.com",
    blurb:
      "End-to-end logistics platform from order pickup to delivery, with Khalti payments, vendor domain verification, and full order tracking history.",
    tags: ["Khalti", "Order Tracking", "Vendor Tools"],
    status: "Live",
  },
  {
    name: "Bulk Email App",
    url: "https://github.com/anushka712/bulk_email_app",
    blurb:
      "Queue-based bulk email system using RabbitMQ for async processing, JWT auth with email verification, and real-time delivery logs via Socket.IO.",
    tags: ["RabbitMQ", "JWT", "Socket.IO"],
    status: "GitHub",
  },
];

const practiceProjects = [
  {
    name: "Ecommerce Website",
    url: "https://ecommerce-website-ecom.vercel.app/",
    image: ecom,
    blurb: "A shopping front end built with HTML, CSS, JavaScript and React.",
  },
  {
    name: "React + Express + MySQL CRUD",
    url: "https://crud-frontend-iota.vercel.app",
    image: crud,
    blurb:
      "A full CRUD app pairing a React frontend with an Express API and MySQL for storage.",
  },
  {
    name: "Expense Tracker",
    url: "https://expense-tracker-anushka.vercel.app",
    image: expense,
    blurb: "A simple web app to track income and expenses.",
  },
  {
    name: "Todo App",
    url: "https://todo-app-anushka.vercel.app",
    image: todo,
    blurb:
      "A React todo app for managing tasks with due dates and priority levels.",
  },
];

const Project = () => {
  return (
    <div
      id="project"
      className="bg-[#0B1220] text-[#F3F5F8] border-t border-[#1E293B] scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 sm:py-20">
        <SectionLabel>Projects</SectionLabel>
        <h2
          className="mt-2 text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          What I've been building
        </h2>

        {/* professional work */}
        <p className="mt-12 mb-4 text-sm font-semibold text-[#8FA0BD] uppercase tracking-wide">
          Professional work
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {professionalWork.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-[#1E293B] bg-[#121B2E] p-6 hover:border-[#4FD8C4] transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center gap-1.5 text-[10px] text-[#4FD8C4] tracking-wide"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4FD8C4]" />
                  {p.status.toUpperCase()}
                </div>
                <FiExternalLink className="text-[#8FA0BD] group-hover:text-[#4FD8C4] transition-colors" />
              </div>

              <p
                className="mt-3 text-lg font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {p.name}
              </p>
              <p className="mt-2 text-sm text-[#96A3B8] leading-relaxed flex-1">
                {p.blurb}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-md border border-[#1E293B] px-2 py-1 text-[#8FA0BD]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* practice projects */}
        <p className="mt-16 mb-4 text-sm font-semibold text-[#8FA0BD] uppercase tracking-wide">
          Practice projects
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {practiceProjects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-[#1E293B] bg-[#121B2E] p-5 hover:border-[#4FD8C4] transition-colors"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full sm:w-32 h-32 object-cover rounded-lg border border-[#1E293B]"
              />
              <div className="flex-1">
                <p className="font-semibold flex items-center gap-1.5">
                  {p.name}
                  <FiExternalLink
                    size={14}
                    className="text-[#8FA0BD] group-hover:text-[#4FD8C4] transition-colors"
                  />
                </p>
                <p className="mt-2 text-sm text-[#96A3B8] leading-relaxed">
                  {p.blurb}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
