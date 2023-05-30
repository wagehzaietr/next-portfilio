import '../styles/globals.css';
import { Fredoka } from '@next/font/google';
import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: '600',
});

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={fredoka.className}>
      {loading ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ReactLoading type="spin" color="#000" height={100} width={100} />
        </div>
      ) : (
        <div>
          <Component {...pageProps} />
        </div>
      )}
    </div>
  );
}
