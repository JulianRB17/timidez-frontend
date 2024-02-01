import { motion } from 'framer-motion';

export default function Presentacion() {
  return (
    <section className="presentacion">
      <motion.h3
        className="presentacion__title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        ¿POR QUÉ DECIDÍ CREAR ESTE CURSO?
      </motion.h3>
      <motion.p
        className="presentacion__text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        Sé que empezar a actuar salvó mi vida. Me permitió vivir experiencias
        como las que jamás hubiera vivido si hubiera decidido dedicar mi vida a
        cualquier otra cosa. Pero al mismo tiempo sé, que decidir entrar a un
        taller de actuación requiere mucho valor porque actuar implica
        exponerse, por lo que mucha gente que entra no es tímida. Quiero
        compartir las herramientas que he ganado en el mundo profesional, que me
        permitieron darle potencia y presencia a mi voz, y no hablo únicamente
        del volumen de las palabras que salen de mi boca, sino de la seguridad y
        la confianza que permiten que éstas me habiten y salgan. Hoy me
        considero un ser sumamente sociable, quiero compartir contigo, de manera
        práctica pero segura --gracias a la virtualidad-- la forma en la que lo
        he logrado.
      </motion.p>
    </section>
  );
}
