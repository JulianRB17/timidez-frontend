'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { Barlow } from 'next/font/google';
import api from '../../utils/api';
import { countdown } from '../../../../utils/countdown';
import './hero.css';

// const barlow = Barlow({ subsets: ['latin'], weight: '400' });

export default function Hero() {
  const [count, setCount] = useState('');
  const [localDate, setLocalDate] = useState('');
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    (async () => {
      const data = await api.getDate();
      if (data.localDate) {
        setLocalDate(data.localDate);
        setTimestamp(data.timestamp);
      }
    })();
  }, []);

  useEffect(() => {
    if (timestamp) {
      countdown(timestamp, setCount);
    }
  }, [timestamp, setCount]);

  const Date = function () {
    if (localDate) {
      return (
        <motion.div className="hero__date-container">
          {/* <p className={`hero__date  ${barlow.className}`}>{localDate}</p> */}
          <p className={`hero__date`}>{localDate}</p>
          {/* <p className={`hero__date  ${barlow.className}`}> */}
          <p className={`hero__date`}>{count ? count : '¡Ya iniciamos!'}</p>
        </motion.div>
      );
    }
  };

  return (
    <div className="hero__parallax">
      <div className="hero__container">
        <motion.h1
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
          ¿Sientes que la timidez te ha frenado oportunidades en la vida? Esta
          masterclass <span className="hero__hook_accent">GRATUITA</span> es
          para ti.
        </motion.h1>

        <motion.h1
          // className={`hero__title ${barlow.className}`}
          className={`hero__title`}
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
          3 secretos de actrices y actores para hablar en público y no morir de
          vergüenza en el intento (aunque nunca hayas actuado)
        </motion.h1>

        <motion.h3
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
          ¡Atención! ¿Alguna vez te has preguntado cómo le hacen algunas
          personas para que no les dé pena estar frente a cientos o miles de
          personas? Aparta tu lugar en esta clase gratuita.
        </motion.h3>
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
          <Date />
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
          <p className="hero__text">
            Da click en este botón para registrarte a esta masterclass
          </p>
        </motion.div>
        <div className="hero__credits-container">
          <p className="hero__credits">Fotografía: Carlos Alvar</p>
          <p className="hero__credits">
            Dirección escénica: Julián Reyes Botello
          </p>
        </div>
      </div>
    </div>
  );
}
