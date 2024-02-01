import logoSrc from '../../assets/logo-transparente.png';

export default function Footer() {
  return (
    <section className="footer">
      <img
        src={logoSrc}
        className="footer__logo"
        width={400}
        height={70}
        alt="logo"
      />
      <p className="footer__credits">© 2024 Julián Reyes Botello</p>
    </section>
  );
}
