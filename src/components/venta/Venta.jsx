import { motion } from 'framer-motion';
import './venta.css';

export default function Venta() {
  return (
    <section className="venta">
      {/* <Image
        width={300}
        height={300}
        alt="metodología"
        src="/metodologia.webp"
        className="info__img"
      /> */}
      <motion.ul
        className="venta__container"
        initial={{ x: '-0.5rem' }}
        whileInView={{ x: 0, transition: { duration: 1 } }}
      >
        <h2 className="venta__title">Este programa es para ti si...</h2>

        <li className="venta__text">
          Te aterra llegar a un lugar con nuevas personas.
        </li>
        <li className="venta__text"></li>
        <li className="venta__text">
          Crees que has dejado pasar experiencias increíbles por tu timidez y no
          quieres que toda tu vida sea así: viendo desde lejos lo que deseas.
        </li>
        <li className="venta__text">
          Vives grandes experiencias a través de personajes de series,
          películas, novelas, videojuegos... pero quisieras vivirlas en tu piel.
        </li>
      </motion.ul>
      <motion.ul
        className="venta__container"
        initial={{ x: '-0.5rem' }}
        whileInView={{ x: 0, transition: { duration: 1 } }}
      >
        <h2 className="venta__title">Imagina que...</h2>
        <li className="venta__text">
          Eres capaz de sostenerle la mirada a la gente que te interesa, incluso
          sonreirles de buena manera.
        </li>
        <li className="venta__text">
          Después de este curso aprenderás qué hacer si sientes que estás
          viviendo una situación social profundamente incómoda para salir bien
          parada/o.
        </li>
        <li className="venta__text">
          Es tener una comunidad que te puede sostener, dar consejos y ayudar.
          Que te entienden y han pasado por lo mismo que tú.
        </li>
      </motion.ul>
    </section>
  );
}
