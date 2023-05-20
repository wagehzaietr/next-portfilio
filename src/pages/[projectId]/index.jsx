import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from 'src/pages/Layout ';
import { ProjectsLetters } from 'src/Helpers/Data';
import { ProjectsList } from 'src/Helpers/ProjectsList';
import SingleProject from 'src/components/SingleProject';

const variants = {
  show: {
    opacity: 1,
    x: 20,
  },
  hidden: {
    opacity: 0,
    x: 0,
  },
};

const Projects = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r flex justify-center md:h-[90px] md:w-[200px] md:text-[2.8rem] text-[2rem] h-[70px] w-[160px] mt-[5rem] mb-[.6rem] rounded-[6px] shadow-md shadow-cartoon font-[500] border-[2px] border-cartoon  m-auto text-text2 captop:text-[5rem] tracking-wide p-2 text-center">
        {ProjectsLetters.map((letter, index) => {
          return (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.7,
                type: 'spring',
                mass: 5,
                bounce: 5,
                stiffness: 100,
              }}
            >
              {letter.letter === 'P' ? (
                <span className="text-text">{letter.letter}</span>
              ) : (
                <span>{letter.letter}</span>
              )}
            </motion.h2>
          );
        })}
      </div>
      <motion.div className="projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 py-[6rem]">
        {ProjectsList.map((project, index) => {
          return (
            <motion.div
              variants={variants}
              inherit="hidden"
              animate="show"
              initial="hidden"
              className="py-5 mr-[2.5rem]"
              transition={{ duration: 0.5 * index, delay: 0.6 * index }}
              key={index}
              exit={{ x: 0, opacity: 0 }}
            >
              <Link href={`/projects/${project.id}`}>
                <SingleProject key={index} project={project} />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Layout>
  );
};

export default Projects;
