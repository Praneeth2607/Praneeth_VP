"use client"

import { motion } from "framer-motion"
import Section from "./Section"

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative max-w-6xl mx-auto
          rounded-3xl p-10 md:p-16
          bg-surface/70 backdrop-blur
          border border-white/10
          
        "
      >
        {/* glow behind whole card */}
        <div className="absolute inset-0 rounded-3xl bg-glow/10 blur-3xl -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] text-center md:text-left gap-10 items-center">
          {/* LEFT TITLE */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              font-heading text-4xl md:text-6xl
              tracking-widest uppercase
              whitespace-nowrap
              text-white/80
            "
          >
            ABOUT <span className="text-glow">ME</span>
          </motion.h2>

          {/* GLOWING LINE */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              hidden md:block
              w-0.75 h-full
              bg-glow rounded-full
              origin-top
              ml-6
              shadow-[0_0_20px_rgba(109,255,179,0.6)]
            "
          />

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              I am a full stack developer and computer science undergraduate
              who enjoys building production ready applications across the
              stack. I have worked with React, Node, Express, Django, and
              MongoDB, and I like learning system design and cloud deployment
              through hands on projects and internships.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
