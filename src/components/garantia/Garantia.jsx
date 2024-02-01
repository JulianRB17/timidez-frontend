import { motion } from 'framer-motion';
import './garantia.css';

export default function Garantia() {
  return (
    <section className="garantia">
      <motion.h2
        className="garantia__title"
        initial={{ y: '-1rem' }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
      >
        ¡PUEDES PROBAR ESTE PROGRAMA LIBRE DE RIESGOS!
      </motion.h2>
      <div className="garantia__container">
        <motion.p
          className="garantia__text"
          initial={{ x: '-1rem' }}
          whileInView={{ x: 0, transition: { duration: 1 } }}
        >
          Si aún tienes dudas de si es lo tuyo ¡No necesitas preocuparte!
          Tenemos una{' '}
          <span className="garantia__text_accent">GARANTÍA TOTAL</span> gracias
          a la cual se te regresará íntegra tu inversión total si es que durante
          las primeras dos semanas has tomado las sesiones y no estás
          completamente satisfecha/o.
        </motion.p>
        <img
          src="/warranty.png"
          alt="garantía"
          height={400}
          width={400}
          className="garantia__img"
        />
      </div>
    </section>
  );
}
