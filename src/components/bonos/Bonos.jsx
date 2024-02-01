import { motion } from 'framer-motion';

export default function Bonos() {
  return (
    <section className="bonos">
      <motion.h2
        className="bonos__title"
        initial={{ y: '-1rem' }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
      >
        A PARTE DE TODO ESO
      </motion.h2>
      <p className="bonos__text bonos__text_general">
        También te llevarás los siguientes regalos:
      </p>
      <div className="bonos__container">
        <div className="bonos__element">
          <motion.h3
            className="bonos__number"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1 },
            }}
          >
            1
          </motion.h3>
          <p className="bonos__text">Kit de comunicación efectiva</p>
        </div>
        <div className="bonos__element">
          <motion.h3
            className="bonos__number"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
          >
            2
          </motion.h3>
          <p className="bonos__text">
            Masterclass: ¿Qué es una amistad saludable?
          </p>
        </div>
        <div className="bonos__element">
          <motion.h3
            className="bonos__number"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1 },
            }}
          >
            3
          </motion.h3>
          <p className="bonos__text">
            Masterclass: Estrategias de memorización
          </p>
        </div>
        <div className="bonos__element">
          <motion.h3
            className="bonos__number"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1.5 },
            }}
          >
            4
          </motion.h3>
          <p className="bonos__text">Infografía: ¿Qué es la autoestima?</p>
        </div>
      </div>
    </section>
  );
}
