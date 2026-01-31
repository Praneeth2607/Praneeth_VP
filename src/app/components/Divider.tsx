"use client"

import { motion } from "framer-motion"

export default function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        my-16
        mx-auto
        h-px w-3/4
        bg-gradient-to-r
        from-transparent
        via-glow
        to-transparent
        origin-center
      "
    />
  )
}
