import { motion } from 'framer-motion';
import fondoImg from '../../assets/bio.webp';

export default function Bio() {
  return (
    <section id="bio" className="bio">
      <div className="bio__text-container">
        <motion.h1
          className="bio__title"
          initial={{ y: '-0.5rem' }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          Mi nombre es Julián Reyes Botello
        </motion.h1>
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
          Hola, me presento un poco:{' '}
          <span className="bio__text-accent">
            soy actor con más de 10 años de trayectoria{' '}
          </span>
          , también dirijo y produzco, hago sobre todo teatro aunque he hecho
          algo de cine también.{' '}
          <span className="bio__text-accent">
            Soy egresado de la licenciatura en teatro de la UNAM{' '}
          </span>
          . También tengo un par de diplomados, uno de ellos internacional
          (Argentina-México). Esas son mis credenciales académicas, llevo
          haciendo teatro de manera profesional desde 2012, he dirigido,
          producido o actuado en más de 15 obras.
        </motion.p>

        <motion.h3
          className="bio__subtitle"
          initial={{ x: '0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          LO IMPORTANTE ES LO QUE VIENE:
        </motion.h3>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Yo era un adolescente{' '}
          <span className="bio__text-accent">muy tímido</span>, académicamente
          era bueno entendiendo las cosas entonces de pronto participaba en
          clases, pero estaba agarrado de algo: mi conocimiento.{' '}
          <span className="bio__text-accent">
            Era bulleado, tenía un apodo horrible, me sentía feo y gordo, me
            escondí debajo de un suéter durante 7 años porque me daba vergüenza
            que vieran mi cuerpo{' '}
          </span>
          . Muchas cosas, un amor imposible incluido, me llevaron a enamorarme
          del teatro: el espacio donde podía vivir una realidad muy diferente a
          la mía que odiaba. Tomé esa decisión hace 15 años.{' '}
          <span className="bio__text-accent">
            HOY MI VIDA ES TOTALMENTE DIFERENTE.
          </span>{' '}
        </motion.p>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Soy una persona tímida, pero a la vez soy extrovertido (eso es
          posible, sí). Mi profesión me ha dado herramientas para poder, a pesar
          del miedo exponerme frente a cientos de personas. El constante
          entrenamiento para llegar a lograrlo de la mejor manera posible ha
          permitido que, aún con miedo, la timidez no rija mi vida.
        </motion.p>
        <motion.p
          className="bio__paragraph"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Sabiendo que la razón por la que actrices y actores somos gente que
          puede dialogar con nuestra timidez es por la profesión que tenemos,
          por las herramientas que se nos otorgan y las experiencias que
          vivimos, y sabiendo que si yo no me hubiera enamorado de la
          teatralidad mi vida seguramente estaría regida por mi timidez, decidí
          crear este curso
          <span className="bio__text-accent">
            {' '}
            para ayudar a otras personas como yo que no tienen idea de las
            posibilidades reales que tienen para dialogar con su timidez{' '}
          </span>
          a adquirir estas herramientas que yo tengo por mi profesión.
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
