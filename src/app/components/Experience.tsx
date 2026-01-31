"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Section from "./Section"

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Upstride",
    period: "Nov 2025 – Jan 2026",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    points: [
      "Delivered end to end features across frontend and backend services.",
      "Designed REST APIs and authentication flows for production systems.",
      "Worked through Git based workflows, reviews, and releases.",
      "Improved performance and stability of existing modules."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Triland Animation Studio",
    period: "Jul 2025 – Aug 2025",
    stack: ["React", "MongoDB", "GSAP", "HTML", "CSS"],
    points: [
      "Built responsive website sections with interactive motion.",
      "Implemented parallax effects and scroll animations.",
      "Collaborated closely with designers and developers."
    ]
  },
  {
    role: "Full Stack Trainee",
    company: "Maiyyam",
    period: "Nov 2024 – Dec 2024",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    points: [
      "Developed an e commerce platform from scratch.",
      "Implemented authentication and cart systems.",
      "Integrated frontend with backend APIs."
    ]
  }
]

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [width, setWidth] = useState(0)

  // Measure width of one full loop (desktop only)
  useEffect(() => {
    if (!trackRef.current) return

    const el = trackRef.current

    const measure = () => {
      setWidth(el.scrollWidth / 2)
    }

    measure()
    window.addEventListener("resize", measure)

    return () => window.removeEventListener("resize", measure)
  }, [])

  // Start infinite animation (desktop only)
  useEffect(() => {
    if (!width) return

    controls.start({
      x: [0, -width],
      transition: {
        duration: width / 40,
        ease: "linear",
        repeat: Infinity
      }
    })
  }, [width, controls])

  return (
    <Section id="experience">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl mb-16"
        >
          Experience
        </motion.h2>

        {/* ================= MOBILE STACK ================= */}
        <div className="flex flex-col gap-12 md:hidden">
          {experiences.map(exp => (
            <div
              key={exp.company}
              className="
                relative
                rounded-3xl p-8
                bg-surface/70 backdrop-blur
                border border-white/10
              "
            >
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>

              <p className="text-glow mt-1 mb-3">
                {exp.company}
              </p>

              <span
                className="
                  inline-block mb-4
                  px-3 py-1 rounded-full text-xs
                  border border-white/15
                  bg-black/30
                "
              >
                {exp.period}
              </span>

              <ul className="list-disc list-inside text-muted space-y-2 mb-6">
                {exp.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map(tech => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 rounded-full text-xs
                      border border-white/15
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP CAROUSEL ================= */}
        <div
          className="
            relative overflow-hidden
            pb-8
            hidden md:block
          "
        >
          <motion.div
            ref={trackRef}
            animate={controls}
            className="flex gap-12 w-max"
          >
            {[...experiences, ...experiences].map((exp, idx) => (
              <div
                key={`${exp.company}-${idx}`}
                className="
                  min-w-[55vw]

                  group relative
                  rounded-3xl p-12
                  bg-surface/70 backdrop-blur
                  border border-white/10
                  hover:border-glow/40
                  transition
                "
              >
                {/* Hover glow */}
                <div
                  className="
                    absolute inset-0 rounded-3xl
                    opacity-0 group-hover:opacity-100
                    bg-gradient-to-br
                    from-glow/5 via-transparent to-transparent
                    transition
                  "
                />

                <div className="relative z-10">

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-glow">
                        {exp.company}
                      </p>
                    </div>

                    <span
                      className="
                        px-4 py-2 rounded-full text-sm
                        border border-white/15
                        bg-black/30
                      "
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc list-inside text-muted space-y-3 mb-8">
                    {exp.points.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {exp.stack.map(tech => (
                      <span
                        key={tech}
                        className="
                          px-4 py-2 rounded-full text-sm
                          border border-white/15
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </Section>
  )
}
