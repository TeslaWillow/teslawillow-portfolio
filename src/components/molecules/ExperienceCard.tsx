// ./src/components/molecules/ExperienceCard.tsx
import { motion } from 'framer-motion';

interface ExperienceProps {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
    isLeft: boolean;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ company, role, period, description, skills, isLeft }: ExperienceProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative flex w-full mb-16 ${isLeft ? 'justify-start' : 'justify-end'} md:px-0 px-4`}
        >
            {/* Dot in the timeline (Only for md size screens) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-[#050505] z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>

            {/* Card Container */}
            <div className={`w-full md:w-[42%] p-6 glass-card border border-white/5 backdrop-blur-md hover:border-white/20 transition-colors`}>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">{period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{role}</h3>
                <h4 className="text-sm text-gray-400 mb-4">{company}</h4>
                
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <span key={skill} className="text-[9px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
export default ExperienceCard;