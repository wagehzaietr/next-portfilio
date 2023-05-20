import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ItemsList } from "../Helpers/Data";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../public/assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const variants = {
  show: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -200,
  },
};

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Find the index of the active item based on the current path
      const index = ItemsList.findIndex((item) => item.path === url);

      setActive(index);
    };

    // Listen for route changes and update the active state
    router.events.on("routeChangeComplete", handleRouteChange);

    // Set the initial active state
    const index = ItemsList.findIndex((item) => item.path === router.pathname);
    setActive(index);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className={`${
          scroll
            ? "bg-[#ffffff] shadow-lg fixed top-0 left-0 z-[999] w-full transition duration-500 ease-in-out"
            : ""
        }`}
      >
        <motion.div className="flex container m-auto justify-between items-center ">
          <Link href={"/"} passHref>
            <Image src={Logo} alt="Logo" width={1080} height={1920} className="w-[80px]" priority={true} />
          </Link>
          <HiMenu
            size={28}
            className="md:hidden mx-2 cursor-pointer text-text"
            onClick={handleClick}
          />
          <ul className="hidden md:flex items-center">
            {ItemsList.map((item, index) => {
              const isActive = active === index;
              return (
                <motion.li
                  className={`px-3 text-[32px] capitalize font-medium tracking-wider transition duration-500 ${
                    isActive
                      ? " underline under underline-offset-[6px]  text-text"
                      : "hover:text-text"
                  }`}
                  key={index}
                  initial={{ opacity: 0, y: -200 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 * index, delay: 0.2 * index }}
                >
                  <Link href={item.path} className="text-[16px]">
                    {item.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <motion.div
        className=" flex md:hidden items-center h-[100vh] w-[57%] fixed z-[999] top-0 left-0%] bg-[#ffffff] shadow-xl"
        variants={variants}
        initial="hidden"
        animate={show ? "show" : "hidden"}
      >
        <div
          className="cursor-pointer absolute top-[2rem] right-[1rem] p-3 text-text bg-gradient-to-br from-gray-300 via-white to-gray-100
 rounded-full shadow-lg"
        >
          <MdOutlineClose size={28} onClick={handleClick} />
        </div>
        <ul className="flex flex-col p-[3.2rem] h-full">
          {ItemsList.map((item, index) => {
            return (
              <li key={index} className="py-7 px-3 capitalize">
                <Link href={item.path} className="text-[1.1rem] font-semibold">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
};

//styles

export default Navbar;
