"use client"

import { motion } from "framer-motion"
import Section from "./Section"

export default function Contact() {
  return (
    <Section id="contact">
      <footer className="relative">

        {/* top glow divider */}
        <div className="
          mx-auto mb-20
          h-px w-3/4
          bg-gradient-to-r
          from-transparent
          via-glow
          to-transparent
        " />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            max-w-6xl mx-auto
            flex flex-col md:flex-row
            text-center md:text-left
            items-center justify-between
            gap-10
            px-6
          "
        >
          {/* Left */}
          <div>
            <h3 className="font-heading text-2xl mb-2">
              Praneeth VP
            </h3>
            <p className="text-muted">
              Full Stack Developer
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <a
              href="mailto:vppraneeth2601@gmail.com"
              className="
                text-glow font-semibold text-lg
                hover:underline
              "
            >
              vppraneeth2601@gmail.com
            </a>
          </div>

          {/* Right */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/praneeth-v-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-muted hover:text-glow
                transition
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Praneeth2607"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-muted hover:text-glow
                transition
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* bottom line */}
        <div className="mt-20 text-center text-xs text-muted">
          © {new Date().getFullYear()} Praneeth VP. All rights reserved.
        </div>

      </footer>
    </Section>
  )
}
