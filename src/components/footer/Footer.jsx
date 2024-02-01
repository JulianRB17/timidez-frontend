import './footer.css';

export default function Footer() {
  return (
    <section className="footer">
      <img
        src="/logo-transparente.png"
        alt="logo"
        className="footer__logo"
        width={400}
        height={70}
      />
      <p className="footer__credits">© 2024 Julián Reyes Botello</p>
    </section>
  );
}
