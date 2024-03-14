import { motion } from 'framer-motion';
import photoSrc from '../../../../assets/retratoPequeno.webp';

const variants = {
  onView: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: '-4%' },
};
const transition = {
  type: 'spring',
  duration: 1,
  bounce: 0.5,
  delay: 0.1,
};

export default function Host() {
  return (
    <motion.section
      className="host"
      whileInView={'onView'}
      initial={'hidden'}
      variants={variants}
      transition={transition}
    >
      <p className="host__text host__text_lg">¿Quién dará la clase?</p>
      <div className="host__container">
        <div className="host__text-container">
          <motion.a
            href="#bio"
            className="host__text"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            JULIÁN REYES BOTELLO
          </motion.a>
          <p className="host__text">
            Actor y director escénico con 12 años de experiencia
          </p>
        </div>
        <motion.a
          href="#bio"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            className="host__image"
            alt="host"
            src={photoSrc}
            width={300}
            height={450}
          />
        </motion.a>
      </div>
    </motion.section>
  );
}
