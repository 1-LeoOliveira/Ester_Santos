import { motion } from 'framer-motion';
import { TRACO, CENTRO, PONTOS } from '../data/marca';

/* ============================================================
   SÍMBOLO DA MARCA

   O traço grande é o desenho da própria Ester, extraído da arte
   original como linha de centro (ver src/data/marca.js).

   Abaixo de uns 40px esse desenho vira borrão: são seis voltas que
   se cruzam, e nesse tamanho não sobra pixel para elas. Para o
   cabeçalho e os ícones existe uma redução — uma espiral de quatro
   voltas gerada por fórmula, ancorada nas mesmas proporções dela
   (mesmo centro dourado, mesmos pontos, mesmo bico), que é o que
   uma marca faz quando o desenho cheio não cabe.
   ============================================================ */

const TAU = Math.PI * 2;

// a redução nasce das medidas da arte dela, não de números soltos
const REDUZIDA = {
  voltas: 4,
  r0: 84,
  r1: 26,
  cy0: 100,
  cy1: CENTRO.y,
  descida: 1.15,
  bicoX: CENTRO.x,
  bicoY: 202,
  sigma: 0.62,
  forca: 0.96,
  giro: 1.05,
  corte0: 0.6,
  corte1: 0.92,
  inicio: 1.0,
  fim: 1.0,
  densidade: 48,
};

/** Pontos da espiral reduzida, no mesmo viewBox da arte dela. */
function pontos(c) {
  const total = c.voltas * TAU;
  const tA = -c.inicio;
  const tB = total + c.fim;
  const passos = Math.round(((tB - tA) / TAU) * c.densidade);
  const saida = [];

  for (let i = 0; i <= passos; i++) {
    const t = tA + ((tB - tA) * i) / passos;
    const k = Math.min(1, Math.max(0, t / total));

    const raio = c.r0 * Math.pow(c.r1 / c.r0, k);
    const centroY = c.cy0 + (c.cy1 - c.cy0) * Math.pow(k, c.descida);
    const angulo = t + c.giro * k;

    // o puxão até o bico vale só nas voltas de fora
    const s = Math.min(1, Math.max(0, (k - c.corte0) / (c.corte1 - c.corte0)));
    const forca = c.forca * (1 - s * s * (3 - 2 * s));

    let d = ((t % TAU) + TAU) % TAU;
    if (d > Math.PI) d -= TAU;
    const m = forca * Math.exp(-Math.pow(d / c.sigma, 2));

    const px = c.bicoX + raio * Math.sin(angulo);
    const py = centroY + raio * Math.cos(angulo);

    saida.push([px * (1 - m) + c.bicoX * m, py * (1 - m) + c.bicoY * m]);
  }
  return saida;
}

/** Catmull-Rom convertido em cúbicas. */
function tracado(pts) {
  const n = (v) => v.toFixed(2);
  let d = `M${n(pts[0][0])} ${n(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    d += ` C${n(p1[0] + (p2[0] - p0[0]) / 6)} ${n(p1[1] + (p2[1] - p0[1]) / 6)}`;
    d += ` ${n(p2[0] - (p3[0] - p1[0]) / 6)} ${n(p2[1] - (p3[1] - p1[1]) / 6)}`;
    d += ` ${n(p2[0])} ${n(p2[1])}`;
  }
  return d;
}

const TRACO_REDUZIDO = tracado(pontos(REDUZIDA));

// o tempo do desenho conversa com a escrita do nome no Loader
const DESENHO = { duracao: 2, atraso: 0.12 };

/**
 * Símbolo da marca.
 * `animado` desenha o traço de ponta a ponta (tela de abertura).
 * `reduzido` usa a espiral de 4 voltas — obrigatória abaixo de ~40px.
 */
export function Simbolo({
  animado = false,
  reduzido = false,
  className,
  strokeWidth = 2.6,
}) {
  const Path = animado ? motion.path : 'path';
  const Circle = animado ? motion.circle : 'circle';

  return (
    <svg viewBox="0 0 200 250" fill="none" className={className} aria-hidden="true">
      <Path
        d={reduzido ? TRACO_REDUZIDO : TRACO}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...(animado
          ? {
              initial: { pathLength: 0, opacity: 0 },
              animate: { pathLength: 1, opacity: 1 },
              transition: {
                pathLength: {
                  duration: DESENHO.duracao,
                  ease: [0.4, 0, 0.2, 1],
                  delay: DESENHO.atraso,
                },
                opacity: { duration: 0.3, delay: DESENHO.atraso },
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

// quanto menor o símbolo, mais pesado precisa ser o traço
const TRACO_POR_VARIANTE = { horizontal: 4.4, vertical: 3.2, compacta: 4.6 };

/**
 * Assinatura completa da marca.
 * variante: 'vertical' | 'horizontal' | 'compacta'
 */
export default function Logo({ variante = 'horizontal', className = '' }) {
  return (
    <span className={`logo logo--${variante} ${className}`.trim()}>
      <Simbolo
        className="logo__simbolo"
        reduzido
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
