import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type ExperienceProps = {
  experiences: Experience[];
}

function WorkExperience({ experiences }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToExperience = (index: number) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      setActiveIndex(index);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className='min-h-screen relative flex flex-col justify-start md:justify-center items-center max-w-full mx-auto overflow-hidden pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-16 select-none'>
    <div className="flex flex-col items-center mb-2 sm:mb-4 md:mb-6 z-10">
        <h3 className="uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl font-semibold">
          Experience
        </h3>
        <p className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest mt-0.5">
          Swipe or click arrows to explore career milestones
        </p>
      </div>

      <div
        ref={containerRef}
        className="w-full flex space-x-3 sm:space-x-5 md:space-x-8 overflow-x-auto px-4 sm:px-8 md:px-12 py-2 sm:py-4 snap-x snap-mandatory scrollbar scrollbar-track-stone-900 scrollbar-thumb-[#F7AB0A]/60 z-10"
      >
        {experiences?.map((experience, idx) => (
          <div
            key={experience._id}
            onClick={() => scrollToExperience(idx)}
            className="snap-center shrink-0"
          >
            <ExperienceCard
              experience={experience}
              isActive={activeIndex === idx}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 z-20">
        <button
          type="button"
          onClick={() => scrollToExperience(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Previous experience"
          className="p-1.5 sm:p-2 rounded-full bg-[#241c19] border border-[#4d3a33] text-stone-300 hover:text-[#F7AB0A] hover:border-[#F7AB0A]/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-md"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {experiences?.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToExperience(idx)}
              aria-label={`Jump to experience ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 sm:w-7 h-2 bg-[#F7AB0A]'
                  : 'w-2 h-2 bg-stone-600 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToExperience(Math.min((experiences?.length || 1) - 1, activeIndex + 1))}
          disabled={activeIndex === (experiences?.length || 1) - 1}
          aria-label="Next experience"
          className="p-1.5 sm:p-2 rounded-full bg-[#241c19] border border-[#4d3a33] text-stone-300 hover:text-[#F7AB0A] hover:border-[#F7AB0A]/60 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-md"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </motion.div>
  );
}

export default WorkExperience