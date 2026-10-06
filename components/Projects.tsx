import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active index with horizontal scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToProject = (index: number) => {
    if (!scrollContainerRef.current) return;
    const clientWidth = scrollContainerRef.current.clientWidth;
    scrollContainerRef.current.scrollTo({
      left: index * clientWidth,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen relative flex flex-col justify-between items-center text-left max-w-full mx-auto z-0 overflow-hidden"
    >
      {/* Responsive header clearance to prevent collision with project image */}
      <div className="w-full pt-16 sm:pt-20 md:pt-24 pb-2 z-30 text-center select-none">
        <h3 className="uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-base sm:text-xl md:text-2xl font-medium">
          Projects
        </h3>
      </div>

      {/* Main Snap Horizontal Carousel */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative w-full flex-1 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-none sm:scrollbar-thin sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-[#F7AB0A]/80"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-center px-4 sm:px-8 md:px-14 lg:px-20 py-4 sm:py-6 md:py-10 min-h-full max-h-[82vh] overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-5 md:space-y-6 w-full max-w-4xl mx-auto my-auto">
              {/* Dynamically scaled project mockup image */}
              <a
                href={project?.linkToBuild}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group relative flex items-center justify-center transition-transform hover:scale-[1.02]"
              >
                <motion.img
                  initial={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.9 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={project?.image ? urlFor(project.image).url() : ''}
                  alt={project?.title || ''}
                  className="max-h-24 sm:max-h-36 md:max-h-52 lg:max-h-60 xl:max-h-64 w-auto object-contain drop-shadow-2xl"
                />
              </a>

              {/* Scaled case study heading */}
              <div className="space-y-2.5 sm:space-y-4 md:space-y-5 px-1 sm:px-6 w-full text-center">
                <h4 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white leading-tight">
                  <span className="underline decoration-[#F7AB0A]/50 decoration-2 sm:decoration-4 underline-offset-4">
                    Case Study {i + 1} of {projects.length} :
                  </span>{' '}
                  <a
                    href={project?.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline hover:text-[#F7AB0A] transition-colors duration-200"
                  >
                    <span>{project?.title}</span>
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7AB0A] opacity-75" />
                  </a>
                </h4>

                {/* Tech Stack badges */}
                <div className="flex items-center space-x-2 sm:space-x-3 justify-center flex-wrap gap-y-1">
                  {project?.technologies.map((technology) => (
                    <div
                      key={technology._id}
                      className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/10 hover:border-[#F7AB0A]/50 transition-colors"
                      title={technology.title}
                    >
                      <img
                        className="h-5 w-5 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain"
                        src={urlFor(technology.image).url()}
                        alt={technology.title || ''}
                      />
                    </div>
                  ))}
                </div>

                {/* Responsive summary paragraph */}
                <p className="text-xs sm:text-sm md:text-base text-stone-300 text-center leading-relaxed max-w-2xl mx-auto px-2">
                  {project?.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls: Previous / Next buttons & slide dots */}
      <div className="w-full pb-14 sm:pb-16 z-30 flex items-center justify-center gap-3 sm:gap-4 select-none">
        <button
          type="button"
          onClick={() => scrollToProject(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Previous Project"
          className="p-1.5 sm:p-2 rounded-full bg-stone-900/80 border border-stone-700/60 text-stone-300 hover:text-[#F7AB0A] hover:border-[#F7AB0A]/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToProject(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                activeIndex === idx
                  ? 'w-5 sm:w-6 h-2 bg-[#F7AB0A]'
                  : 'w-2 h-2 bg-stone-600 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToProject(Math.min(projects.length - 1, activeIndex + 1))}
          disabled={activeIndex === projects.length - 1}
          aria-label="Next Project"
          className="p-1.5 sm:p-2 rounded-full bg-stone-900/80 border border-stone-700/60 text-stone-300 hover:text-[#F7AB0A] hover:border-[#F7AB0A]/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Diagonal background accent */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] sm:h-[500px] -skew-y-12 pointer-events-none" />
    </motion.div>
  );
}
