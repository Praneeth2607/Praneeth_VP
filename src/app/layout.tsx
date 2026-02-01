import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Inter, Space_Grotesk } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
})

export const metadata = {
  title: "Praneeth VP | Full Stack Developer",
  description:
    "Developer portfolio showcasing full stack projects built with React, Node, and Django."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
