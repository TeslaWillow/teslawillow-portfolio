// ./src/components/organisms/ContactSection.tsx
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';
import { CircularText, Icon, ProfileImage, Typography } from '../atoms'; // Usando tu átomo de iconos corregido

export type IconName = keyof typeof LucideIcons;


interface SocialLink {
    name: string;
    icon: IconName;
    url: string;
}

const ContactSection: React.FC = () => {
    const socialLinks: SocialLink[] = [
        { name: 'Github', icon: 'Github', url: 'https://github.com/teslawillow' },
        { name: 'LinkedIn', icon: 'Linkedin', url: 'https://www.linkedin.com/in/hector-caballero-10725b144/?locale=en_US' },
    ];

    return (
        <section id="contact" className="relative py-32 px-6 overflow-hidden">
            {/* Fondo decorativo sutil (Coherencia visual con la línea del tiempo) */}
            <Typography variant="h2" className="mb-16 border-b border-white/10 pb-4">
                Get in Touch
            </Typography>

            <div className="absolute top-0 right-0 w-96 h-96  rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">

                {/* CONTACT CARD CON GLASSMORPHISM */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:p-16 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-xl shadow-2xl"
                >
                    {/* COLUMNA IZQUIERDA: Información y Call to Action */}
                    <div className="flex flex-col justify-center space-y-10">
                        <div>
                            <h3 className="text-3xl font-bold text-white leading-tight mb-4">
                                Let's build something amazing together.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                I'm currently open to new opportunities as a Fullstack Developer.
                                Feel free to reach out or download my resume below.
                            </p>
                        </div>

                        {/* BOTÓN DESCARGAR CV (Destacado) */}
                        <a
                            href="/assets/docs/HectorCaballero_Resume_2025_ATS.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 text-[#050505] font-bold text-lg hover:bg-green-400 transition-colors w-full md:w-fit justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                        >
                            <Icon name="Download" size={22} color="#050505" />
                            Download Resume (CV)
                        </a>

                        {/* REDES SOCIALES */}
                        <div className="pt-6 border-t border-white/10">
                            <p className="text-sm text-gray-500 uppercase tracking-widest mb-5">Connect with me</p>
                            <div className="flex gap-5">
                                {socialLinks.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={link.name}
                                        className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all bg-white/3"
                                    >
                                        {/* Usamos el átomo corregido para asegurar el build en Vercel */}
                                        <Icon name={link.icon} size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Foto y Texto Circular */}
                    <div className="relative flex items-center justify-center pt-10 md:pt-0">

                        {/* REACT BITS: CIRCULAR TEXT (Envolviendo la foto) */}
                        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-60">
                            {/* Ajusta los parámetros según la doc de React Bits */}
                            <CircularText
                                text="FULLSTACK ✦ DEVELOPER ✦ CREATIVE ✦ CODER ✦ "
                            />
                        </div>

                        {/* FOTO CON PAPER SHADER DISORTION (El átomo 3D) */}
                        <div className="relative z-1 mb-10 md:mb-0 w-50 h-50 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <ProfileImage src={'/assets/images/personal_photo.webp'} />
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default ContactSection;