import Layout from './Layout ';
import Image from 'next/image';
import { Btn } from '../Helpers/Data';
import { motion } from 'framer-motion';
import rightimg from '../../public/assets/images/myphoto.png';
import Skills from '../components/Skills';
import TimeLine from '../components/TimeLine';
import { technobuild } from '../Helpers/Data';

const HomePage = () => {
  return (
    <Layout>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          bounce: 1,
          duration: 0.9,
          delay: 0.2,
          type: 'spring',
          stiffness: 100,
        }}
        className=" md:flex md:flex-row container m-auto px-3 justify-center h-[calc(100vh-60px)] [&>div] items-center"
      >
        <div className="flex-[2] mt-[4.4rem] lg:pt-[8rem] xl:mt-[1rem] ">
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              bounce: 1,
              duration: 0.5,
              delay: 0.4,
              type: 'spring',
              stiffness: 80,
            }}
            className="font-[100] text-[1.2rem] mb-[2rem] md:mb-2 text-text2 md:text-[calc(.8rem+0.6vw)] tracking-tight md:tracking-wider lg:tracking-widest "
          >
            WELCOME TO MY WORLD
          </motion.h1>
          <motion.h4
            className="text-[35px] shadow-cartoon md:text-[60px] font-[700] text-text2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              bounce: 1,
              duration: 0.5,
              delay: 0.6,
              type: 'spring',
              stiffness: 70,
            }}
          >
            Hi, I’m <span className="text-text">wageh zaietr</span>
          </motion.h4>
          <motion.p
            className="text-[#878e99] md:text-[18px] font-sans mt-[30px] tracking-wider text-[14px] leading-[30px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              type: 'spring',
              stiffness: 60,
            }}
          >
            I'm Wageh Zaietr, a skilled frontend developer with expertise in
            React, CSS, and Tailwind CSS. My passion for gaming and technology
            has driven me to pursue frontend development, and I've worked on
            exciting projects like e-commerce sites and movie and chat apps. I'm
            committed to delivering high-quality work that meets clients' and
            users' needs. If you're looking for a dedicated frontend developer
            with a love of gaming and technology, look no further than me.
          </motion.p>
          <motion.button
            whileHover={{
              backgroundColor: '#ff014f',
              color: 'white',
              boxshadow: '0 0 0 2px #000',
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              type: 'spring',
              stiffness: 120,
            }}
            onClick={() => window.open('/path/to/your/pdf/file.pdf', '_blank')}
            type="file"
            className="mt-[3rem] shadow-cartoon text-[14px] md:text-[16px] p-4 border border-solid border-text transition duration-700 ease-in-out py-3 px-5 bg-white  text-text2 shadow-md rounded-xl"
          >
            Download cv
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              type: 'spring',
              stiffness: 120,
            }}
            whileHover={{ boxShadow: '0 0 0 2px #ff014f' }}
            onClick={() => window.open('/Projects', '_blank')}
            type="file"
            className="mt-7 text-[14px]  shadow-cartoon md:text-[16px] transition duration-700 ease-in-out hover:bg-white hover:text-text2 mx-3 py-3 px-5 bg-text text-white shadow-md rounded-xl"
          >
            View Projects
          </motion.button>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.8 }}
              className="flex px-2 mt-[3.2rem] md:mt-[3rem] items-center"
            >
              <span className="pr-5 text-text2 text-[16px] tracking-[1px] capitalize font-bold">
                built with:
              </span>
              {technobuild.map((tech, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 2 ,
                      duration: 0.3 ,
                      type: 'spring',
                      stiffness: 120,
                    }}
                    key={index}
                  >
                    <Image
                      key={index}
                      src={tech.img}
                      alt="tech"
                      className="object-contain shadow-md shadow-cartoon border-[100%] bg-gradient-to-br from-gray-300 via-white to-gray-100 mx-1 p-2 h-[45px] w-[45px] rounded-full"
                      width={1080}
                      height={1920}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 2.3 }}
            >
            <h1 className=" mb-5 px-2 pt-[5rem] md:pt-[5rem] text-[15px] font-[500] tracking-[2px] text-[#43474b]">
              Connect with me
            </h1>
              {Btn.map((btn, index) => {
                return (
                  <motion.div
                    className="inline-block ml-2 "
                    key={index}
                    transition={{ duration: 0.5 * index, delay: 0.5 * index }}
                  >
                    <button
                      key={index}
                      
                      onClick={() => window.open(btn.link, '_blank')}
                      transition={{ duration: 0.5, delay: 1.3 * index }}
                      className="hover:bg-text shadow-cartoon ease-out duration-300  bg-linergradint shadow-lg md:px-[18px] mr-5 md:w-[70px] px-4 py-4 rounded-lg w-[65px]"
                    >
                      <Image
                        src={btn.button}
                        className="min-w-full object-cover h-full"
                        alt="socials-button"
                        priority={true}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            bounce: 1,
            duration: 0.5,
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <div className="w-[360px] shadow-lg shadow-cartoon relative h-[350px] rounded-[10px] md:w-[510px] md:h-[580px] mt-[15%] flex justify-end bg-gradient-to-br md:ml-[5rem] ml-[0] from-gray-300 via-white to-gray-100  p-5">
            <span className="w-[360px]  h-[350px]  md:w-[510px] md:h-[580px]   border-2 border-text z-[-99] shadow-lg  absolute top-[-.5rem] left-[.5rem] md:top-[-1rem] md:left-[1rem]"></span>
            <Image
              src={rightimg}
              className="object-cover rounded-lg"
              alt="portfilio-image"
              priority={true}
            />
          </div>
        </motion.div>
      </motion.div>
      <TimeLine />
      <Skills />
    </Layout>
  );
};

//styles

export default HomePage;
