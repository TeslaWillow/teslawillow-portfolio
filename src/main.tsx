import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/templates/MainLayout'
import Hero from './components/organisms/Hero'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <section className="max-w-5xl">
        <Hero />
      </section>
    </MainLayout>
  </StrictMode>,
)
