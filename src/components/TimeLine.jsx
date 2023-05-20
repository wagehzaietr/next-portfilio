import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiYoutubegaming } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { GiMountainClimbing, GiStrongMan, GiGraduateCap } from "react-icons/gi";
import { Aboutme } from "../Helpers/Data";
import { motion } from "framer-motion";

const TimeLine = () => {
  return (
    <div className="flex-col overflow-hidden mt-[30rem] md:mt-[0] pb-[4rem] md:pb-[8rem]  h-full container mx-auto flex justify-center items-center px-5">
      <div className="flex md:my-[8rem] justify-center bg-gradient-to-r md:h-[90px] md:w-[230px] md:text-[3rem] text-[2rem] h-[70px] w-[160px] my-[3.1rem] rounded-[6px] shadow-md shadow-cartoon font-[500] border-[2px] border-cartoon   m-auto text-text2 captop:text-[5rem] tracking-wide p-2 text-center">
        {Aboutme.map((letter, index) => {
          return (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.4,
                type: 'spring',
                mass: 5,
                bounce: 5,
                stiffness: 100,
              }}
            >
              {letter.letter === 'A' ? (
                <span className="text-text">{letter.letter}</span>
              ) : (
                <span>{letter.letter}</span>
              )}
            </motion.h2>
          );
        })}
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'white',
            color: '#5e5e61',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #ff014f' }}
          iconStyle={{
            background: '#ff014f',
            color: '#ff014f',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          icon={<GiGraduateCap size={33} color="white" />}
        >
          <p>
            Started self-studying frontend development 7 months ago through
            various online courses, including Udemy, Angela Yu's courses, and
            YouTube tutorials.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'white',
            color: '#5e5e61',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #ff014f' }}
          iconStyle={{
            background: '#ff014f',
            color: '#ff014f',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          icon={<BiCodeAlt size={30} color="white" />}
        >
          <p>
            Developed skills in React,HTML, CSS, and JavaScript Tailwind CSS and
            worked on several exciting projects, including e-commerce sites,
            restaurant websites, and movie and chat apps.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'white',
            color: '#5e5e61',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #ff014f' }}
          iconStyle={{
            background: '#ff014f',
            color: '#ff014f',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          icon={<SiYoutubegaming size={30} color="white" />}
        >
          <p>
            Passionate about gaming, software, and hardware and constantly
            seeking new challenges and opportunities to learn and grow.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'white',
            color: '#5e5e61',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #ff014f' }}
          iconStyle={{
            background: '#ff014f',
            color: '#ff014f',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          icon={<GiMountainClimbing size={30} color="white" />}
        >
          <p>
            Continuously expanding knowledge through online resources, staying
            up-to-date with the latest industry trends and best practices.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'white',
            color: '#5e5e61',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #ff014f' }}
          iconStyle={{
            background: '#ff014f',
            color: '#ff014f',
            boxShadow: '0px 0px 10px #5e5e61',
          }}
          icon={<GiStrongMan size={35} color="white" />}
        >
          <p>
            Ready to take on new and exciting projects and continue to refine
            and expand my skills as a self-taught frontend developer Passionate
            about creating responsive UIs and building complex web applications
            that meet the needs of clients and users alike.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
