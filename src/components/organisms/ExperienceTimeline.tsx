import experienceData from '../../../public/data/experience.json';
import { ExperienceCard } from '../molecules';
import { ExperienceCanvas } from './';

const ExperienceTimeline: React.FC = () => {
    // Guard Clause: Si no hay datos, no renderizamos la sección
    if (!experienceData || experienceData.length === 0) return null;

    return (
        <section className="relative py-8 md:py-32 px-4 overflow-hidden">

            {/* BACKGROUND LAYER */}
            <ExperienceCanvas />

            {/* CONTENT LAYER */}
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="relative">

                    {/* VERTICAL LINE */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-500/50 via-green-500 to-transparent" />

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
