import './secrets.css';
import { motion } from 'framer-motion';

const animationVariants = {
  view: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Secrets() {
  return (
    <section className="secrets">
      <div className="secrets__separator" />
      <h1 className="secrets__title">Los 3 secretos que veremos:</h1>
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
          <div className="secrets__text">
            Existen actores y actrices tímidas, no nacemos siendo el centro de
            atención.
          </div>
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
          <div className="secrets__text">
            Silencios incómodos: ¿Qué son y cómo evitarlos?
          </div>
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
          <div className="secrets__text">
            Reconciliarte con tu timidez no quiere decir volverte una persona
            ruidosa o dejar de ser tú, significa que ésta no tome el control de
            tu vida.
          </div>
        </div>
      </div>
      <div className="secrets__separator" />
    </section>
  );
}
