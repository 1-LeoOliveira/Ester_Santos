import { motion } from 'framer-motion';

/* ============================================================
   SÍMBOLO DA MARCA
   Uma espiral contínua: a volta gira sobre si mesma enquanto
   encolhe e, perto da base, é puxada até o bico — de onde
   nascem os caules em leque. O miolo se solta do puxão e
   fecha num círculo limpo em torno do centro dourado.

   Duas versões do mesmo traço: a cheia (6 voltas), para quando
   a marca aparece grande, e a reduzida (4 voltas), que é a que
   ainda se lê a 28–34px. Abaixo de ~60px a cheia vira borrão.
   ============================================================ */

const TAU = Math.PI * 2;

const COMUM = {
  r0: 86, // raio da volta de fora
  cy0: 94, // centro das voltas de fora
  cy1: 117, // centro das voltas de dentro — onde fica o ponto dourado
  descida: 1.15, // como o centro desce enquanto a espiral fecha
  bicoX: 96,
  bicoY: 196, // ponto onde os caules se encontram
  sigma: 0.62, // quanto de cada volta é puxado para o bico
  forca: 0.96,
  inicio: 1.0, // sobra de traço antes da primeira volta (o rabo da esquerda)
  fim: 1.0, // sobra depois da última
  densidade: 48, // amostras por volta
};

// giro: é o giro acumulado que abre o leque de caules.
// corte0/corte1: onde o puxão afrouxa e o miolo volta a ser círculo.
// forca: na cheia fica um pouco abaixo de 1 para os caules não empastelarem —
// eles chegam ao bico separados, como no desenho. Na reduzida, pequena demais
// para esse detalhe aparecer, o bico fechado sai mais limpo.
const CHEIA = {
  ...COMUM,
  voltas: 6,
  giro: 1.6,
  r1: 22,
  corte0: 0.68,
  corte1: 0.95,
  forca: 0.87,
};
const REDUZIDA = { ...COMUM, voltas: 4, giro: 1.05, r1: 26, corte0: 0.6, corte1: 0.92 };

/** Pontos da espiral, em coordenadas do viewBox. */
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

    // distância angular até a base da volta
    let d = ((t % TAU) + TAU) % TAU;
    if (d > Math.PI) d -= TAU;
    const m = forca * Math.exp(-Math.pow(d / c.sigma, 2));

    const px = c.bicoX + raio * Math.sin(angulo);
    const py = centroY + raio * Math.cos(angulo);

    saida.push([px * (1 - m) + c.bicoX * m, py * (1 - m) + c.bicoY * m]);
  }
  return saida;
}

/** Catmull-Rom convertido em cúbicas: a linha sai fluida, de traço só. */
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

const CAMINHO = {
  cheia: tracado(pontos(CHEIA)),
  reduzida: tracado(pontos(REDUZIDA)),
};

const CENTRO = { x: COMUM.bicoX, y: COMUM.cy1, r: 12.5 };

const PONTOS = [
  { y: 209, r: 4 },
  { y: 220, r: 3.3 },
  { y: 230, r: 2.6 },
];

// o tempo do desenho conversa com a escrita do nome no Loader
const DESENHO = { duracao: 1.7, atraso: 0.12 };

/**
 * Símbolo da marca.
 * `animado` desenha a espiral traço a traço (tela de abertura).
 * `reduzido` usa a versão de 4 voltas — obrigatória abaixo de ~60px.
 */
export function Simbolo({
  animado = false,
  reduzido = false,
  className,
  strokeWidth = 2.3,
}) {
  const Path = animado ? motion.path : 'path';
  const Circle = animado ? motion.circle : 'circle';

  return (
    <svg viewBox="0 0 200 250" fill="none" className={className} aria-hidden="true">
      <Path
        d={reduzido ? CAMINHO.reduzida : CAMINHO.cheia}
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
              transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 1.45 },
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
                  transition: { duration: 0.5, delay: 1.7 + i * 0.1 },
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
const TRACO = { horizontal: 4.6, vertical: 3.4, compacta: 4.8 };

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
        strokeWidth={TRACO[variante] ?? TRACO.horizontal}
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
