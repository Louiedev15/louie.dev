import React from 'react'

const Icon = ({ path }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d={path} />
  </svg>
)

const Footer = () => {
  return (
    <footer className="border-t border-gray-700">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-teal-var gap-3">
        <div className="flex items-center gap-2">
          <span className="text-green-var font-semibold">dev.eugenio</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-orange-var transition" href="https://github.com/Tres-cyber" target="_blank" rel="noreferrer" aria-label="Github">
            <Icon path="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.14 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.06.8-.23 1.64-.35 2.48-.35.84 0 1.68.12 2.48.35 1.91-1.33 2.75-1.06 2.75-1.06.55 1.4.2 2.44.1 2.7.64.73 1.03 1.66 1.03 2.8 0 4-2.34 4.88-4.57 5.14.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
          </a>
          {/* Only GitHub icon remains */}
        </div>
      </div>
    </footer>
  )
}

export default Footer


