import Form from '../../../../components/form/Form';

export default function RegistroCallToAction({ formProps }) {
  return (
    <section className="registro-call-to-action">
      <p className="registro-call-to-action__hook">
        No sigas perdiéndote de la vida por el terror al juicio ajeno.
      </p>
      <Form formProps={formProps} />
      <div className="registro-call-to-action__third-element" />
    </section>
  );
}
