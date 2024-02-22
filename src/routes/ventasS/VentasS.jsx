import Garantia from '../../components/garantia/Garantia';
import HeroVentas from '../../components/heroVentas/HeroVentas';
import Bio from '../../components/bio/Bio';
import Justificacion from '../../components/justificacion/Justificacion';
import Venta from '../../components/venta/Venta';
import CallToActionSm from '../../components/callToActionSm/CallToActionSm';
import Bonos from '../../components/bonos/Bonos';
import Precio from '../../components/precio/Precio';
import CallToAction from '../../components/callToAction/CallToAction';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';

export default function VentasS({ urls, dates }) {
  return (
    <section className="ventas-l">
      <HeroVentas />
      <CallToActionSm buyoutUrl={urls.buyoutUrl} />
      <Justificacion />
      <Bio />
      <Venta />
      <Info dates={dates} />
      <CallToActionSm buyoutUrl={urls.buyoutUrl} />
      <Bonos />
      <Garantia />
      <CallToActionSm buyoutUrl={urls.buyoutUrl} />
      <Precio />
      <CallToAction buyoutUrl={urls.buyoutUrl} />
      <Footer />
    </section>
  );
}
