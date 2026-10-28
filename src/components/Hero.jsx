import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EASE } from '../animations';
import { site, whatsappUrl } from '../data/site';
import { IconWhatsapp, IconArrowDown, IconMonitor, IconShield } from './Icons';
import { Simbolo } from './Logo';

const TITULO = ['O caminho', 'de volta', 'ao centro'];

export default function Hero({ pronto }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Apenas profundidade: o conteúdo nunca desaparece enquanto está na tela.
  const yFoto = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const yTexto = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);

  const animar = pronto ? 'show' : 'hidden';

  return (
    <section className="hero" id="topo" ref={ref}>
      <div className="hero__fundo" aria-hidden="true">
        <Simbolo className="hero__marca-dagua" strokeWidth={0.8} />
      </div>

      <div className="hero__shell shell">
        <motion.div className="hero__texto" style={{ y: yTexto }}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={animar === 'show' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <span className="eyebrow__dot" />
            {site.profissao} · {site.crp}
          </motion.p>

          <h1 className="hero__titulo">
            {TITULO.map((linha, i) => (
              <span className="hero__linha" key={linha}>
                <motion.span
                  className="hero__linha-interna"
                  initial={{ y: '110%' }}
                  animate={animar === 'show' ? { y: '0%' } : {}}
                  transition={{ duration: 1.1, delay: 0.22 + i * 0.11, ease: EASE }}
                >
                  {i === 2 ? (
                    <>
                      ao <em>centro</em>
                    </>
                  ) : (
                    linha
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={animar === 'show' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.62, ease: EASE }}
          >
            Acompanhamento psicológico para mulheres adultas que atravessam
            períodos de transição, questionamento e reconstrução da identidade —
            na maternidade, na carreira, nos relacionamentos e no pertencimento.
          </motion.p>

          <motion.div
            className="hero__acoes"
            initial={{ opacity: 0, y: 20 }}
            animate={animar === 'show' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.76, ease: EASE }}
          >
            <a
              className="btn btn--terra"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconWhatsapp />
              Agendar primeira conversa
            </a>
            <a className="btn btn--ghost" href="#sobre">
              Conhecer o trabalho
              <IconArrowDown />
            </a>
          </motion.div>

          <motion.ul
            className="hero__selos"
            initial={{ opacity: 0 }}
            animate={animar === 'show' ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.92, ease: EASE }}
          >
            <li>
              <IconMonitor />
              {site.atendimento.formato}
            </li>
            <li>
              <IconShield />
              {site.abordagem}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__midia"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={animar === 'show' ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.34, ease: EASE }}
        >
          <motion.div className="hero__moldura" style={{ y: yFoto }}>
            <img
              src="./img/ester-santos-retrato.jpg"
              alt="Ester Santos, psicóloga clínica, em seu espaço de atendimento"
              width="768"
              height="1344"
              loading="eager"
              fetchPriority="high"
            />
            <span className="hero__veu" aria-hidden="true" />
          </motion.div>

          <motion.div
            className="hero__assinatura"
            initial={{ opacity: 0, y: 24 }}
            animate={animar === 'show' ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1, ease: EASE }}
          >
            <span className="hero__assinatura-nome">{site.tagline}</span>
            <span className="hero__assinatura-cargo">
              {site.nome} · {site.crp}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        className="hero__scroll"
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={animar === 'show' ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="hero__scroll-linha" />
        <span className="hero__scroll-texto">Role</span>
      </motion.a>
    </section>
  );
}
