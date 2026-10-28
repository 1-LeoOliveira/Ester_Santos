import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import { EASE } from '../animations';
import { faq } from '../data/site';
import { IconPlus } from './Icons';

export default function Faq() {
  const [aberto, setAberto] = useState(0);

  return (
    <section className="section section--areia faq" id="duvidas">
      <div className="shell faq__grid">
        <div className="faq__intro">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" />
            Dúvidas frequentes
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            O que costumam me <em>perguntar</em> antes de começar
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.1}>
            Se a sua dúvida não estiver aqui, me mande uma mensagem. Respondo
            pessoalmente.
          </Reveal>
        </div>

        <div className="faq__lista">
          {faq.map((item, i) => {
            const ativo = aberto === i;
            return (
              <Reveal
                className={`faq__item ${ativo ? 'is-open' : ''}`}
                key={item.pergunta}
                delay={0.05 * i}
              >
                <button
                  type="button"
                  className="faq__pergunta"
                  onClick={() => setAberto(ativo ? -1 : i)}
                  aria-expanded={ativo}
                >
                  <span>{item.pergunta}</span>
                  <IconPlus className="ico faq__icone" />
                </button>

                <AnimatePresence initial={false}>
                  {ativo && (
                    <motion.div
                      className="faq__resposta"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <p>{item.resposta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
