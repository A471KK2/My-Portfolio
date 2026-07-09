"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >


          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Kunal Kothe
          </h1>

          <div className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-8 h-12">
            <TypeAnimation
              sequence={[
                "Data Science Graduate",
                2000,
                "AI-Augmented Developer",
                2000,
                "AI Generalist",
                2000,
                "Product Builder",
                2000,
                "Freelance AI Builder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
            Data Science graduate focused on AI-assisted product development,
            rapid prototyping, and building practical solutions that solve
            real-world problems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">

            <a
              href="https://drive.google.com/drive/folders/1pBBFW7ruJYQzaJVubGEttVO2yFjBtRVO?usp=sharing"
              className="flex items-center gap-2 rounded-xl border px-6 py-3 hover:scale-105 transition"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="https://github.com/A471KK2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border px-6 py-3 hover:scale-105 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-kothe-61a71a194/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border px-6 py-3 hover:scale-105 transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">

            <div className="rounded-xl border p-4">
              <h3 className="text-3xl font-bold">1</h3>
              <p className="text-muted-foreground">
                Internships
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-muted-foreground">
                Projects
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <h3 className="text-3xl font-bold">2026</h3>
              <p className="text-muted-foreground">
                Graduate
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}