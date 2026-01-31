"use client"

import { motion } from "framer-motion"
import Section from "./Section"
import Image from "next/image"

const projects = [
  {
    title: "Healthcare Appointment Scheduling System",
    description:
      "A full stack healthcare appointment platform with patient and doctor workflows, calendar based booking, and status driven scheduling.",
    image: "/projects/healthcare.png",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Praneeth2607/Appointment-Scheduling-System"
  },
  {
    title: "UniLeave",
    description:
      "A university leave management system with student applications, faculty approvals, and admin analytics dashboards.",
    image: "/projects/unileave.png",
    stack: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Praneeth2607/UniLeave"
  },
  {
    title: "Animated Product Landing Page",
    description:
      "A scroll driven animated landing page built to showcase a product reveal experience with smooth transitions and visual storytelling.",
    image: "/projects/animation.png",
    stack: ["React", "GSAP", "CSS"],
    link: "https://github.com/Praneeth2607/Animated-product-landing"
  }
]


export default function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl mb-24"
        >
          Projects
        </motion.h2>

        <div className="flex flex-col gap-40">
          {projects.map((project, idx) => {
            const reversed = idx % 2 === 1

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                  ${reversed ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* Image */}
                <div className="relative group rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-glow/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted mb-6 max-w-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2 rounded-full text-sm
                          border border-white/15
                          hover:border-glow/60
                          transition
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block
                        px-6 py-3 rounded-xl
                        border border-glow/40
                        hover:bg-glow/10
                        hover:text-glow
                        transition
                    "
                    >
                    View on GitHub →
                    </a>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </Section>
  )
}
