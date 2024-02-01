import { motion } from 'framer-motion';
import logoSrc from '../../assets/logo-transparente.png';

export default function HeroVentas() {
  return (
    <section className="hero-ventas">
      <motion.h2
        className="hero-ventas__hook"
        initial={{
          opacity: 0,
          y: '-1rem',
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      >
        ¿Te frustra o te enoja no haber logrado relacionarte con otras personas
        de forma natural? ¿Quisieras ser una persona más espontánea? ¿Sientes
        que te estás perdiendo momentos en la vida por tener pena? ¿Quisieras
        desenvolverte mejor frente a otras personas?
      </motion.h2>

      <motion.h2
        className="hero-ventas__title"
        initial={{ x: '-1em', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
      >
        Las habilidades sociales se puede desarrollar, descubre las técnicas que
        llevan perfeccionándose 115 años para disminuir el miedo al juicio ajeno
        y acciónalas en un entorno seguro y de confianza.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: '-1rem' }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 0.2 },
        }}
        className="hero-ventas__container"
      >
        <img
          src={logoSrc}
          alt="logo"
          className="hero-ventas__logo"
          width={1654}
          height={298}
        />
      </motion.div>
      <div className="hero-ventas__credits-container">
        <p className="hero-ventas__credits">Fotografía: Carlos Alvar</p>
        <p className="hero-ventas__credits">
          Dirección escénica: Julián Reyes Botello
        </p>
      </div>
    </section>
  );
}
