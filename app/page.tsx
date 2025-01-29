"use client"

import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])


  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

