import { palavras } from '../data/site';

/** Faixa infinita com as palavras-chave da marca. */
export default function Marquee() {
  const fila = [...palavras, ...palavras, ...palavras];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__trilha">
        {[0, 1].map((copia) => (
          <div className="marquee__grupo" key={copia}>
            {fila.map((palavra, i) => (
              <span className="marquee__item" key={`${copia}-${palavra}-${i}`}>
                {palavra}
                <i className="marquee__sep" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
