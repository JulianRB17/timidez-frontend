import Host from './components/host/Host';
import Hero from './components/hero/Hero';
import Secrets from './components/secrets/Secrets';
import Bio from '../../components/bio/Bio';
import RegistroCallToAction from './components/registroCallToAction/RegistroCallToAction';

export default function Registro({
  localDate,
  hour,
  count,
  onSubmit,
  onChange,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
}) {
  return (
    <>
      <section className="registro">
        <Hero
          localDate={localDate}
          count={count}
          hour={hour}
          onSubmit={onSubmit}
          onChange={onChange}
          sentUser={sentUser}
          isValidForm={isValidForm}
          loading={loading}
          msgSuccess={msgSuccess}
          setSentUser={setSentUser}
          formValues={formValues}
        />
        <Host />
        <Secrets />
        <Bio />
        <RegistroCallToAction
          onSubmit={onSubmit}
          onChange={onChange}
          sentUser={sentUser}
          isValidForm={isValidForm}
          loading={loading}
          msgSuccess={msgSuccess}
          setSentUser={setSentUser}
          formValues={formValues}
        />
      </section>
    </>
  );
}
