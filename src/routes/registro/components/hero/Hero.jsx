import { motion } from 'framer-motion';
import picSrc from '../../../../assets/fondo-amixs.webp';
// import { Barlow } from 'next/font/google';

export default function Hero({ localDate, hour, count }) {
  return (
    <section className="hero">
      <motion.h2
        className="hero__hook"
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
        ¿Cansado de sentirte sola/o en una habitación llena de gente?
      </motion.h2>
      <motion.h2
        className="hero__hook"
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
        Esta clase <span className="hero__hook_accent">GRATUITA</span> es para
        ti.
      </motion.h2>
      <div className="hero__container">
        <div className="hero__container_text">
          <motion.h1
            // className={`hero__title ${barlow.className}`}
            className={`hero__title`}
            initial={{
              opacity: 0,
              x: '-1rem',
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
          >
            3 secretos de actrices y actores para socializar y no morir de
            vergüenza en el intento (aunque nunca hayas actuado)
          </motion.h1>

          <motion.h3
            className="hero__subtitle"
            initial={{
              opacity: 0,
              x: '-1rem',
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
          >
            ¡Atención! ¿Alguna vez te has preguntado cómo le hacen algunas
            personas para que no les dé pena estar frente a cientos o miles de
            personas? Aparta tu lugar en esta clase gratuita.
          </motion.h3>
          <motion.div
            className="hero__btn-container"
            initial={{
              opacity: 0,
              y: '1rem',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            <motion.div className="hero__date-container">
              <p className="hero__date">{localDate}</p>
              <p className="hero__date">{hour} hrs</p>
              <p className="hero__date">{count ? count : '¡Ya iniciamos!'}</p>
            </motion.div>
            <motion.a
              className="hero__btn"
              href="#form"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              Regístrate GRATIS
            </motion.a>
          </motion.div>
        </div>
        <img src={picSrc} alt="Grupo de amix" className="hero__img" />
      </div>
    </section>
  );
}
