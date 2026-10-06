import React from 'react'
import { motion } from 'framer-motion';
import { CalendarIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
  isActive?: boolean;
}

export default function ExperienceCard({ experience, isActive }: Props) {
  return (
    <article
      className={`flex flex-col rounded-xl items-center flex-shrink-0 snap-center bg-[#292929] border transition-all duration-300 overflow-hidden cursor-pointer ${
        isActive
          ? 'opacity-100 border-[#F7AB0A]/60 shadow-xl shadow-black/40 ring-1 ring-[#F7AB0A]/30'
          : 'opacity-70 sm:opacity-50 hover:opacity-100 border-stone-800 hover:border-stone-600'
      }
      /* Fluid card sizing that never overflows small mobile viewports */
      w-[310px] xs:w-[330px] sm:w-[420px] md:w-[540px] lg:w-[660px] xl:w-[780px] 2xl:w-[860px]
      p-4 sm:p-6 md:p-8 lg:p-10
      space-y-3 sm:space-y-4 md:space-y-6
      `}
    >
      {/* Responsive Company Logo */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <img
          className="h-12 sm:h-14 md:h-20 lg:h-24 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] rounded-md object-contain object-center filter drop-shadow-md"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.company || 'Company Logo'}
        />
      </motion.div>
      {/* Card Content */}
      <div className="w-full px-1 sm:px-3 md:px-6 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="space-y-1 w-full">
          <h4 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-wide leading-tight">
            {experience.jobTitle}
          </h4>
          <p className="flex items-center justify-center md:justify-start space-x-1.5 font-medium text-xs sm:text-sm md:text-lg text-[#F7AB0A]">
            <BuildingOffice2Icon className="w-4 h-4 shrink-0 hidden sm:inline" />
            <span>{experience.company}</span>
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex items-center justify-center md:justify-start space-x-1.5 sm:space-x-2 my-2 sm:my-3 flex-wrap gap-y-1.5">
          {experience.technologies?.map((technology) => (
            <div
              key={technology._id}
              className="p-1 rounded bg-black/40 border border-white/10 hover:border-[#F7AB0A]/60 transition-colors shadow-sm"
              title={technology.title}
            >
              <img
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 object-contain"
                src={urlFor(technology.image).url()}
                alt={technology.title || ''}
              />
            </div>
          ))}
        </div>
        {/* Date Range Badge */}
        <p className="inline-flex items-center space-x-1.5 uppercase py-1 sm:py-2 text-[10px] sm:text-xs md:text-sm text-stone-400 font-mono tracking-wider">
          <CalendarIcon className="w-3.5 h-3.5 text-stone-500 shrink-0" />
          <span>
            {new Date(experience.dateStarted).toDateString()} –{' '}
            {experience.isCurrentWorkingHere
              ? 'Present'
              : new Date(experience.dateEnded).toDateString()}
          </span>
        </p>
        {/* Bullet Points with Dedicated Scrollbar */}
        <ul className="list-disc space-y-1.5 sm:space-y-2.5 ml-4 sm:ml-5 text-left text-xs sm:text-sm md:text-base text-stone-300 max-h-32 sm:max-h-44 md:max-h-56 lg:max-h-64 overflow-y-auto pr-2 sm:pr-4 scrollbar-thin scrollbar-track-stone-900 scrollbar-thumb-[#F7AB0A]/70 select-text">
          {experience.points?.map((point, i) => (
            <li key={i} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
