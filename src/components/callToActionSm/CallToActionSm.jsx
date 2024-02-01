import { motion } from 'framer-motion';
import './callToActionSm.css';

export default function CallToActionSm() {
  return (
    <section className="call-to-action-sm">
      <img
        src="/logo-transparente.png"
        alt="logo"
        className="call-to-action-sm__logo"
        width={1654}
        height={298}
      />
      <motion.button
        className="call-to-action-sm__btn"
        initial={{ opacity: 0.5 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
      >
        ADQUIRIR AHORA
      </motion.button>
    </section>
  );
}
