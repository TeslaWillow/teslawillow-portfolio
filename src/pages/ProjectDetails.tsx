import { useParams, Link } from 'react-router';
import portfolioData from '../../public/data/projects.json';
import Icon from '../components/atoms/Icon';
import PageTransition from '../components/atoms/PageTransition';
import Typography from '../components/atoms/Typography';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = portfolioData.find(p => p.id.toString() === projectId) || null;

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
                    <img
                        src={project.imageUrl}
                        className="rounded-2xl border border-white/10 w-full object-cover aspect-video"
                        alt={project.title}
                    />
                    <div className="group p-5 glass-card">
                        <Typography variant='h2' className='mb-5'>{project.title}</Typography>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="text-[10px] border border-white/20 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <hr className="border-white/10 mb-8" />
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {project.longDescription || project.description}
                        </p>

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