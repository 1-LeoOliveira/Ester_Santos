import { motion } from 'framer-motion';

/* ============================================================
   SÍMBOLO DA MARCA
   Anéis concêntricos que convergem para um centro dourado:
   as camadas da psique e o caminho de volta ao centro.
   ============================================================ */

const RAD = Math.PI / 180;
const ABERTURA = 30; // ângulo da abertura inferior de cada anel

/**
 * Desenha um anel: arco quase fechado no topo que se afunila
 * até a sua própria ponta, formando o caule.
 */
function anel({ r, cy, tip, larg }) {
  const sen = Math.sin(ABERTURA * RAD);
  const cos = Math.cos(ABERTURA * RAD);

  const ex = 100 + r * sen; // extremidade direita do arco
  const ey = cy + r * cos;
  const dx = 100 - r * sen; // extremidade esquerda do arco
  const d = tip - ey;

  const n = (v) => v.toFixed(2);

  return [
    `M${n(dx)} ${n(ey)}`,
    `A${r} ${r} 0 1 1 ${n(ex)} ${n(ey)}`,
    `C${n(ex)} ${n(ey + d * 0.45)} ${n(100 + larg)} ${n(tip - d * 0.3)} 100 ${tip}`,
    `C${n(100 - larg)} ${n(tip - d * 0.3)} ${n(dx)} ${n(ey + d * 0.45)} ${n(dx)} ${n(ey)}`,
    'Z',
  ].join(' ');
}

const ANEIS = [
  { r: 62, cy: 84, tip: 174, larg: 8 },
  { r: 51, cy: 88, tip: 181, larg: 6.5 },
  { r: 40, cy: 92, tip: 188, larg: 5 },
  { r: 29, cy: 96, tip: 194, larg: 3.5 },
  { r: 18, cy: 100, tip: 199, larg: 2 },
];

const CENTRO = { x: 100, y: 100, r: 9 };

const PONTOS = [
  { y: 210, r: 4.2 },
  { y: 222, r: 3.3 },
  { y: 233, r: 2.5 },
];

/**
 * Símbolo da marca.
 * `animado` desenha os traços (usado na tela de abertura).
 */
export function Simbolo({ animado = false, className, strokeWidth = 2.6 }) {
  const Path = animado ? motion.path : 'path';
  const Circle = animado ? motion.circle : 'circle';

  return (
    <svg
      viewBox="0 0 200 250"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {ANEIS.map((item, i) => (
          <Path
            key={item.r}
            d={anel(item)}
            {...(animado
              ? {
                  initial: { pathLength: 0, opacity: 0 },
                  animate: { pathLength: 1, opacity: 1 },
                  transition: {
                    pathLength: {
                      duration: 1.5,
                      ease: [0.4, 0, 0.2, 1],
                      delay: i * 0.12,
                    },
                    opacity: { duration: 0.4, delay: i * 0.12 },
                  },
                }
              : {})}
          />
        ))}
      </g>

      <Circle
        cx={CENTRO.x}
        cy={CENTRO.y}
        r={CENTRO.r}
        fill="var(--ouro)"
        {...(animado
          ? {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: {
                duration: 0.9,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 1,
              },
              style: { transformOrigin: `${CENTRO.x}px ${CENTRO.y}px` },
            }
          : {})}
      />

      <g fill="currentColor">
        {PONTOS.map((ponto, i) => (
          <Circle
            key={ponto.y}
            cx="100"
            cy={ponto.y}
            r={ponto.r}
            {...(animado
              ? {
                  initial: { scale: 0, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 1.3 + i * 0.12 },
                  style: { transformOrigin: `100px ${ponto.y}px` },
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
      <Simbolo className="logo__simbolo" />
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
