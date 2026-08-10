import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin, FiMapPin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const inputClass =
  "w-full bg-[#0B1220] border border-[#1E293B] rounded-lg px-4 py-2.5 text-[#F3F5F8] placeholder:text-[#5B6B85] mt-2 focus:outline-none focus:border-[#4FD8C4] transition-colors";

const SectionLabel = ({ children }) => (
  <p
    className="text-xs tracking-widest text-[#4FD8C4] uppercase"
    style={{ fontFamily: "'JetBrains Mono', monospace" }}
  >
    {children}
  </p>
);

const contactLinks = [
  {
    icon: AiOutlineMail,
    label: "aryalanushka2020@gmail.com",
    href: "mailto:aryalanushka2020@gmail.com",
  },
  {
    icon: FiLinkedin,
    label: "linkedin.com/in/anushka-aryal",
    href: "https://www.linkedin.com/in/anushka-aryal-27916722a/",
  },
  {
    icon: BsGithub,
    label: "github.com/anushka712",
    href: "https://github.com/anushka712",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xjvnerer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission failed", err);
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="bg-[#0B1220] text-[#F3F5F8] border-t border-[#1E293B] scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 sm:py-20">
        <SectionLabel>Contact</SectionLabel>
        <h2
          className="mt-2 text-3xl sm:text-4xl font-bold"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Let's connect
        </h2>

        <div className="mt-10 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 lg:gap-16">
          {/* left: context + direct links */}
          <div>
            <p className="text-[#96A3B8] leading-relaxed max-w-sm">
              Send a message and I'll get back to you — or reach me directly
              below.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-[#8FA0BD]">
              <FiMapPin className="text-[#4FD8C4]" />
              Kathmandu, Nepal
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 text-sm text-[#B8C2D6] hover:text-[#4FD8C4] transition-colors"
                >
                  <span className="flex items-center justify-center h-9 w-9 rounded-lg border border-[#1E293B] bg-[#121B2E] group-hover:border-[#4FD8C4] transition-colors">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* right: form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#1E293B] p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className={inputClass}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className={inputClass}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              rows={5}
              required
              className={inputClass}
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full sm:w-auto rounded-lg bg-[#4FD8C4] px-6 py-2.5 font-semibold text-[#0B1220] hover:bg-[#6EE3D2] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "sent" && (
              <p className="mt-3 text-sm text-[#8FE3D3]">
                Thanks — your message is in my inbox. I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm text-[#FCA5A5]">
                Something went wrong sending that — try again, or email me
                directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
