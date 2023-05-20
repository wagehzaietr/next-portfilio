import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProject = ({ project }) => {
  const { name, description, image, link } = project;
  return (
    <div className="h-full capitalize border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
      <Image
        className="lg:h-3/6 md:h-36 w-full object-cover object-center"
        src={image}
        alt={name}
        priority={true}
        width={500} 
        height={300} 
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {name}
        </h1>
        <p className="leading-relaxed mb-3">
          {project.description.slice(0, 80)}...
        </p>

        <div className="flex items-center flex-wrap">
          <Link href={link} legacyBehavior>
            <span className="text-text hover:text-accent cursor-pointer">
              view project
            </span>
          </Link>
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
