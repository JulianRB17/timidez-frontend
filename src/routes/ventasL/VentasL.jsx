import Garantia from '../../components/garantia/Garantia';
import HeroVentas from '../../components/heroVentas/HeroVentas';
import IntroVentas from '../../components/intro/Intro';
import Bio from '../../components/bio/Bio';
import Justificacion from '../../components/justificacion/Justificacion';
import Venta from '../../components/venta/Venta';
import CallToActionSm from '../../components/callToActionSm/CallToActionSm';
import Bonos from '../../components/bonos/Bonos';
import Precio from '../../components/precio/Precio';
import Faqs from '../../components/faqs/Faqs';
import CallToAction from '../../components/callToAction/CallToAction';
import Footer from '../../components/footer/Footer';
import Info from '../../components/info/Info';

export default function VentasL() {
  return (
    <section className="ventas-l">
      <HeroVentas />
      <IntroVentas />
      <Justificacion />
      <Bio />
      <Venta />
      <Info />
      <CallToActionSm />
      <Bonos />
      <Garantia />
      <CallToActionSm />
      <Precio />
      <Faqs />
      <CallToAction />
      <Footer />
    </section>
  );
}
