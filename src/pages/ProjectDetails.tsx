import { useParams, Link } from 'react-router';
import portfolioData from '../../public/data/projects.json';
import { Icon, PageTransition, Typography } from '../components/atoms';
import { ChallengeSection } from '../components/molecules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import SafeImage from '../components/atoms/SafeImage';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = portfolioData.find(p => p.id.toString() === projectId) || null;
    const projectImages = project?.images || [];

    // Guard Clause: If project not found, show error message and back link
    if (!project) {
        return (
            <div className="h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Link to="/" className="text-green-400 mt-4">← Back to home</Link>
            </div>
        );
    }

    return (
        <PageTransition>
            <div className="pb-32 px-4 md:px-8 max-w-6xl mx-auto pt-24 md:pt-32">
                <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <Icon name="ArrowLeft" size={16} />
                    Back to Home
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className="w-full max-w-[320px] sm:max-w-100 lg:max-w-125 mx-auto md:mx-0">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="w-full aspect-video my-swiper" // Mantiene la proporción de tus capturas
                        >
                            {/* IMAGE LIST */}
                            {projectImages.map((imgUrl, index) => {
                                return (
                                    <SwiperSlide
                                        key={`${project.id}-${project.title}-img-${index}`}
                                        className="rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                                    >
                                        <SafeImage 
                                            src={imgUrl} 
                                            alt={`${project.title} screenshot ${index + 1}`} 
                                            className="shadow-2xl"
                                        />
                                    </SwiperSlide>
                                )
                            })}
                            {/* NO IMAGE LIST */}
                            {projectImages.length === 0 && (
                                <SwiperSlide className="rounded-2xl border border-white/10 bg-[#111] flex items-center justify-center">
                                    <SafeImage 
                                        src={project.imageUrl} 
                                        alt={`${project.title} screenshot`} 
                                        className="shadow-2xl"
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div className="group p-5 glass-card">
                        <Typography variant='h2' className='mb-5'>{project.title}</Typography>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag: string, index: number) => (
                                <span key={`${project.id}_${index}-${tag}`} className="text-[10px] border border-white/20 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <hr className="border-white/10 mb-8" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {project.longDescription || project.description}
                        </p>

                        <ChallengeSection challenge={project.challenge} />

                        {project.externalLink && (
                            <a href={project.externalLink} target="_blank" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                                {project.externalLinkText || "View Live Site"} <Icon name="ExternalLink" size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ProjectDetails;