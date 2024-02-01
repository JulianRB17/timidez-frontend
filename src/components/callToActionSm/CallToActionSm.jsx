import { motion } from 'framer-motion';
import logoSrc from '../../assets/logo-transparente.png';

export default function CallToActionSm({ buyoutUrl }) {
  return (
    <section className="call-to-action-sm">
      <img
        src={logoSrc}
        alt="logo"
        className="call-to-action-sm__logo"
        width={1654}
        height={298}
      />
      <motion.a
        className="call-to-action-sm__btn"
        initial={{ opacity: 0.5 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        rel="noopener noreferrer"
        title="Adquiere ahora el programa"
        href={buyoutUrl}
      >
        ADQUIRIR AHORA
      </motion.a>
    </section>
  );
}
