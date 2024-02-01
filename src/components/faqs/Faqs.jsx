import { motion } from 'framer-motion';
import Faq from '../faq/Faq';
import './faqs.css';

export default function Faqs() {
  const faqs = [
    {
      question: '¿Necesito tener alguna experiencia en actuación?',
      answer:
        'No, ninguna. Recordemos que en principio esto no es un curso de actuación, sí se actuará algo pero no es el objetivo.',
    },
    {
      question: '¿El curso es presencial?',
      answer: 'No, es un curso virtual, pero en vivo.',
    },
    {
      question:
        '¿El curso lo puedo tomar a la hora que sea o tiene un horario específico?',
      answer:
        'El curso es en vivo, la gran ventaja de esto es que podremos resolver dudas e inquietudes al momento.',
    },
    {
      question: '¿A través de qué plataforma se da el curso?',
      answer: 'Este curso se dará a través de la plataforma Zoom.',
    },
    {
      question: '¿Recibiré retroalimentación personalizada?',
      answer:
        '¡Sí! La ventaja de que el curso sea en vivo es que podremos tener esta personalización.',
    },
    {
      question: '¿Qué resultados se esperan tras completar el curso?',
      answer:
        'Aprenderás de manera teórica y práctica diferentes herramientas para hacer las pases con tu timidez, NO es luchar contra ella ni eliminarla, más bien abrazarla y, con ella, aprender a tener el valor para accionar.',
    },
    {
      question: '¿Qué tipos de actividades se trabajarán?',
      answer:
        'De manera teórica atenderemos diferentes cosas relacionadas a la timidez y a la actuación, también veremos cómo podemos usar herramientas actorales en la vida cotidiana y finalmente, de manera práctica se trabajará con un pequeño monólogo para concretar todos los elementos vistos. ',
    },
    {
      question:
        '¿Cuál es el nivel de compromiso requerido para beneficiarme de este curso?',
      answer:
        'Los resultados de este curso se crearán dependiendo del compromiso que tengas. Por supuesto que todo el mundo que tome el curso se llevará material súper valioso, pero las personas que decidan quedarse no sólo en el aprendizaje sino llevarlo a la práctica tendrán una ganancia aún mayor.',
    },
    {
      question:
        '¿Cómo se abordarán los aspectos psicológicos y emocionales de la timidez?',
      answer:
        'Lo primero, y fundamental es que esto NO es un proceso terapéutico, más bien puede ser un proceso alterno a la terapia psicológica. Lo segundo es que no planteamos la idea de eliminar la timidez o pensar que ésta es mala, es una parte del carácter de una gran parte de la población. Más bien aprendemos a que ésta deje de ser quien tome las riendas de nuestra vida.',
    },
    {
      question:
        '¿A futuro seguirá habiendo la posibilidad de trabajar en algo aún terminado el curso?',
      answer:
        '¡Sí! la ventaja de la virtualidad nos permitirá tener una comunidad cerrada, protegida, donde si queremos, podremos seguir generando material y recibiendo retroalimentación verdaderamente crítica y respetuosa.',
    },
    {
      question: '¿Es seguro pagar en línea?',
      answer:
        '¡Sí! Todos los pagos que procesamos a nivel nacional e internacional suceden a través de la plataforma Hotmart donde tus datos y transacciones están totalmente seguras. Hotmart es una plataforma que trabaja con miles de cursos online y desde hace bastante tiempo, así que puedes confiar en su proceso de pago.',
    },
    {
      question: '¿Este curso es adecuado para todas las edades?',
      answer: 'El curso está diseñado para adolescentes y gente adulta.',
    },
    {
      question:
        '¿Por qué dices que son técnicas que llevan perfeccionándose 115 años?',
      answer:
        'El padre de la actuación contemporanea fue un ruso llamado Konstantin Stanislavski; uno de sus libros más importantes "El trabajo del actor sobre sí mismo" fue escrito en 1909, hace 115 años. La forma en la que Stanislavski pensó la actoralidad revolucionó para siempre el trabajo de actrices y actores en un set o un escenario. Antes de él actuar era fingir, Stanislavski empieza a pensar en cómo la psique de una actriz o actor se transforman para encarnar a un personaje, por supuesto que su proceso teórico dialoga con el padre del psicoanálisis, su contemporaneo: Sigmund Freud. A partir de Stanislavski empezaron a aparecer una multiplicidad de teorías y escuelas, como el Método de Lee Strasberg -uno muy usado en Hollywood- e incluso escuelas actorales que van en contra del proceso interno del ruso, como la biomecánica de su alumno Meyerhold. El punto es que Stanislavski revolucionó la forma de pensar la actuación y dio pie a la complejidad de lo que es hoy en día.',
    },
  ];

  return (
    <section className="faqs">
      <motion.h2
        className="faqs__title"
        initial={{ y: '-1rem' }}
        whileInView={{ y: 0, transition: { duration: 1 } }}
      >
        PREGUNTAS FRECUENTES
      </motion.h2>
      {faqs.map((data) => (
        <Faq
          answer={data.answer}
          question={data.question}
          key={data.question}
        />
      ))}
    </section>
  );
}
