"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function Section({
  id,
  children
}: {
  id: string
  children: ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative section-padding flex flex-col gap-24"
    >
      {children}
    </motion.section>
  )
}
