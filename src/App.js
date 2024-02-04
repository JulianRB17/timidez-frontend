import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import VentasL from './routes/ventasL/VentasL';
import VentasS from './routes/ventasS/VentasS';
import CierreRegistro from './routes/cierreRegistro/CierreRegistro';
import CierreVenta from './routes/cierreVenta/CierreVenta';
import Registro from './routes/registro/Registro';
import Repeticion from './routes/repeticion/Repeticion';
import { countdown } from './utils/countdown';

function App() {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(true);
  const [sentUser, setSentUser] = useState(false);
  const [count, setCount] = useState('');
  const [localDate, setLocalDate] = useState('');
  const [hour, setHour] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const webinarDate = 'Feb 1, 2024 21:50:00';
  const cursoDate =
    'Lunes y miércoles de 19:00 a 21:00 hrs. (horario CDMX) del 8 de enero al 20 de marzo';

  const urls = {
    // Cambios
    repetitionUrl:
      'https://www.youtube.com/embed/QFWUoH_LjJ0?si=-WOrZGxd2sW_jCuq',
    fbWebinarUrl: 'http://www.facebook.com',
    whatsWebinarUrl: 'http://www.whatsapp.com',

    // Permas
    buyoutUrl: 'http://www.google.com',
    fbPermaUrl: 'http://www.facebook.com',
    encuestaWebinarUrl: 'http://www.google.com',
    igUrl: 'http://www.instagram.com',
    tikTokUrl: 'http://www.tiktok.com',
  };

  useEffect(() => {
    const webinarHour = new Date(webinarDate).getHours();
    const webinarMinutes = new Date(webinarDate).getSeconds();
    setLocalDate(new Date(webinarDate).toLocaleDateString('es-ES'));
    setTimestamp(new Date(webinarDate).getTime());
    setHour(`${webinarHour}:${webinarMinutes ? 0 : '00'}`);
    countdown(timestamp, setCount);
  }, [timestamp, hour]);

  const handleChange = (e) => {
    const { target } = e;
    const { id, value } = target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
    setValidForm(target.form.checkValidity());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { user: formValues.username, email: formValues.email };
      // await api.postUser(formValues);
      // https://dev.to/saragibby/better-way-to-embed-active-campaign-forms-into-react-n9n
      if (!data.user) {
        setMsgSuccess(false);
      }
      if (data.user) {
        setMsgSuccess(true);
      }
      setFormValues({
        username: '',
        email: '',
      });
      setSentUser(true);
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.error(error);
      setFormValues({
        username: '',
        email: '',
      });
      alert('Ahh, algo salió malo, por favor vuelve a intentarlo.');
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<VentasL buyoutUrl={urls.buyoutUrl} />} />
        <Route path="/programa-s" element={<VentasS />} />
        <Route
          path="/cierre-r"
          element={
            <CierreRegistro
              localDate={localDate}
              hour={hour}
              count={count}
              urls={urls}
            />
          }
        />
        <Route
          path="/programa-v"
          element={
            <CierreVenta cursoDate={cursoDate} fbPermaUrl={urls.fbPermaUrl} />
          }
        />
        <Route
          path="/registro"
          element={
            <Registro
              onSubmit={handleSubmit}
              onChange={handleChange}
              sentUser={sentUser}
              isValidForm={isValidForm}
              loading={loading}
              msgSuccess={msgSuccess}
              setSentUser={setSentUser}
              formValues={formValues}
              localDate={localDate}
              hour={hour}
              count={count}
            />
          }
        />
        <Route
          path="/repeticion"
          element={<Repeticion repetitionUrl={urls.repetitionUrl} />}
        />
      </Routes>
    </div>
  );
}

export default App;
