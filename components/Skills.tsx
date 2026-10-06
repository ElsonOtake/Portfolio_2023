import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen relative flex flex-col justify-start md:justify-center items-center text-center max-w-7xl mx-auto px-3 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 overflow-y-auto"
    >
      {/* Responsive document-flow header clearance */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2 mb-4 sm:mb-6 md:mb-8 select-none z-10">
        <h3 className="uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl font-semibold">
          Skills
        </h3>
        <h4 className="uppercase tracking-[1.5px] sm:tracking-[3px] text-gray-400 text-[10px] sm:text-xs md:text-sm max-w-xs sm:max-w-none">
          <span className="sm:hidden">Tap</span>
          <span className="hidden sm:inline">Hover over</span> a skill for current proficiency
        </h4>
      </div>

      {/* Responsive 4-column grid with fluid gaps */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-5 my-auto z-10 place-items-center">
        {skills?.slice(0, Math.ceil(skills.length / 2)).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(Math.ceil(skills.length / 2), skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
