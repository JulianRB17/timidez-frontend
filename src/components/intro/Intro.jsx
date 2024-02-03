import { motion } from 'framer-motion';
import piramideSrc from '../../assets/maslow.png';

export default function IntroVentas() {
  return (
    <section className="intro-ventas">
      <motion.h2
        className="intro-ventas__title"
        initial={{ x: '-1rem', opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        ¿Te ha pasado que...
      </motion.h2>
      <motion.ul
        className="intro-ventas__list"
        initial={{ x: '1rem' }}
        whileInView={{
          x: 0,
          transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.5 },
        }}
      >
        <li className="intro-ventas__text">
          Te sientes una persona incómoda, te dicen que eres demasiado
          silenciosa/o pero cuando hablas es peor.
        </li>
        <li className="intro-ventas__text">
          Te han dicho que seas tú misma/o, que preguntes más, que escuches,
          pero sabes que eso en ti no funciona: te sientes en un interrogatorio.
        </li>
        <li className="intro-ventas__text">
          Se supone que tienes que actuar de tal manera pero te da miedo
          hacerlo, exponerte.
        </li>
        <li className="intro-ventas__text">
          Te sientes incapaz de relacionarte por tu timidez, es como si fuera
          una maldición que te condena a la soledad.
        </li>
      </motion.ul>
      <motion.h3
        className="intro-ventas__title"
        initial={{ x: '-1rem', opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      >
        La pirámide de Maslow
      </motion.h3>
      <div className="intro-ventas__container">
        <motion.div
          className="intro-ventas__text-container"
          initial={{ x: '1rem' }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.5 },
          }}
        >
          <p className="intro-ventas__text">
            ¿Alguna vez has escuchado de la pirámide de{' '}
            <span className="intro-ventas__accent">Maslow</span>? Maslow fue el
            padre de la psicología humanista; en los 40s publicó un artículo que
            cambiaría la forma de ver distintas ramas de la psicología e incluso
            de otras áreas del conocimiento como la economía. En este artículo,
            Maslow desarrolla la siguiente pirámide:
          </p>

          <img
            src={piramideSrc}
            alt="Pirámide de Maslow"
            height={800}
            width={800}
            className="intro-ventas__img"
          />
        </motion.div>

        <motion.div
          className="intro-ventas__text-container"
          initial={{ x: '1rem' }}
          whileInView={{
            x: 0,
            transition: { duration: 0.5, delay: 0.2, staggerChildren: 0.5 },
          }}
        >
          <p className="intro-ventas__text">
            En pocas palabras, ésta muestra que para poder sentirte realizada/o
            en algunas áreas de la vida necesitas antes desarrollar otras, por
            ejemplo: no puedes pensar en triunfar profesionalmente si ni
            siquiera tienes qué comer ese día: tu atención estará en conseguir
            alimento.
          </p>
          <p className="intro-ventas__text">
            La tercer área de Maslow tiene que ver con las relaciones humanas.
            Para él no existe la posibilidad de desarrollarte plenamente como
            individuo íntegro si no tienes vínculos significativos con otras
            personas, llámese amistad, pareja o familia.
          </p>
          <p className="intro-ventas__text">
            Si esto no es suficiente para pensar en desarrollar las habilidades
            sociales, ¿sabías que las empresas atienden cada vez más las soft
            skills durante la contratación y que la comunicación es la reina de
            éstas?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
