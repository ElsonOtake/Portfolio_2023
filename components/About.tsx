// --- components/About.tsx ---
import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, BriefcaseIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-6 md:px-10 justify-start md:justify-center mx-auto items-center pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 overflow-y-auto overflow-x-hidden gap-5 sm:gap-6 md:gap-10 lg:gap-14"
    >
      {/* 
        RESPONSIVE FIX 1: Safe Heading Clearance & Fluid Tracking
        Replaced rigid tracking-[20px] on mobile with tracking-[10px] so it never wraps,
        and provided dedicated pt-20/pt-24 padding to eliminate the vertical collision
        where the profile image overlapped the 'ABOUT' text.
      */}
      <h3 className="absolute top-14 sm:top-18 md:top-24 uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl font-semibold select-none z-10">
        About
      </h3>

      {/* 
        RESPONSIVE FIX 2: Responsive Profile Image Sizing & Eliminated Negative Margin
        On mobile, the original -mb-20 and 224px fixed size slammed directly into the text.
        We now use w-28 h-28 on mobile up to xl:w-[400px] xl:h-[500px] on desktop,
        with no negative margin, preventing layout clashes across all viewports.
      */}
      <motion.div
        initial={{
          x: -80,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-shrink-0 z-10 mt-6 sm:mt-4 md:mt-0"
      >
        <img
          src={urlFor(pageInfo?.profilePic || pageInfo?.heroImage).url()}
          alt={pageInfo?.name || 'About Me'}
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-72 lg:w-72 lg:h-96 xl:w-[400px] xl:h-[500px] rounded-full md:rounded-2xl object-cover object-center shadow-2xl border-2 border-stone-700/80 hover:border-[#F7AB0A]/50 transition-all duration-300"
        />
      </motion.div>

      {/* 
        RESPONSIVE FIX 3: Dynamic Typography & Spacing
        Scales title from text-xl on mobile to text-4xl on desktop.
        Scales space-y from space-y-3 up to space-y-6 instead of rigid space-y-10.
        Adds clean paragraph styling with comfortable leading and scroll clearance.
      */}
      <motion.div
        initial={{
          x: 80,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-4 md:px-6 max-w-2xl text-center md:text-left z-10"
      >
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50 decoration-2 sm:decoration-4">
            little
          </span>{' '}
          background
        </h4>

        {/* Background Information Text */}
        <div className="text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed font-light space-y-2.5 text-justify sm:text-left">
          {pageInfo?.backgroundInformation?.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          )) || (
            <p>
              Passionate software engineer building resilient, high-performance web applications with modern design systems and clean code architecture.
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
