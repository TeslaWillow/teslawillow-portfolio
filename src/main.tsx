import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './components/templates/MainLayout'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home, ProjectDetails } from './pages';
import ScrollToTop from './components/utils/ScrollToTop';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Scroll To Top Util */}
      <ScrollToTop />

      {/* Main Layout */}
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </StrictMode>,
)
