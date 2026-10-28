import Reveal from './Reveal';
import { Simbolo } from './Logo';
import { pilares } from '../data/site';
import { IconQuote } from './Icons';

export default function Abordagem() {
  return (
    <section className="section section--escura abordagem" id="abordagem">
      <div className="abordagem__fundo" aria-hidden="true">
        <Simbolo className="abordagem__marca" strokeWidth={0.8} />
      </div>

      <div className="shell abordagem__shell">
        <div className="section__head">
          <Reveal as="p" className="eyebrow eyebrow--claro">
            <span className="eyebrow__dot" />
            A abordagem
          </Reveal>
          <Reveal as="h2" className="h2 h2--claro" delay={0.05}>
            Psicologia Analítica, de <em>Carl Gustav Jung</em>
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.1}>
            Uma perspectiva que considera a singularidade da sua história e busca
            compreender os significados das suas experiências, os conflitos
            internos e os padrões que se repetem.
          </Reveal>
        </div>

        <div className="abordagem__grid">
          {pilares.map((pilar, i) => (
            <Reveal
              className="pilar"
              as="article"
              key={pilar.titulo}
              delay={0.07 * i}
            >
              <span className="pilar__marca" aria-hidden="true">
                <Simbolo justo strokeWidth={4.2} />
              </span>
              <h3 className="pilar__titulo">{pilar.titulo}</h3>
              <p className="pilar__texto">{pilar.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="abordagem__citacao" delay={0.1}>
          <IconQuote className="abordagem__aspas" />
          <blockquote>
            <p>
              Quem olha para fora, sonha. Quem olha para dentro, desperta.
            </p>
            <footer>Carl Gustav Jung</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
