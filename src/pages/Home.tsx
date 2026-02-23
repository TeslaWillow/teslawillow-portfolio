import React from "react";
import ProjectGrid from "../components/organisms/ProjectGrid";
import Typography from "../components/atoms/Typography";
import Hero from "../components/organisms/Hero";

const Home: React.FC = () => {
    return (
        <>
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
        </>
    )
}
export default Home;