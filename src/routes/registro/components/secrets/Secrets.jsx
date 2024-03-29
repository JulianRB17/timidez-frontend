import { motion } from 'framer-motion';

const animationVariants = {
  view: { opacity: 1 },
  hidden: { opacity: 0.4 },
};

export default function Secrets() {
  return (
    <section className="secrets">
      <h1 className="secrets__title">Qué aprenderás en esta clase:</h1>
      <div className="secrets__container">
        <div className="secrets__element">
          <motion.h2
            className="secrets__number"
            variants={animationVariants}
            initial={'hidden'}
            whileInView={'view'}
            transition={{ delay: 0.1 }}
          >
            1
          </motion.h2>
          <p className="secrets__subtitle">
            ¿Qué es y cómo se desarrolla la inteligencia social?
          </p>
          <p className="secrets__text">
            Porque sí, existe y como cualquier tipo de inteligencia se puede
            <span className="secrets__accent"> desarrollar</span>.
          </p>
          <p className="secrets__text secrets__accent">
            Aprende cómo volverte más inteligente socialmente.
          </p>
        </div>
        <div className="secrets__element">
          <motion.h2
            className="secrets__number"
            variants={animationVariants}
            initial={'hidden'}
            whileInView={'view'}
            transition={{ delay: 0.6 }}
          >
            2
          </motion.h2>
          <p className="secrets__subtitle">
            Silencios incómodos: ¿Qué son y cómo evitarlos?
          </p>
          <p className="secrets__text">
            Todo el mundo hemos estado ahí: estamos con alguien y ya no sabemos
            qué decir. Muchas personas recomiendan preguntar algo... pero ¿y si
            no se te ocurre nada?
          </p>
          <p className="secrets__text secrets__accent">
            Aprende el porqué existen estos silencios y herramientas claras,
            probadas y específicas de qué hacer con ellos.
          </p>
        </div>
        <div className="secrets__element">
          <motion.h2
            className="secrets__number"
            variants={animationVariants}
            initial={'hidden'}
            whileInView={'view'}
            transition={{ delay: 1.2 }}
          >
            3
          </motion.h2>
          <p className="secrets__subtitle">
            ¿Qué es la timidez? ¿Se puede hacer algo con ella?
          </p>
          <p className="secrets__text">
            <span className="secrets__accent">La timidez no es algo malo</span>,
            gran parte del mundo somos gente tímida.
            <span className="secrets__accent">
              {' '}
              La gente tímida no estamos rota.{' '}
            </span>
            El problema está cuando ésta controla tu vida y muchas veces nos
            paraliza.
            {/* Aprende a valorar tu timidez, a dialogar con ella y que esto no
            implica volverte una persona ruidosa o dejar de ser tú. */}
          </p>
          <p className="secrets__text">
            Aprende cómo tener una mejor relación con tu timidez sin que esto
            implique volverte una persona ruidosa o
            <span className="secrets__accent"> dejar de ser tú.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
