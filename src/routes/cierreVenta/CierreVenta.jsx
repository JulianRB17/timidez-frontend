import { motion } from 'framer-motion';
import Footer from '../../components/footer/Footer';
import './cierreVenta.css';

export default function CierreVenta() {
  return (
    <>
      <section className="cierre-venta">
        <div className="cierre-venta__header">
          <motion.h2
            className="cierre-venta__title"
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
            ¡Este es un gran paso! ¡Muchas felicidades y muchas gracias! Ahora
            perteneces a la comunidad, a la compañía de
            <span className="cierre-venta__title_accent">
              {' '}
              RECONCILIÁNDOME CON MI TIMIDEZ: HERRAMIENTAS ACTORALES PARA LA
              VIDA DIARIA
            </span>
          </motion.h2>
          <img
            src="/logo-transparente.png"
            alt="logo"
            className="cierre-venta__logo"
            width={400}
            height={70}
          />
          <motion.p
            className="cierre-venta__subtitle"
            initial={{ x: '-1em', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          >
            Te doy la bienvenida a este programa online en el que se aprenderá a
            dialogar con la timidez para que ésta no sea la que tome el control
            de tu vida.
            <span className="cierre-venta__subtitle_accent">
              {' '}
              Es momento de tomar las riendas, de empezar a vivir experiencias
              nuevas en un espacio de seguridad.
            </span>
          </motion.p>
        </div>
        <div className="cierre-venta__body">
          <div className="cierre-venta__overlay-container">
            <div className="cierre-venta__overlay" />
            <motion.div
              initial={{ y: '100px', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
              className="cierre-venta__container"
            >
              <h2 className="cierre-venta__recordatorio-text cierre-venta__recordatorio-text_lg">
                Se te ha mandado un mail con toda la información importante.
                Recuerda que las sesiones de este curso online serán los días
              </h2>
              <p className="cierre-venta__recordatorio-text cierre-venta__recordatorio-text_dates">
                Lunes y miércoles de 18:00 a 20:00 hrs. (horario CDMX) del 8 de
                enero al 20 de marzo
              </p>

              <p className="cierre-venta__recordatorio-text">
                A parte de eso, te comparto que tendremos un vínculo muy
                importante a través de un grupo privado de Facebook. Te dejo
                aquí el link a éste.
              </p>
              <motion.button
                className="cierre-venta__btn"
                initial={{ opacity: 0.5 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.2 }}
              >
                Únete al grupo de Fb
              </motion.button>
              <p className="cierre-venta__recordatorio-text">
                En éste podrás hacer preguntas en cualquier momento, a parte de
                leer las dudas de otras personas y, finalmente es un espacio que
                aún terminado el taller podrá seguirse ocupando y compartiéndose
                ahí material, inquietudes, dudas, miedos, anécdotas. Es el
                círculo virtual alrededor del cual nos sentaremos a hablar, es
                donde haremos compañía.
              </p>
              <p className="cierre-venta__recordatorio-text cierre-venta__recordatorio-text_lg">
                ¡Nos vemos muy pronto!
              </p>
            </motion.div>
          </div>
          <div className="cierre-venta__credits-container">
            <p className="cierre-venta__credits">Fotografía: Carlos Alvar</p>
            <p className="cierre-venta__credits">
              Dirección escénica: Julián Reyes Botello
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
