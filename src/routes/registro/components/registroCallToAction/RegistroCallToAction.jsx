import Form from '../../../../components/form/Form';

export default function RegistroCallToAction({
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
    <section className="registro-call-to-action">
      <p className="registro-call-to-action__hook">
        No sigas perdiéndote de la vida por el terror al juicio ajeno.
      </p>
      <div className="registro-call-to-action__container">
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
      </div>
      <div className="registro-call-to-action__third-element" />
    </section>
  );
}
