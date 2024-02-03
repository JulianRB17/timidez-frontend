import { motion } from 'framer-motion';
import logoSrc from '../../assets/logo-transparente.png';

export default function CallToAction({ buyoutUrl }) {
  return (
    <section className="call-to-action">
      <div className="call-to-action__container">
        <motion.h2
          className="call-to-action__title"
          initial={{ y: '-1rem' }}
          whileInView={{ y: 0, transition: { duration: 1 } }}
        >
          ¿QUÉ ES LO QUE TE ESTÁS LLEVANDO?
        </motion.h2>
        <ul className="call-to-action__list">
          <li className="call-to-action__element">
            Programa de 12 módulos: Reconciliándome con mi timidez, herramientas
            actorales para la vida diaria.
          </li>
          <li className="call-to-action__element">
            Kit de comunicación efectiva
          </li>
          <li className="call-to-action__element">
            Masterclass: ¿Qué es una amistad saludable?
          </li>
          <li className="call-to-action__element">
            Masterclass: Estrategias de memorización
          </li>
          <li className="call-to-action__element">
            Infografía: ¿Qué es la autoestima?
          </li>
        </ul>
        <motion.p
          className="call-to-action__text"
          initial={{ x: '-0.5rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Todo esto, con un valor total de 611 USD tan sólo por 237 USD
        </motion.p>
      </div>
      <div className="call-to-action__container">
        <img
          src={logoSrc}
          alt="logo"
          className="call-to-action__img"
          width={1654}
          height={298}
        />
        <motion.a
          href={buyoutUrl}
          className="call-to-action__btn"
          initial={{ opacity: 0.5 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          rel="noopener noreferrer"
          title="Adquiere ahora el programa"
        >
          ADQUIRIR AHORA
        </motion.a>
        <div className="call-to-action__credits-container">
          <p className="call-to-action__credits">Fotografía: Carlos Alvar</p>
          <p className="call-to-action__credits">
            Dirección escénica: Julián Reyes Botello
          </p>
        </div>
      </div>
    </section>
  );
}
