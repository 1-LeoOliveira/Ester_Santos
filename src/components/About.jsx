import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Reveal from './Reveal';
import { Simbolo } from './Logo';
import { site, whatsappUrl } from '../data/site';
import { IconWhatsapp } from './Icons';

const CREDENCIAIS = [
  { valor: site.crp, rotulo: 'Registro profissional' },
  { valor: 'Pós-graduação', rotulo: 'em Psicologia Clínica' },
  { valor: 'Junguiana', rotulo: 'Psicologia Analítica' },
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
            <Simbolo className="sobre__selo-simbolo" strokeWidth={2.2} />
            <span>
              Acolher o que transforma.
              <br />
              Guiar o que permanece.
            </span>
          </Reveal>
        </div>

        <div className="sobre__texto">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" />
            Sobre mim
          </Reveal>

          <Reveal as="h2" className="h2" delay={0.05}>
            Uma escuta que investiga a <em>identidade</em> sem perder a vida real
            de vista
          </Reveal>

          <Reveal delay={0.12}>
            <p>
              Sou <strong>{site.nome}</strong>, psicóloga clínica com
              pós-graduação em Psicologia Clínica e atuação orientada pela
              Psicologia Analítica Junguiana. Meu trabalho é com mulheres adultas
              que atravessam mudanças significativas na vida e precisam
              compreender quem são, o que mudou em si mesmas e quais sentidos
              desejam construir para a próxima etapa da sua trajetória.
            </p>
            <p>
              A profundidade não me afasta do concreto. As relações, a
              maternidade, a carreira, as escolhas e as contradições de ser
              mulher adulta entram na sala exatamente como são — porque é ali,
              no meio da vida acontecendo, que a identidade se reconstrói.
            </p>
            <p>
              Muitas chegam depois de anos adiando. Não por falta de vontade, mas
              pela dificuldade de reconhecer a si mesma em meio aos papéis, às
              expectativas e às mudanças da vida adulta. Esse reconhecimento é o
              ponto de partida do nosso encontro.
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
