import React from 'react';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router';
import Layout from '../Layout ';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectsList } from 'src/Helpers/ProjectsList';

const ProjectsId = () => {
  const router = useRouter();
  const projectId = router.query.projectsId;

  // Find the project with the matching id
  const project = ProjectsList.find((p) => p.id === parseInt(projectId));
  console.log(projectId);
  if (!project) {
    return <p>Project not found</p>;
  }
  // Render the project information
  return (
    <Layout title={project.name}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container flex flex-col items-center mx-auto p-5"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full  md:w-[80%] h-[300px] md:h-[500px] mb-5"
        >
          <Image
            src={project.image}
            alt={project.name}
            className=" w-[100%] h-[100%] rounded-lg shadow-lg object-cover"
            priority={true}
            width={1920}
            height={1080}
          />
        </motion.div>
        <div className="w-full md:w-[80%] flex flex-col-reverse  md:flex-row justify-between ">
          <div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 20 }}
            className="py-5 text-text"
          >
            <h1 className="text-1xl md:text-2xl font-bold">{project.name}</h1>
            <p className="text-gray-600 text-1xl md:text-[1.1rem] mr-[4rem] pt-3">
              {project.description}
            </p>
            <div className={project.link}>
              <Link href={project.link} target="blank">
                <button className="flex text-1xl md:text-2xl items-center mt-5 capitalize">
                  View the project
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  >
                    {project.link}
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="py-5 text-text2 w-full md:w-[800px] flex flex-col">
            <span className="text-text text-[1.1rem] md:text-[1.2rem]">
              Used technologies:
            </span>
            <span className="text-text2 text-[1.2rem] flex items-center mt-[20px] md:mt-[10px] flex-wrap">
              {project.technologies.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  width={55} // Set the width of the image
                  height={55} // Set the height of the image
                  className="object-contain aspect-[4/3] m-1 md:aspect-[4/3]"
                  priority={true}
                />
              ))}
            </span>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default withRouter(ProjectsId);
