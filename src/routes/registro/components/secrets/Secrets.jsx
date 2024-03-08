import { motion } from 'framer-motion';

const animationVariants = {
  view: { opacity: 1 },
  hidden: { opacity: 0.4 },
};

export default function Secrets() {
  return (
    <section className="secrets">
      <div className="secrets__separator" />
      <h1 className="secrets__title">Qué aprenderas en esta clase:</h1>
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
            DESARROLLAR. También se le llama inteligencia interpersonal.
          </p>
          <p className="secrets__text">
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
          <p className="secrets__text">
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
            La timidez no es algo malo, gran parte del mundo somos gente tímida.
            El problema está cuando ésta controla tu vida y muchas veces nos
            paraliza.
            {/* Aprende a valorar tu timidez, a dialogar con ella y que esto no
            implica volverte una persona ruidosa o dejar de ser tú. */}
          </p>
          <p className="secrets__text">
            Aprende cómo tener una mejor relación con tu timidez sin que esto
            implique volverte una persona ruidosa o dejar de ser tú.
          </p>
        </div>
      </div>
      <div className="secrets__separator" />
    </section>
  );
}
