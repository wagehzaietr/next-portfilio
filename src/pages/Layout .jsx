import Head from 'next/head';
import Navbar from '../components/Navbar';
import { GiReturnArrow } from 'react-icons/gi';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
      </Head>
      <Navbar />
      <div
        className="fixed right-0 z-10 text-text bottom-0 m-5 cursor-pointer"
        onClick={scrollToTop}
      >
        {scroll ? <GiReturnArrow size={35} color="#ff014f" /> : null}
      </div>
      {children}
    </>
  );
};

export default Layout;
