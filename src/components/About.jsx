import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';
import { Simbolo } from './Logo';
import { site, whatsappUrl } from '../data/site';
import { IconWhatsapp } from './Icons';

const CREDENCIAIS = [
  { valor: site.crp, rotulo: 'Registro profissional' },
  { valor: 'Pós-graduação', rotulo: 'em Psicologia Clínica' },
  { valor: 'Analítica', rotulo: 'Abordagem de Carl Gustav Jung' },
  { valor: 'Online', rotulo: 'de onde você estiver' },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section className="section sobre" id="sobre" ref={ref}>
      <div className="shell sobre__grid">
        <div className="sobre__midia">
          <motion.div className="sobre__foto" style={{ y }}>
            <img
              src="./img/ester-santos-retrato.jpg"
              alt="Ester Santos em seu consultório"
              width="768"
              height="1344"
              loading="lazy"
            />
          </motion.div>

          <Reveal className="sobre__selo" delay={0.2}>
            <Simbolo className="sobre__selo-simbolo" justo strokeWidth={4.2} />
            <span>
              Transições que transformam.
              <br />
              Identidades que se reconstroem.
            </span>
          </Reveal>
        </div>

        <div className="sobre__texto">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" />
            Sobre mim
          </Reveal>

          <Reveal as="h2" className="h2" delay={0.05}>
            Compreender a mulher para além dos <em>papéis</em> que ela
            desempenha
          </Reveal>

          <Reveal delay={0.12}>
            <p>
              Sou <strong>{site.nome}</strong>, psicóloga clínica com
              pós-graduação em Psicologia Clínica e orientação fundamentada na
              Psicologia Analítica, desenvolvida por Carl Gustav Jung. Minha
              atuação é voltada a mulheres adultas que atravessam períodos de
              transição, questionamento e reconstrução da identidade.
            </p>
            <p>
              Meu posicionamento clínico parte do interesse em compreender a
              mulher para além dos papéis que desempenha e das expectativas que
              aprendeu a atender. Acredito na importância de olhar para a
              história de cada pessoa, suas contradições, seus vínculos, seus
              desejos e as transformações que atravessam sua identidade.
            </p>
            <p>
              Busco integrar profundidade na compreensão da subjetividade com
              atenção às questões concretas da vida cotidiana — maternidade,
              carreira, relacionamentos, autonomia e pertencimento. Um espaço em
              que a mulher possa olhar para si com mais consciência e explorar
              novas formas de se relacionar consigo mesma.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="sobre__credenciais">
              {CREDENCIAIS.map((item) => (
                <li key={item.valor}>
                  <strong>{item.valor}</strong>
                  <span>{item.rotulo}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.26}>
            <a
              className="btn btn--terra"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconWhatsapp />
              Conversar com a Ester
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
