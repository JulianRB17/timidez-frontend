import { motion } from 'framer-motion';
import Footer from '../../components/footer/Footer';

export default function CierreRegistro({ localDate, count, urls, hour }) {
  const { fbGroupUrl, whatsappUrl, encuestaWebinarUrl, igUrl, tikTokUrl } =
    urls;

  return (
    <>
      <section className="cierre-registro">
        <div className="cierre-registro__header">
          <motion.h2
            className="cierre-registro__title"
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
            ¡Listo! En este momento te debe estar llegando un mail que confirma
            tu registro a esta clase gratuita:{' '}
            <span className="cierre-registro__title_accent">
              Conoce las 3 claves para ser más sociable a pesar del miedo al
              ridículo y al juicio ajeno.
            </span>
          </motion.h2>

          <motion.p
            className="cierre-registro__subtitle"
            initial={{ x: '-1em', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Te doy la bienvenida a este curso online en el que revisaremos
            diferentes herramientas que usamos actores y actrices para dialogar
            con nuestra timidez. El curso se dará a través de un grupo privado
            de facebook, te hemos enviado también el enlace a tu correo
            electrónico.{' '}
            <span className="cierre-registro__subtitle_accent">
              Revisa cada uno de los siguientes pasos para asegurarte que no te
              pierdas nada de esta experiencia.
            </span>
          </motion.p>
        </div>
        <div className="cierre-registro__body">
          <div className="cierre-registro__overlay-container">
            <div className="cierre-registro__overlay" />
            <motion.div
              initial={{ y: '100px', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className="cierre-registro__container"
            >
              <h2 className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_lg">
                Recuerda apartar la fecha del curso:
              </h2>
              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_dates">
                {localDate}
              </p>
              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_dates">
                {hour} hrs
              </p>
              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_dates">
                {count}
              </p>
              <p className="cierre-registro__recordatorio-text">
                El curso se llevará a cabo en el siguiente grupo privado de
                Facebook:
              </p>
              <motion.a
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                rel="noopener noreferrer"
                title="Únete al grupo de facebook"
                href={fbGroupUrl}
              >
                Únete al grupo de fb
              </motion.a>
              <p className="cierre-registro__recordatorio-text">
                También te recomiendo unirte al siguiente grupo de Whatsapp
                donde daremos info y recordatorios antes de la clase:
              </p>
              <motion.a
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                rel="noopener noreferrer"
                title="Únete al grupo de whatsapp"
                href={whatsappUrl}
              >
                Únete al grupo de whatsapp
              </motion.a>
              <p className="cierre-registro__recordatorio-text">
                Quiero que la información que te entregue sea la mejor posible y
                la más útil para ti, por ello, te pido que me ayudes contestando
                las siguientes preguntas, te tomará menos de 5 min.
              </p>
              <motion.a
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                rel="noopener noreferrer"
                title="Dale click para hacer la encuesta"
                href={encuestaWebinarUrl}
              >
                ¡Ayúdame respondiendo esta encuesta!
              </motion.a>
              <p className="cierre-registro__recordatorio-text">
                Finalmente, te comparto mis redes donde estoy subiendo contenido
                gratuito
              </p>
              {/* <motion.a
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                rel="noopener noreferrer"
                title="Ve contenido gratuito que subo aquí"
                href={igUrl}
              >
                Instagram
              </motion.a> */}
              {/* <motion.a
                className="cierre-registro__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
                rel="noopener noreferrer"
                title="Mira contenido gratuito que subo aquí"
                href={tikTokUrl}
              >
                Tiktok
              </motion.a> */}
              <p className="cierre-registro__recordatorio-text cierre-registro__recordatorio-text_lg">
                ¡Nos vemos muy pronto!
              </p>
            </motion.div>
          </div>
          <div className="cierre-registro__credits-container">
            <p className="cierre-registro__credits">Fotografía: Carlos Alvar</p>
            <p className="cierre-registro__credits">
              Dirección escénica: Julián Reyes Botello
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
