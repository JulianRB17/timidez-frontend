import { motion } from 'framer-motion';
import priceSrc from '../../assets/price.png';

export default function Precio({ buyoutUrl }) {
  return (
    <section className="precio">
      <motion.h2
        className="precio__title"
        initial={{ y: '-1rem' }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
      >
        ¡Suena increíble! Pero... ¿CUÁNTO ME COSTARÁ ESTO?
      </motion.h2>
      <p className="precio__text">
        El costo real de cada uno de estos bonos y del programa Reconciliándote
        con tu timidez: herramientas actorales para la vida diaria es el
        siguiente:
      </p>
      <motion.div
        className="precio__tabla"
        initial={{ opacity: 0.5, x: '-0.5rem' }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
        <div className="precio__element">
          <p className="precio__nombre">
            Programa Di adios a la timidez: herramientas actorales para la vida
            diaria
          </p>
          <p className="precio__numero">397 USD</p>
        </div>

        <div className="precio__element">
          <p className="precio__nombre">Kit de comunicación efectiva</p>{' '}
          <p className="precio__numero">117 USD</p>
        </div>
        <div className="precio__element">
          <p className="precio__nombre">
            Masterclass: ¿Qué es una amistad saludable?
          </p>{' '}
          <p className="precio__numero">42 USD</p>
        </div>

        <div className="precio__element">
          <p className="precio__nombre">
            Masterclass: Estrategias de memorización
          </p>
          <p className="precio__numero">42 USD</p>
        </div>

        <div className="precio__element">
          <p className="precio__nombre">Infografía: ¿Qué es la autoestima?</p>
          <p className="precio__numero">13 USD</p>
        </div>

        <div className="precio__element precio__element_total">
          <p className="precio__nombre precio__nombre_total">VALOR TOTAL</p>
          <p className="precio__numero  precio__numero_total">611 USD</p>
        </div>
      </motion.div>
      <p className="precio__text">
        El valor total del programa completo y los bonos es de 611 USD... sin
        embargo, sólo hoy, tienes un acceso a un descuento exclusivo disponible
        únicamente en esta página:
      </p>
      <motion.div
        className="precio__container"
        initial={{ opacity: 0.5 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.5 },
        }}
      >
        <img src={priceSrc} alt="precio original" className="precio__img" />
        <p className="precio__number">237 USD</p>
      </motion.div>
      <p className="precio__text">
        Así es, asegurando tu lugar en el programa Reconciliándome con mi
        timidez: herramientas actorales para la vida diaria te llevas un valor
        total de 611 USD
      </p>
      <p className="precio__text precio__text_accent">por sólo 237 USD</p>.
      <motion.a
        href={buyoutUrl}
        className="precio__btn"
        initial={{ opacity: 0.5 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 2 },
        }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
      >
        ADQUIRIR AHORA
      </motion.a>
    </section>
  );
}
