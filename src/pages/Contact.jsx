import Layout from 'src/pages/Layout ';
import React from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { RiMapPin2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { motion } from 'framer-motion';

const ContactInfo = [
  {
    id: 1,
    name: 'name',
    icon: <FaUser size={15} />,
    info: 'Wageh zaietr',
  },
  {
    id: 1,
    name: 'email',
    icon: <IoMdMail size={15} />,
    info: 'bad1game1@hotmail.com',
  },
  {
    id: 1,
    name: 'phone',
    icon: <AiFillPhone size={15} />,
    info: '+963 960902967',
  },
  {
    id: 1,
    name: 'address',
    icon: <RiMapPin2Fill size={15} />,
    info: 'Damascus syria',
  },
];

const Contact = () => {
  return (
    <Layout>
      <main className="flex h-screen justify-center items-center md:my-5 my-[220px]">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container flex md:flex md:flex-row flex-col h-full justify-center mx-auto px-5 py-[4.2rem]"
        >
          <div className=" bg-text z-10 shadow-cartoon p-[2rem] md:w-[25%] md:h-[85%] w-[100%] h-[85%] rounded-md ">
            <h1 className="capitalize text-3xl text-white">contact info</h1>
            <div className="mt-[3.2rem] flex items-center gap-2">
              <div>
                {ContactInfo.map((ContactData, index) => {
                  const { icon, name, info } = ContactData;
                  return (
                    <ul key={index}>
                      <li className="flex items-center capitalize mt-6 text-[15px] text-white gap-2">
                        {icon}
                        {name}
                      </li>
                      <li className="mt-1 text-text2">{info}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" bg-white shadow-md shadow-cartoon w-[100%] md:w-[40%] md:h-[82%] p-[2rem] h-[100%] mt-3">
            <div>
              <h1 className="text-3xl text-text2 capitalize border-b-2 border-[rgba(0,0,0,0.2)] pb-[.6rem]">
                contact me
              </h1>
              <form
                className="mt-[2rem]"
                action="https://formsubmit.co/bad1game1@hotmail.com"
                method="POST"
              >
                <label htmlFor="name" className="text-text2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  id="name"
                  className="mt-1 my-4 border-[1px] border-[rgba(0,0,0,0.2)] p-[.5rem] w-full outline-none"
                />
                <label htmlFor="name" className="text-text2">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  id="name"
                  className="mt-1 my-4 border-[1px] border-[rgba(0,0,0,0.2)] p-[.5rem] w-full outline-none"
                />
                <label htmlFor="name" className="text-text2 capitalize">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter your Phone"
                  required
                  id="name"
                  className="mt-1 my-4 border-[1px] border-[rgba(0,0,0,0.2)] p-[.5rem] w-full outline-none"
                />
                <label htmlFor="message" className="text-text2">
                  Message
                </label>
                <textarea
                  placeholder="get in touch"
                  cols="30"
                  rows="8"
                  className="mt-1 border-[1px] border-[rgba(0,0,0,0.2)] p-[.5rem] w-full outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="my-2 w-full shadow-sm shadow-cartoon bg-text text-white p-[.5rem] rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default Contact;
