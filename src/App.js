import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import VentasL from './routes/ventasL/VentasL';
import VentasS from './routes/ventasS/VentasS';
import CierreRegistro from './routes/cierreRegistro/CierreRegistro';
import CierreVenta from './routes/cierreVenta/CierreVenta';
import Registro from './routes/registro/Registro';
import Repeticion from './routes/repeticion/Repeticion';
import { countdown } from './utils/countdown';
import NotFound from './routes/notFound/NotFound';
import api from './utils/api';

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

  const webinarDate = process.env.REACT_APP_WEBINAR_DATE;
  const cursoDate = process.env.REACT_APP_PROGRAMA_DATE;

  useEffect(() => {
    const webinarHour = new Date(webinarDate).getHours();
    const webinarMinutes = new Date(webinarDate).getSeconds();
    setLocalDate(new Date(webinarDate).toLocaleDateString('es-ES'));
    setTimestamp(new Date(webinarDate).getTime());
    setHour(`${webinarHour}:${webinarMinutes ? 0 : '00'}`);
    countdown(timestamp, setCount);
  }, [timestamp, hour, webinarDate]);

  const navigate = useNavigate();

  const urls = {
    // Cambios
    repetitionUrl: process.env.REACT_APP_REPETITION_URL,
    fbWebinarUrl: process.env.REACT_APP_FB_WEBINAR_URL,
    whatsWebinarUrl: process.env.REACT_APP_WA_WEBINAR_URL,

    // Permas
    buyoutUrl: process.env.REACT_APP_BUYOUT_URL,
    encuestaWebinarUrl: process.env.REACT_APP_ENCUESTA_WEBINAR_URL,
    fbPermaUrl: process.env.REACT_APP_FB_PERMA_URL,
    igUrl: process.env.REACT_APP_IG_URL,
    tikTokUrl: process.env.REACT_APP_TIKTOK_URL,
  };

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
      const data = await api.postUser(formValues);
      // if (!data.username) {
      //   setMsgSuccess(false);
      // }
      // if (data.username) {
      //   setMsgSuccess(true);
      // }
      console.log(data);
      setFormValues({
        username: '',
        email: '',
      });
      setSentUser(true);
      setLoading(false);
      navigate('/cierre-r');
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
          path="/cierre-v"
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
