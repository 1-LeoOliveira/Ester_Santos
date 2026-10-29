import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../animations';
import { navLinks, site, whatsappUrl, instagramUrl } from '../data/site';
import { IconWhatsapp, IconInstagram, IconMenu, IconClose } from './Icons';
import Logo from './Logo';

export default function Header() {
  const [compacto, setCompacto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompacto(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuAberto);
    return () => document.body.classList.remove('menu-open');
  }, [menuAberto]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuAberto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`header ${compacto ? 'is-compact' : ''}`}>
        <div className="header__shell shell">
          <a href="#topo" className="header__logo" aria-label="Ester Santos — início">
            <Logo variante="horizontal" />
          </a>

          <nav className="header__nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="header__link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__acoes">
            <a
              className="header__social"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Instagram de ${site.nome}`}
            >
              <IconInstagram />
            </a>

            <a
              className="btn btn--terra btn--sm header__cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconWhatsapp />
              Agendar conversa
            </a>

            <button
              type="button"
              className="header__burger"
              onClick={() => setMenuAberto((v) => !v)}
              aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuAberto}
            >
              {menuAberto ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            className="menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav className="menu__nav" aria-label="Navegação">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="menu__link"
                  onClick={() => setMenuAberto(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 + i * 0.06, ease: EASE }}
                >
                  <span className="menu__num">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              className="btn btn--terra menu__cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setMenuAberto(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            >
              <IconWhatsapp />
              Agendar conversa
            </motion.a>

            <motion.a
              className="menu__social"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setMenuAberto(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: EASE }}
            >
              <IconInstagram />
              @{site.instagram}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
