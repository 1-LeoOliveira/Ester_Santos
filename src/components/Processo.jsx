import Reveal from './Reveal';
import { etapas, site, whatsappUrl } from '../data/site';
import { IconWhatsapp, IconMonitor, IconCalendar, IconShield } from './Icons';

const CONDICOES = [
  { Icone: IconMonitor, titulo: 'Online', texto: site.atendimento.formato },
  { Icone: IconCalendar, titulo: 'Encontros regulares', texto: 'No ritmo de cada processo' },
  { Icone: IconShield, titulo: 'Particular', texto: 'Sigilo integral sobre o processo' },
];

export default function Processo() {
  return (
    <section className="section processo" id="processo">
      <div className="shell">
        <div className="section__head">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow__dot" />
            Como funciona
          </Reveal>
          <Reveal as="h2" className="h2" delay={0.05}>
            Do primeiro contato ao <em>processo</em>
          </Reveal>
          <Reveal as="p" className="section__lead" delay={0.1}>
            Não é preciso chegar com tudo organizado nem saber explicar
            exatamente o que está acontecendo. Veja o que esperar de cada etapa
            antes mesmo de começar.
          </Reveal>
        </div>

        <ol className="processo__lista">
          {etapas.map((etapa, i) => (
            <Reveal
              as="li"
              className="etapa"
              key={etapa.num}
              delay={0.08 * i}
            >
              <span className="etapa__num">{etapa.num}</span>
              <div className="etapa__corpo">
                <h3 className="etapa__titulo">{etapa.titulo}</h3>
                <p className="etapa__texto">{etapa.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="processo__condicoes" delay={0.12}>
          {CONDICOES.map(({ Icone, titulo, texto }) => (
            <div className="condicao" key={titulo}>
              <Icone />
              <div>
                <strong>{titulo}</strong>
                <span>{texto}</span>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="processo__cta" delay={0.16}>
          <a
            className="btn btn--terra"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconWhatsapp />
            Verificar horários disponíveis
          </a>
        </Reveal>
      </div>
    </section>
  );
}
