import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              ✕
            </button>

            {/* Header Image/Banner */}
            <div className="h-64 md:h-80 w-full relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
              <h2 className="absolute bottom-8 left-8 text-3xl md:text-4xl font-black text-white">
                {project.title}
              </h2>
            </div>

            <div className="p-8 md:p-12 space-y-10">
              {/* Overview & Tech */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 text-blue-600">Project Overview</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {project.longDescription || project.description}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl">
                  <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Stack Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-700 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Functionalities & Architecture */}
              <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-blue-500">⚙️</span> Key Functionalities
                  </h3>
                  <ul className="space-y-3">
                    {project.features?.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="text-blue-500 mt-1">•</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-indigo-500">🏗️</span> Architecture Details
                  </h3>
                  <img src={project.architectureImage} alt="Architecture Diagram" 
                    className="w-full rounded-lg mb-4 border border-slate-200 dark:border-slate-700 
                      hover:scale-[2.00] hover:-translate-x-40 transition-transform cursor-pointer" />
                </div>
              </div>

              {/* UI Showcase / Gallery */}
              <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-6">Visual Interface</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery?.map((img, i) => (
                    <img key={i} src={img} className="rounded-xl border border-slate-200 dark:border-slate-800 hover:scale-[1.02] transition-transform cursor-pointer" alt="UI Screenshot" />
                  ))}
                </div>
              </div>

              {/* Final Footer Links */}
              <div className="flex gap-4 pt-10">
                <a href={project.github} className="flex-1 text-center py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl transition-opacity hover:opacity-90">
                  View Source Code
                </a>
                {project.demo && (
                  <a href={project.demo} className="flex-1 text-center py-4 bg-blue-600 text-white font-bold rounded-xl transition-opacity hover:opacity-90">
                    Live Project
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}