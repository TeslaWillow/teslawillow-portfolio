import experienceData from '../../../public/data/experience.json';
import { ExperienceCard } from '../molecules';

const ExperienceTimeline: React.FC = () => {
    // Guard Clause: Si no hay datos, no renderizamos la sección
    if (!experienceData || experienceData.length === 0) return null;

    return (
        <section className="relative py-32 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="relative">
                    {/* Línea Central (Visual) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent hidden md:block" />

                    {/* Lista de Experiencias */}
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
