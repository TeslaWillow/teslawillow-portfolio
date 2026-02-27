import React from "react";
import { ExperienceTimeline, Hero, ProjectGrid } from "../components/organisms";
import { Typography } from '../components/atoms';

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

            {/* Work Experience Section */}
            <section id="work-experience" className="py-10">
                <Typography variant="h2" className="mb-12 border-b border-white/10 pb-4">
                    Work Experience
                </Typography>
                <ExperienceTimeline />
            </section>
        </>
    )
}
export default Home;