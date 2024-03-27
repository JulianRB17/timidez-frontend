import { motion } from 'framer-motion';

export default function CookiesNotice({
  cookiesEstablished,
  onCookiesAccept,
  onCookiesReject,
}) {
  return (
    <section className={`${cookiesEstablished ? 'hidden' : 'cookies'}`}>
      <div className="cookies__container">
        <h2 className="cookies__title">Este sitio usa cookies</h2>
        <p className="cookies__text">
          Esta página usa cookies para brindarte una mejor experiencia
          almacenando y procesando datos de usuario. Es posible que terceros
          incluido Meta, usen cookies, balizas web y otras tecnologías de
          almacenamiento para recopilar o recibir información y así proporcionar
          servicios de medición, y segmentación y entrega de anuncios.
        </p>
        <p className="cookies__text">
          Puede aceptar el uso de estas tecnologías dando click en “Aceptar” o
          negar su consentimiento haciendo click en “Rechazar”. El rendimiento
          podría ser menor en caso de la segunda opción.
        </p>
        <p className="cookies__text">
          Aceptando las cookies nos permites mantener nuestros niveles de
          calidad. En caso contrario perderíamos la posibilidad de acompañar en
          algunos de nuestros procesos.
        </p>
        <div className="cookies__container_btns">
          <motion.button
            className="cookies__btn cookies__btn_aceptar"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={onCookiesAccept}
          >
            Aceptar
          </motion.button>
          <motion.button
            className="cookies__btn"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={onCookiesReject}
          >
            Rechazar
          </motion.button>
        </div>
      </div>
    </section>
  );
}
