import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/templates/MainLayout'
import Hero from './components/organisms/Hero'
import Typography from './components/atoms/Typography'
import ProjectGrid from './components/organisms/ProjectGrid'
import Footer from './components/organisms/Footer'

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

      {/* Footer */}
      <Footer />
    </MainLayout>
  </StrictMode>,
)
