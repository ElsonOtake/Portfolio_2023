import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "i_really_love_coding.rb",
      "IHaveSoMuchFunWhenICode",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="min-h-screen relative flex flex-col space-y-4 sm:space-y-6 md:space-y-8 items-center justify-center text-center overflow-hidden px-3 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 select-none">
      {/* Scaled concentric background rings */}
      <BackgroundCircles />

      {/* Responsive profile avatar picture */}
      <img
        className="relative rounded-full h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 mx-auto object-cover border-2 border-stone-600/80 shadow-2xl z-20"
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name || 'Profile'}
      />

      <div className="z-20 w-full max-w-3xl mx-auto flex flex-col items-center">
        {/* Responsive role subtitle tracking */}
        <h2 className="text-[11px] sm:text-xs md:text-sm uppercase text-gray-400 pb-1 sm:pb-2 tracking-[6px] sm:tracking-[10px] md:tracking-[15px] font-medium select-none">
          {pageInfo?.role}
        </h2>

        {/* Scaled typewriter font + overflow protection */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold px-2 sm:px-6 md:px-10 leading-tight text-white min-h-[48px] sm:min-h-[56px] md:min-h-[72px] flex items-center justify-center max-w-full">
          <span className="mr-1.5 sm:mr-3 break-all sm:break-normal inline-block">
            {text}
          </span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        {/* Responsive hero buttons */}
        <div className="pt-3 sm:pt-4 md:pt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 max-w-full">
          <Link href="#about">
            <button className="heroButton text-[10px] sm:text-xs px-2.5 sm:px-3.5 md:px-5 py-1.5 sm:py-2">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton text-[10px] sm:text-xs px-2.5 sm:px-3.5 md:px-5 py-1.5 sm:py-2">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-[10px] sm:text-xs px-2.5 sm:px-3.5 md:px-5 py-1.5 sm:py-2">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-[10px] sm:text-xs px-2.5 sm:px-3.5 md:px-5 py-1.5 sm:py-2">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
