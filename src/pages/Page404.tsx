import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Icon } from '../components/atoms';

const Page404 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      > 
        <h1 className="glitch-text text-[12rem] md:text-[15rem] font-display font-bold leading-none text-white/5 relative">
          404
        </h1>
        <div className="relative z-10">
          <div className="mb-6 flex justify-center text-green-500">
            <Icon name="Ghost" size={64} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Lost in the dark?
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Icon name="Home" size={18} />
            Back to Safety
          </Link>
        </div>
      </motion.div>

      {/* Decoración sutil de fondo */}
      <div className="absolute bottom-10 text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
        Error Code: 404_NOT_FOUND
      </div>
    </div>
  );
};

export default Page404;