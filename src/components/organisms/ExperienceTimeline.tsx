import experienceData from '../../../public/data/experience.json';
import { ExperienceCard } from '../molecules';
import { ExperienceCanvas } from './';

const ExperienceTimeline: React.FC = () => {
    // Guard Clause: Si no hay datos, no renderizamos la sección
    if (!experienceData || experienceData.length === 0) return null;

    return (
        <section className="relative py-32 px-4 overflow-hidden">

            {/* BACKGROUND LAYER */}
            <ExperienceCanvas />

            {/* CONTENT LAYER */}
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                    <div className="space-y-4">
                        {experienceData.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                {...exp}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ExperienceTimeline;
