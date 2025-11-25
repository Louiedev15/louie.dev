import React from 'react'
import { motion } from 'framer-motion'
import Container from '../reusable/Container'
import SectionTitle from '../reusable/SectionTitle'
import Button from '../reusable/Button'
import reactLogo from '../assets/react.svg'
import blogImg from '../assets/BLOG.png'
import oliImg from '../assets/OLI.png'
import trabahanapImg from '../assets/trabahanap.png'
import voltforgeImg from '../assets/VoltForge.png'
const completeApps = [
  {
    title: 'Trabahanap Website (Prototype Only)',
    desc: 'A Trabahanap Website for the Trabahanap Application',
    tech: 'ReactJS TailwindCSS Framer Motion Vite',
    img: trabahanapImg,
    cta: { label: 'Live ↔', href: 'https://trabahanap-website.vercel.app' },
  },
  {
    title: 'OLI',
    desc: 'An interactive website with problem-solving features',
    tech: 'ReactJS TailwindCSS Vite',
    img: oliImg,
    cta: { label: 'Live ↔', href: 'https://tres-cyber.github.io/dsproj/#/home' },
  },
  {
    title: 'Blog Website',
    desc: 'A blog Website for my 1st year in college',
    tech: 'HTML CSS JS',
    img: blogImg,
    cta: { label: 'Live ↔', href: 'https://tres-cyber.github.io/BlogSite/#main' },
  },
  {
    title: 'VoltForge Website',
    desc: 'A Protoype Website for a Mock Company',
    tech: 'HTML CSS JS',
    img: voltforgeImg,
    cta: { label: 'Live ↔', href: 'https://louiedev15.github.io/voltforge-website' },
  },
]

const smallProjects = [
  { title: 'Discord Bot', desc: 'Myers-Briggs Discord Bot', tech: 'Discord.js TS JS', icon: '📦', cta: { label: 'Github ➔', href: 'https://github.com/Tres-cyber/discord_bot' } },

  { title: 'Saraap', desc: 'A delivery app', tech: 'React Native Expo Router Firebase', icon: '📦', cta: { label: 'Github ➔', href: 'https://github.com/Tres-cyber/saraap' } },
  { title: 'Trabahanap Mobile App', desc: 'A Mobile Application fo Job-Matching', tech: 'React Native Expo Router NodeJS MongoDB', icon: '📦', cta: { label: 'Github ➔', href: 'https://github.com/Tres-cyber/TrabaHanap' } },
  { title: 'Facemask Detector', desc: 'A real-time mask detection system built with OpenCV', tech: 'Python OpenCV', icon: '📦', cta: { label: 'Github ➔', href: 'https://github.com/Tres-cyber/facemask-detector' } },
]

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ProjectCard = ({ project }) => (
  <motion.article
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
    className="group border border-gray-700/80 bg-[var(--clr-foreground)] rounded-md overflow-hidden shadow-sm hover:shadow-[var(--clr-teal)]/20 hover:border-teal-var transition-transform duration-300"
  >
    <div className="h-40 bg-black/30 overflow-hidden flex items-center justify-center">
      {project.icon ? (
        <span className="text-5xl opacity-80 select-none">{project.icon}</span>
      ) : (
        <img src={project.img} alt="preview" className="w-full h-full object-cover" />
      )}
    </div>
    <div className="px-4 py-3">
      <p className="text-[11px] tracking-wide text-orange-var">{project.tech}</p>
      <h3 className="mt-1.5 font-semibold text-green-var">{project.title}</h3>
      <p className="text-sm text-teal-var">{project.desc}</p>
      <motion.div whileHover={{ y: -1 }} className="mt-3">
        <a href={project.cta.href} target="_blank" rel="noopener noreferrer">
          <Button
            variant={project.cta.label.startsWith('Live') ? 'liveOutline' : 'demoOutline'}
            label={project.cta.label.split(' ')[0]}
            icon={project.cta.label.includes('↔') ? '⇔' : '▸'}
          />
        </a>
      </motion.div>
    </div>
  </motion.article>
)

const Projects = () => {
  return (
    <Container>
      <div className="mb-8">
        <SectionTitle className="mb-1" border={true}>/projects</SectionTitle>
        <p className="text-sm text-gray-400">List of my projects</p>
      </div>

      <section className="space-y-6">
        <h3 className="text-green-var text-lg font-bold">#complete-apps</h3>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {completeApps.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </section>

      <section className="space-y-6 mt-10">
        <h3 className="text-red-var text-lg font-bold">#small-projects</h3>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {smallProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </section>
    </Container>
  )
}

export default Projects

