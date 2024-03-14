import { motion } from 'framer-motion';
import fondoImg from '../../assets/bio.webp';

export default function Bio() {
  return (
    <section id="bio" className="bio">
      <div className="bio__text-container">
        <motion.h3
          className="bio__subtitle"
          initial={{ y: '-0.5rem' }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          ¿Quién soy?
        </motion.h3>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Mi nombre es Julián Reyes Botello. Soy actor proferional egresado de
          la licenciatura en teatro de la UNAM. También tengo un par de
          diplomados, uno de ellos internacional (Argentina-México). Desde 2012,
          he dirigido, producido o actuado en más de 15 obras.
        </motion.p>

        <motion.h3
          className="bio__subtitle"
          initial={{ x: '0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Lo importante es lo que viene:
        </motion.h3>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Yo era un adolescente{' '}
          <span className="bio__text-accent">muy tímido</span>. Era bulleado,
          tenía un apodo horrible, me sentía feo y gordo,{' '}
          <span className="bio__text-accent">
            me escondí debajo de un suéter durante 7 años{' '}
          </span>
          porque me daba vergüenza que vieran mi cuerpo. Muchas cosas después me
          enamoré del teatro: el espacio donde podía vivir una realidad muy
          diferente a la mía que odiaba. Tomé esa decisión hace 15 años.{' '}
          <span className="bio__text-accent">
            Hoy mi vida es totalmente diferente.
          </span>{' '}
        </motion.p>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          <span className="bio__text-accent">
            Soy una persona tímida, pero a la vez soy extrovertido{' '}
          </span>
          (eso es posible, sí). Mi profesión me ha permitido exponerme frente a
          cientos de personas:
          <span className="bio__text-accent">
            {' '}
            la timidez ya no rige mi vida.
          </span>
        </motion.p>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Decidí crear este curso para ayudar a otras personas timidaz que
          quieren
          <span className="bio__text-accent">
            {' '}
            transformar su vida y dejen atrás el miedo a relacionarse.{' '}
          </span>
        </motion.p>
      </div>
      <img
        src={fondoImg}
        alt="Julián Reyes Botello"
        height={1080}
        width={720}
        className="bio__img"
      />
    </section>
  );
}
