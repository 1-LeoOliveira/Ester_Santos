import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../animations';
import { whatsappUrl } from '../data/site';
import { IconWhatsapp } from './Icons';

/** Botão flutuante de WhatsApp — aparece depois do primeiro scroll. */
export default function FloatingCTA() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visivel && (
        <motion.a
          className="flutuante"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Falar no WhatsApp"
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <IconWhatsapp />
          <span className="flutuante__texto">Agendar conversa</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
