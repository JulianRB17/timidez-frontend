import logoSrc from '../../assets/logo-transparente.png';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <img
          src={logoSrc}
          className="footer__logo"
          width={400}
          height={70}
          alt="logo"
        />
        <p className="footer__credits">© 2024 Julián Reyes Botello</p>
      </div>
      <p className="footer__hotmart-txt">
        "Este producto se comercializa con el apoyo de Hotmart. La plataforma no
        realiza un control editorial previo de los productos vendidos, ni evalúa
        el tecnicismo y experiencia de quienes los elaboran. La existencia de un
        producto y su adquisición, a través de la plataforma, no puede
        considerarse garantía de calidad de contenido y resultado, en ningún
        caso. Al comprarlo, el comprador declara conocer esta información. Puede
        acceder a los términos y políticas de Hotmart, incluso antes de que se
        complete la compra."
      </p>
    </section>
  );
}
