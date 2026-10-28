import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Dores from './components/Dores';
import Abordagem from './components/Abordagem';
import Processo from './components/Processo';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export default function App() {
  const [pronto, setPronto] = useState(false);

  useSmoothScroll(pronto);

  // rede de segurança: se algo travar o loader, o conteúdo aparece mesmo assim
  useEffect(() => {
    const t = setTimeout(() => setPronto(true), 7000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader onFinish={() => setPronto(true)} />
      <ScrollProgress />
      <Header />

      <main>
        <Hero pronto={pronto} />
        <Marquee />
        <About />
        <Dores />
        <Abordagem />
        <Processo />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingCTA />
    </>
  );
}
