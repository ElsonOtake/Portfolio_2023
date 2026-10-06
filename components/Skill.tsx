import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Skill as SkillType } from '../typings';

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div
      onClick={() => setIsTapped(!isTapped)}
      className="group relative flex cursor-pointer select-none"
      title={`${skill.title}: ${skill.progress}% proficiency`}
    >
      {/* Responsive circle dimensions: w-14 (56px) on mobile up to w-28 on desktop */}
      <motion.img
        initial={{
          x: directionLeft ? -60 : 60,
          opacity: 0,
        }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(skill?.image).url()}
        alt={skill?.title || 'Skill'}
        className={`rounded-full border border-gray-600/80 bg-[#1e1e1e] p-2 sm:p-2.5 md:p-3 object-contain 
          w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28
          filter group-hover:grayscale transition duration-300 ease-in-out shadow-lg group-hover:border-[#F7AB0A]/60 ${
            isTapped ? 'grayscale' : ''
          }`}
      />

      {/* Overlay with desktop hover + mobile tap toggle & scaled typography */}
      <div
        className={`absolute rounded-full z-10 transition duration-300 ease-in-out group-hover:opacity-90 group-hover:bg-white
          w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28
          flex flex-col items-center justify-center p-1 ${
            isTapped ? 'opacity-90 bg-white' : 'opacity-0'
          }`}
      >
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-black leading-none">
          {skill.progress}%
        </p>
        <span className="text-[8px] sm:text-[9px] md:text-[10px] text-stone-700 font-semibold truncate max-w-[85%] mt-0.5 hidden sm:inline">
          {skill.title}
        </span>
      </div>
    </div>
  );
}
