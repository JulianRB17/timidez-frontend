import { motion } from 'framer-motion';
import Loader from '../../../../components/loader/Loader';

export default function Form({
  onSubmit,
  onChange,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
}) {
  const SendBtn = function () {
    if (!sentUser) {
      return (
        <motion.button
          type="submit"
          className={`form__btn ${isValidForm || 'form__btn-inactive'}`}
          disabled={!isValidForm}
          whileHover={
            isValidForm && {
              scale: 1.1,
            }
          }
          whileTap={isValidForm && { scale: 0.9 }}
        >
          {loading ? <Loader /> : 'APARTA MI LUGAR'}
        </motion.button>
      );
    }
    if (sentUser && !msgSuccess) {
      window.setTimeout(() => {
        setSentUser(false);
      }, 3000);

      return (
        <p className="form__msg form__msg_failed">
          Algo salió mal, vuelve a intentarlo más tarde
        </p>
      );
    }
    if (sentUser && msgSuccess) {
      window.setTimeout(() => {
        setSentUser(false);
      }, 3000);

      return <p className="form__msg">Usuario registrado</p>;
    }
  };

  return (
    <section className="form">
      <form action="" id="form" className="form__container" onSubmit={onSubmit}>
        <h1 className="form__title">Regístrate GRATIS</h1>
        <div className="form__input-container">
          <div className="form__overlay" />
          <label htmlFor="name" className="form__label">
            {' '}
            Nombre:{' '}
          </label>
          <input
            type="text"
            className="form__input"
            id="username"
            placeholder="Escribe tu nombre aquí"
            onChange={onChange}
            maxLength={30}
            required
            value={formValues.username}
          />
          <p className="form__error-msg">Escribe tu nombre correctamente.</p>
          <label htmlFor="email" className="form__label">
            {' '}
            Email:{' '}
          </label>
          <input
            type="email"
            className="form__input"
            id="email"
            placeholder="Coloca tu email para mandarte la invitación"
            onChange={onChange}
            autoComplete="on"
            required
            value={formValues.email}
          />
          <p className="form__error-msg">Escribe un email válido.</p>
        </div>
        <SendBtn />
      </form>
      <p className="form__credits">Fotografía: Carlos Alvar</p>
      <p className="form__credits">Dirección escénica: Julián Reyes Botello</p>
    </section>
  );
}
