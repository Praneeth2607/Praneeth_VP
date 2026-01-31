"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="
      relative min-h-screen pb-32
      pt-24 md:pt-0
      flex items-center justify-center
      overflow-hidden
    ">
      {/* Glow blobs */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-glow/20 rounded-full blur-[140px]" />
      <div className="absolute top-40 -right-40 w-125 h-125 bg-electric/20 rounded-full blur-[140px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left gap-16 items-center max-w-6xl px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold">
            Hi, I’m{" "}
            <span className="text-glow glow-text">Praneeth</span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl">
            Full-stack developer building scalable web applications with
            React, Node, and Django.
          </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button
                className="
                group relative overflow-hidden rounded-xl
                px-7 py-3 font-semibold
                border border-glow/40 text-glow
                cursor-pointer

                transition-transform duration-300 ease-out
                hover:scale-105
                "
            >
                <span className="relative z-10">View Projects</span>

                <span
                className="
                    absolute inset-0
                    bg-glow/10 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                "
                />
            </button>

            <button
                className="
                group relative overflow-hidden rounded-xl
                px-7 py-3 font-semibold
                border border-glow/40 text-glow
                cursor-pointer

                transition-transform duration-300 ease-out
                hover:scale-105
                "
            >
                <span className="relative z-10">Contact Me</span>

                <span
                className="
                    absolute inset-0
                    bg-glow/10 opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                "
                />
            </button>
            </div>

        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-glow/20 blur-3xl" />

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/profile.png"
              alt="Praneeth VP portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
