import { motion } from 'framer-motion';
import picSrc from '../../../../assets/overlay-blue-s.webp';
import logoSrc from '../../../../assets/logo-transparente.png';
import Form from './../../../../components/form/Form';

export default function Hero({
  localDate,
  hour,
  count,
  onSubmit,
  onChange,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
}) {
  return (
    <section className="hero">
      <div className="hero__header">
        <div className="hero__logo-container">
          <img src={logoSrc} alt="logo" className="hero__logo" />
        </div>
        <motion.h2
          className="hero__hook"
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
          Descubre cómo es que puedes mejorar tus habilidades sociales. Vuélvete
          el protagonista de tu vida.
        </motion.h2>
      </div>

      <div className="hero__container">
        <div className="hero__container_text">
          <motion.h1
            className="hero__title"
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
            Conoce las 3 claves para mejorar tus relaciones sociales sin morir
            de vergüenza en el intento
          </motion.h1>

          <motion.p
            className="hero__subtitle"
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
            Descubre cómo los expertos en actuación superan el miedo a hablar en
            público y aplica sus técnicas a tu vida social.
            {/* Aprende de un experto en relaciones humanas herramientas para dejar
            de ser la persona tímida del fondo de la habitación y empezar a
            generar conexiones genuinas con otras personas. */}
          </motion.p>

          {/* <motion.p
            className="hero__subtitle"
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
            <span className="hero__hook_accent">CUALQUIER PERSONA</span> que
            Descubre las herramientas de expertos en relaciones humanas que te
            ayudarán asienta que es un personaje secundario en su vida.
          </motion.p> */}

          <motion.div
            className="hero__btn-container"
            initial={{
              opacity: 0,
              y: '1rem',
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            <motion.div className="hero__date-container">
              <p className="hero__date">{localDate}</p>
              <p className="hero__date">{hour} hrs</p>
              <p className="hero__date">{count ? count : '¡Ya iniciamos!'}</p>
            </motion.div>
            {/* <motion.a
              className="hero__btn"
              href="#form"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              Regístrate GRATIS
            </motion.a> */}
          </motion.div>
        </div>

        {/* <div className="hero__container_img"> */}
        <div className="hero__container_form">
          <Form
            onSubmit={onSubmit}
            onChange={onChange}
            sentUser={sentUser}
            isValidForm={isValidForm}
            loading={loading}
            msgSuccess={msgSuccess}
            setSentUser={setSentUser}
            formValues={formValues}
          />
          {/* </div> */}
        </div>
        <img src={picSrc} alt="Retrato" className="hero__img" />
      </div>
    </section>
  );
}
