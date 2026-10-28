import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../animations';
import { site } from '../data/site';
import { Simbolo } from './Logo';

const LETRAS = site.nome.split('');
const INICIO_ESCRITA = 1.3; // o nome começa enquanto a espiral fecha
const PASSO_LETRA = 0.075;
const FIM_ESCRITA = INICIO_ESCRITA + LETRAS.length * PASSO_LETRA;

/**
 * Tela de abertura: o símbolo é desenhado, o nome é escrito letra a letra
 * e a cortina sobe revelando o site.
 */
export default function Loader({ onFinish }) {
  const [progresso, setProgresso] = useState(0);
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    let carregado = document.readyState === 'complete';
    const marcarCarregado = () => {
      carregado = true;
    };
    window.addEventListener('load', marcarCarregado);

    const inicio = performance.now();
    const minimo = 2900; // tempo mínimo para a espiral e a escrita terminarem
    let frame;

    const tick = (agora) => {
      const decorrido = agora - inicio;
      // avança até 88% e segura até os assets terminarem
      const base = Math.min(88, (decorrido / minimo) * 88);
      const alvo = carregado && decorrido >= minimo ? 100 : base;

      setProgresso((atual) => {
        const proximo = atual + (alvo - atual) * 0.11;
        return proximo > 99.4 ? 100 : proximo;
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', marcarCarregado);
    };
  }, []);

  useEffect(() => {
    if (progresso < 100) return undefined;
    const t = setTimeout(() => setVisivel(false), 480);
    return () => clearTimeout(t);
  }, [progresso]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visivel && (
        <motion.div
          className="loader"
          aria-hidden="true"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 1.15, ease: EASE },
          }}
        >
          <span className="loader__aura" />

          <motion.div
            className="loader__inner"
            exit={{ opacity: 0, y: -26, transition: { duration: 0.55, ease: EASE } }}
          >
            <div className="loader__mark">
              <Simbolo animado strokeWidth={2.8} />
            </div>

            <p className="loader__nome">
              <span className="loader__escrita">
                {LETRAS.map((letra, i) => (
                  <motion.span
                    key={`${letra}-${i}`}
                    className="loader__letra"
                    initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.5,
                      ease: EASE,
                      delay: INICIO_ESCRITA + i * PASSO_LETRA,
                    }}
                  >
                    {letra === ' ' ? ' ' : letra}
                  </motion.span>
                ))}
                <motion.i
                  className="loader__caret"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0, 1, 0, 1, 0] }}
                  transition={{
                    duration: 1.6,
                    times: [0, 0.05, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
                    delay: INICIO_ESCRITA - 0.1,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                />
              </span>
            </p>

            <motion.p
              className="loader__cargo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: FIM_ESCRITA + 0.1, ease: EASE }}
            >
              <i className="loader__cargo-ponto" />
              {site.profissao}
              <i className="loader__cargo-ponto" />
            </motion.p>

            <motion.p
              className="loader__abordagem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: FIM_ESCRITA + 0.26, ease: EASE }}
            >
              {site.abordagem}
            </motion.p>

            <div className="loader__bar">
              <motion.span style={{ width: `${progresso}%` }} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
