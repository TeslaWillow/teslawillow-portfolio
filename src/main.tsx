import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/templates/MainLayout'
import Typography from './components/atoms/Typography'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <section className="max-w-4xl">
        <Typography variant="caption" className="mb-4 block">
          Héctor J. Caballero - TeslaWillow
        </Typography>
        
        <Typography variant="h1" className="mb-8">
          Software Developer 
        </Typography>

        <Typography variant="body" className="max-w-xl">
          With a passion for creating immersive digital experiences, I specialize in crafting visually stunning and highly performant web applications. 
          My expertise lies in React/Angular, Tailwind CSS, and modern web/mobile technologies.
        </Typography>

        <div className="mt-12 flex items-center gap-6">
           <button className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
              <span className="rotate-45 text-2xl">→</span>
           </button>
           <span className="uppercase tracking-widest font-medium text-sm">View Projects</span>
        </div>
      </section>
    </MainLayout>
  </StrictMode>,
)
