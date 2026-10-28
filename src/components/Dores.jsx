import Reveal from './Reveal';
import { dores, whatsappUrl } from '../data/site';
import { IconWhatsapp } from './Icons';

export default function Dores() {
  return (
    <section className="section section--areia dores" id="para-quem">
      <div className="shell">
        <div className="section__head">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" />
            Para quem é
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            Talvez você <em>reconheça</em> alguma destas situações
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.1}>
            Nem sempre é possível nomear o que se sente. Algumas mulheres chegam
            com uma queixa específica; outras percebem apenas que algo já não faz
            sentido como antes.
          </Reveal>
        </div>

        <div className="dores__grid">
          {dores.map((item, i) => (
            <Reveal
              className="dor"
              key={item.num}
              delay={0.06 * i}
              as="article"
            >
              <span className="dor__num">{item.num}</span>
              <h3 className="dor__titulo">{item.titulo}</h3>
              <p className="dor__texto">{item.texto}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="dores__fecho" delay={0.12}>
          <p>
            A terapia pode ser procurada não apenas em momentos de crise, mas
            também quando existe o desejo de compreender melhor a própria
            experiência e construir novas possibilidades.
          </p>
          <a
            className="btn btn--terra"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconWhatsapp />
            Quero dar o primeiro passo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
