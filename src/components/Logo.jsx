import { motion } from 'framer-motion';
import { TRACO, CENTRO, PONTOS } from '../data/marca';

/* ============================================================
   SÍMBOLO DA MARCA

   É o desenho da própria Ester, extraído da arte original como
   linha de centro (ver src/data/marca.js). Um traço só, em todo
   tamanho — não há versão "simplificada" da marca.

   `justo` recorta a caixa nos limites do traço. Serve onde o
   símbolo aparece pequeno (cabeçalho, selos, ícones): sem a
   margem morta ele desenha uns 20% maior na mesma altura, que é
   o que faz ele continuar legível ali.
   ============================================================ */

const CAIXA = '0 0 200 250';
const CAIXA_JUSTA = '7 10 186 231';

// quanto menor o símbolo, mais pesado precisa ser o traço
const TRACO_POR_VARIANTE = { horizontal: 4.2, vertical: 3.2, compacta: 4.6 };

/**
 * Símbolo da marca.
 * `animado` desenha o traço de ponta a ponta (tela de abertura).
 * `justo` recorta a caixa — use quando o símbolo for pequeno.
 */
export function Simbolo({
  animado = false,
  justo = false,
  className,
  strokeWidth = 2.6,
}) {
  const Path = animado ? motion.path : 'path';
  const Circle = animado ? motion.circle : 'circle';

  return (
    <svg
      viewBox={justo ? CAIXA_JUSTA : CAIXA}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <Path
        d={TRACO}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(animado
          ? {
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 1 },
              transition: {
                pathLength: { duration: 2, ease: [0.4, 0, 0.2, 1], delay: 0.12 },
                opacity: { duration: 0.3, delay: 0.12 },
              },
            }
          : {})}
      />

      <Circle
        cx={CENTRO.x}
        cy={CENTRO.y}
        r={CENTRO.r}
        fill="var(--ouro)"
        {...(animado
          ? {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 1.6 },
              style: { transformOrigin: `${CENTRO.x}px ${CENTRO.y}px` },
            }
          : {})}
      />

      <g fill="var(--ouro)">
        {PONTOS.map((ponto, i) => (
          <Circle
            key={ponto.y}
            cx={CENTRO.x}
            cy={ponto.y}
            r={ponto.r}
            {...(animado
              ? {
                  initial: { scale: 0, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 1.9 + i * 0.1 },
                  style: { transformOrigin: `${CENTRO.x}px ${ponto.y}px` },
                }
              : {})}
          />
        ))}
      </g>
    </svg>
  );
}

/**
 * Assinatura completa da marca.
 * variante: 'vertical' | 'horizontal' | 'compacta'
 */
export default function Logo({ variante = 'horizontal', className = '' }) {
  return (
    <span className={`logo logo--${variante} ${className}`.trim()}>
      <Simbolo
        className="logo__simbolo"
        justo
        strokeWidth={TRACO_POR_VARIANTE[variante] ?? TRACO_POR_VARIANTE.horizontal}
      />
      <span className="logo__texto">
        <span className="logo__nome">Ester Santos</span>
        {variante !== 'compacta' && (
          <span className="logo__cargo">
            <i className="logo__ponto" />
            Psicóloga Clínica
            <i className="logo__ponto" />
          </span>
        )}
      </span>
    </span>
  );
}
