import { motion } from 'framer-motion';
import picSrc from '../../../../assets/overlay-blue-s.webp';
import logoSrc from '../../../../assets/logo-oscuro-transparente.png';
// import Form from './../../../../components/form/Form';

export default function Hero({
  localDate,
  hour,
  count,
  // onSubmit,
  // onChange,
  // sentUser,
  // isValidForm,
  // loading,
  // msgSuccess,
  // setSentUser,
  // formValues,
}) {
  return (
    <section className="hero">
      <div className="hero__header">
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
          {/* Descubre cómo es que puedes mejorar tus habilidades sociales. Vuélvete
          el protagonista de tu vida. */}
          ¿Sientes que eres un personaje secundario en tu vida? ¿Todo el tiempo
          tienes silencios incómodos cuando intentas hablar con alguien?
          ¿Quieres cambiar esto y generar más relaciones significativas en tu
          vida? Estás en el lugar indicado:
        </motion.h2>
      </div>

      <div className="hero__container">
        <img src={picSrc} alt="Retrato" className="hero__img" />
        <div className="hero__container_text">
          <div className="hero__container_logo">
            <img src={logoSrc} alt="logo" className="hero__logo" />
          </div>
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
            Descubre los 3 secretos para aprender a socializar mejor sin tener
            que pasar vergüenza o juicio ajeno.
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
            Conoce cómo los expertos en actuación
            <span className="hero__accent">
              {' '}
              superan el miedo a hablar en público{' '}
            </span>
            y aplica sus técnicas a{' '}
            <span className="hero__accent">tu vida social.</span>
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
            <motion.a
              className="hero__btn"
              href="#form"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
            >
              Regístrate GRATIS
            </motion.a>
            <p className="hero__disclaimer">
              Me es muy importante que sepas que tus datos están totalmente
              seguros y no se compartirán con nadie.
            </p>
            <motion.div className="hero__date-container">
              <p className="hero__date hero__date_accent">¿Cuándo?</p>
              <p className="hero__date">{localDate}</p>
              <p className="hero__date">{hour} hrs</p>
              <p className="hero__date">{count ? count : '¡Ya iniciamos!'}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* <div className="hero__container_img"> */}
        {/* <div className="hero__container_form">
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
        {/* </div> */}
      </div>
    </section>
  );
}
