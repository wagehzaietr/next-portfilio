import React from "react";
import Image from "next/image";
import { skillsData } from "../Helpers/SkillsData";
import { motion } from "framer-motion";
import { Skillsletters } from "../Helpers/Data";

const Skills = () => {
  return (
    <motion.div
      className="h-screen  py-[1rem] md:py-[4rem] w-screen"
    >
      <div className="flex justify-center bg-gradient-to-r md:h-[90px] md:w-[200px] md:text-[3rem] text-[2rem] h-[70px] w-[160px] my-[3.1rem] rounded-[6px] shadow-md shadow-cartoon font-[500] border-[2px] border-cartoon   m-auto text-text2 captop:text-[5rem] tracking-wide p-2 text-center">
        {Skillsletters.map((letter, index) => {
          return (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.4,
                type: "spring",
                mass: 5,
                bounce: 5,
                stiffness: 100,
              }}
            >
              {letter.letter === "S" ? (
                <span className="text-text">{letter.letter}</span>
              ) : (
                <span>{letter.letter}</span>
              )}
            </motion.h2>
          );
        })}
      </div>
      <div className=" container pt-[1rem] md:pt-[3.5rem] overflow-hidden pb-[2rem] m-auto grid grid-cols-1 md:grid-cols-6 gap-[2rem] ">
        {skillsData.map((skill, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 0.1 * index,
                delay: 0.2 * index,
                bounce: 15 + index,
                type: "spring",
                stiffness: 120,
              }}  
              className="flex items-center justify-center flex-col"
              key={skill.id}
            >
              <Image
                src={skill.image}
                alt={skill.title}
                className="mt-[3rem] object-contain h-[90px] w-[90px] md:h-[100px] md:w-[100px] rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-100 p-4 md:p-5 shadow-md shadow-cartoon text-center"
                width={100}
                height={100}
                key={skill.id}
              />
              <h1 className="text-text2 text-[1.2rem] mt-5 font-bold text-center capitalize">
                {skill.title}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
