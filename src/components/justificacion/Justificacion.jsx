import { motion } from 'framer-motion';
import './justificacion.css';

export default function Justificacion() {
  return (
    <section className="justificacion">
      <motion.h2
        className="justificacion__title"
        initial={{ y: '-1rem' }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
      >
        ¿POR QUÉ LA ACTUACIÓN ES EL MEJOR CAMINO PARA DIALOGAR CON LA TIMIDEZ?
      </motion.h2>
      <motion.p
        className="justificacion__subtitle"
        initial={{ y: '-0.5rem' }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
      >
        Hay varias razones por las que la actuación es la mejor herramienta para
        desarrollar habilidades sociales.
      </motion.p>
      <motion.ul className="justificacion__list">
        <motion.li
          className="justificacion__list-element"
          initial={{ x: '-10px' }}
          whileInView={{
            x: 0,
            transition: { duration: 1 },
          }}
        >
          No se puede actuar en soledad, sabes que invariablemente alguien te va
          a ver.
        </motion.li>
        <motion.li
          className="justificacion__list-element"
          initial={{ x: '-20px' }}
          whileInView={{
            x: 0,
            transition: { duration: 1 },
          }}
        >
          Actuar no es mentir: parte de mí sabe que estoy actuando, pero a la
          otra parte le están pasando de verdad esas cosas. Tener muchas
          experiencias en un espacio seguro es como usar rueditas en la
          bicicleta.
        </motion.li>
        <motion.li
          className="justificacion__list-element"
          initial={{ x: '-20px' }}
          whileInView={{
            x: 0,
            transition: { duration: 1 },
          }}
        >
          Porque lo he visto: aunque haya actrices y actores que son gente
          tímida o introvertida si quieren relacionarse no temen hacerlo.
        </motion.li>
        <motion.li
          className="justificacion__list-element"
          initial={{ x: '-20px' }}
          whileInView={{
            x: 0,
            transition: { duration: 1 },
          }}
        >
          La actuación brinda un espacio seguro donde podemos accionar. Pasa,
          por ejemplo en terapia, que descubres lo que necesitas cambiar en tu
          día a día, pero dar ese primer paso, esa primer acción da pánico allá
          afuera.{' '}
        </motion.li>
        <motion.li
          className="justificacion__list-element"
          initial={{ x: '-20px' }}
          whileInView={{
            x: 0,
            transition: { duration: 1 },
          }}
        >
          Actuar implica aprender a empatizar en la práctica: entender como
          personas muy diferentes a mí se relacionan porque entiendo cómo mi
          personaje se relaciona con otros. Entonces puedo pasar a mi piel el
          entender cómo relacionarme con otras personas a partir de esa
          experiencia.
        </motion.li>
        <motion.li
          className="justificacion__list-element"
          initial={{ x: '-20px' }}
          whileInView={{
            x: 0,
            transition: { duration: 1 },
          }}
        >
          Actuar es un laboratorio de las relaciones humanas.
        </motion.li>
        <motion.p
          className="justificacion__warning"
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
          OJO: Reconciliandome con mi timidez: herramientas actorales para la
          vida diaria no es un proceso psicoterapéutico ni una alternativa a
          éste, más bien un complemento. De hecho, yo sugeriría llevar un
          proceso psicoterapéutico a la par.{' '}
        </motion.p>
      </motion.ul>
    </section>
  );
}
