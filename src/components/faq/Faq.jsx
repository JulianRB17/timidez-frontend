import { motion } from 'framer-motion';
import './faq.css';

export default function Faq({ answer, question }) {
  return (
    <motion.div
      className="faq"
      initial={{ x: '-0.5rem' }}
      whileInView={{ x: 0, transition: { duration: 1 } }}
    >
      <p className="faq__question">{question}</p>
      <p className="faq__answer">{answer}</p>
    </motion.div>
  );
}
