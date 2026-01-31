"use client"

import { motion } from "framer-motion"
import Section from "./Section"

const categories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS", "C"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express", "Django"]
  },
  {
    title: "Tools",
    skills: ["MongoDB", "Docker", "Git", "GitHub", "Power BI"]
  }
]

export default function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="
                rounded-2xl p-8
                bg-surface/70 backdrop-blur
                border border-white/10
                hover:border-glow/40
                transition
              "
            >
              <h3 className="text-xl mb-6 text-glow font-semibold">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    className="
                      px-4 py-2 rounded-full text-sm
                      border border-white/15
                      bg-black/30
                      hover:border-glow/60
                      hover:text-glow
                      transition
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
