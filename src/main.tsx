import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/templates/MainLayout'
import Hero from './components/organisms/Hero'
import Typography from './components/atoms/Typography'
import ProjectGrid from './components/organisms/ProjectGrid'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      {/* Hero Section */}
      <section id="about" className="min-h-[80vh] flex items-center">
        <Hero />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10">
        <Typography variant="h2" className="mb-12 border-b border-white/10 pb-4">
          Selected Works
        </Typography>
        <ProjectGrid />
      </section>

      {/* Footer simple para cerrar el diseño */}
      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2026 TeslaWillow — Built with React & Dark Veil</p>
      </footer>
    </MainLayout>
  </StrictMode>,
)
