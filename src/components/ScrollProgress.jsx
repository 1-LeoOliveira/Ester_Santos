import { motion, useScroll, useSpring } from 'framer-motion';

/** Fio dourado no topo que acompanha a leitura da página. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const largura = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX: largura }} />;
}
