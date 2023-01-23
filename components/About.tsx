import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true }}
        src="Lujan_02b.jpg"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h:95 xl:w-[500px] xl:h-[600px]"
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#f7ab0a]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          Hi! My name is Elson. I'm a Microverse-certified full-stack developer. In this remote software development school, 
          I've spent seven months doing teamwork pair programming activities with developers from around the world, building 
          projects to teach development, meeting deadlines, and good coding practices. I'm currently working there as a code reviewer.
          I have liked to solve problems since I was a child. And it became a hobby. I expanded my analytical and logical skills during 
          my coding projects in my Bachelor of Applied Mathematics. After that, I worked at Fujitsu, a manufacturer of mainframe computers. 
          There I worked for ten years and developed projects with relational databases and online transactions.
        </p>
      </div>
    </motion.div>
  );
}