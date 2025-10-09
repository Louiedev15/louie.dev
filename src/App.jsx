import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--clr-foreground)] text-teal-var font-mono">
      <Navbar />
      <main className="space-y-16">
        <section id="home"><Hero /></section>
        <section><Quote /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="about-me"><About /></section>
        <section id="contacts"><Contacts /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App