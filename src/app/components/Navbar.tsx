"use client"

import { motion } from "framer-motion"
import { useState } from "react"


const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg bg-black/30
        border-b border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-heading text-xl">Praneeth</span>

        {/* Desktop */}
          <div className="hidden md:flex gap-8 text-sm">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative text-white/80 hover:text-glow transition
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-glow
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl"
          >
            ☰
          </button>

          {/* Mobile menu */}
          {open && (
            <div className="
              absolute top-16 left-0 w-full
              bg-black/80 backdrop-blur
              border-b border-white/10
              flex flex-col items-center gap-6 py-8
            ">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white/80 hover:text-glow transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

      </div>
    </motion.nav>
  )
}
