import { motion } from 'framer-motion';
import Footer from '../../components/footer/Footer';
import logoSrc from '../../assets/logo-transparente.png';

export default function Repeticion({ buyoutUrl, repetitionUrl }) {
  return (
    <>
      <section className="repeticion">
        <div className="repeticion__header">
          <motion.h2
            className="repeticion__title"
            initial={{
              opacity: 0,
              y: '-1rem',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            3 secretos de actrices y actores para hablar en público y no morir
            de vergüenza en el intento (aunque nunca hayas actuado)
          </motion.h2>
          <motion.h3
            className="repeticion__subtitle"
            initial={{
              opacity: 0,
              x: '-1rem',
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
          >
            Si te perdiste de la clase, no te preocupes, aquí la podrás volver a
            ver:
          </motion.h3>
        </div>
        <div className="repeticion__body">
          <iframe
            width="720"
            height="405"
            src={repetitionUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowfullscreen
            className="repeticion__video"
          ></iframe>

          <div className="repeticion__venta">
            <motion.p
              className="repeticion__text"
              initial={{
                x: '-1rem',
              }}
              whileInView={{
                x: 0,
                transition: { duration: 1 },
              }}
            >
              ¿Quieres conocer algo más del programa:
            </motion.p>
            <img
              src={logoSrc}
              alt="logo"
              className="repeticion__logo"
              width={1654}
              height={298}
            />
            <motion.a
              className="repeticion__btn"
              initial={{ opacity: 0.5 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              rel="noopener noreferrer"
              title="Adquiere ahora el programa"
              href={buyoutUrl}
            >
              Haz click aquí
            </motion.a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
