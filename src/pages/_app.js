import '../styles/globals.css';
import { Fredoka } from '@next/font/google';
import { motion } from 'framer-motion';
// import { ProjectProvider } from 'src/context/SanityContext';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: '600',
});

export default function App({ Component, pageProps }) {
  //loading

  return (
    <motion.div className={fredoka.className}>
      <Component {...pageProps} />
    </motion.div>
  );
}
