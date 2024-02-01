import { useState } from 'react';
import './form.css';
import { motion } from 'framer-motion';
import Loader from '../../components/loader/Loader';
import api from '../../utils/api';

export default function Form() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(true);
  const [sentUser, setSentUser] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
    setValidForm(target.form.checkValidity());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await api.postUser(formValues);
      if (!data.user) {
        setMsgSuccess(false);
      }
      if (data.user) {
        setMsgSuccess(true);
      }
      setFormValues({
        username: '',
        email: '',
      });
      setSentUser(true);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.error(error);
      setFormValues({
        username: '',
        email: '',
      });
      alert('Ahh, algo salió malo, por favor vuelve a intentarlo.');
    }
  };

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
      <form
        action=""
        id="form"
        className="form__container"
        onSubmit={handleSubmit}
      >
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
            onChange={handleChange}
            maxLength={11}
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
            onChange={handleChange}
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
