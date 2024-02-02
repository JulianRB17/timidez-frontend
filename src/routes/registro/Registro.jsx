import './registro.css';
import Host from './components/host/Host';
import Hero from './components/hero/Hero';
import Secrets from '../../components/secrets/Secrets';
import Bio from '../../components/bio/Bio';
import Form from './components/form/Form';

export default function Registro({
  onSubmit,
  onChange,
  sentUser,
  isValidForm,
  loading,
  msgSuccess,
  setSentUser,
  formValues,
  localDate,
  count,
}) {
  return (
    <section className="registro">
      <Hero localDate={localDate} count={count} />
      <Host />
      <Secrets />
      <Bio />
      <Form
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
  );
}
