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
  const [urls, setUrls] = useState({});
  const [dates, setDates] = useState({});

  useEffect(() => {
    (async () => {
      const data = await api.getData();
      setDates(data.dates);
      setUrls(data.urls);
      return;
    })();
  }, []);

  useEffect(() => {
    setTimestamp(new Date(dates.webinarDate).getTime());
    const webinarHour = new Date(dates.webinarDate).getHours();
    const webinarMinutes = new Date(dates.webinarDate).getSeconds();
    setLocalDate(new Date(dates.webinarDate).toLocaleDateString('es-ES'));
    setHour(`${webinarHour}:${webinarMinutes ? 0 : '00'}`);
    countdown(timestamp, setCount);
    return;
  }, [hour, timestamp, dates.webinarDate]);

  const navigate = useNavigate();

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
      const contactData = await api.postContact(formValues);
      if (contactData.contactList) {
        setMsgSuccess(true);
        setSentUser(true);
        navigate('/cierre-r');
      } else {
        setMsgSuccess(false);
      }
      setFormValues({
        username: '',
        email: '',
      });
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
        <Route path="/" element={<VentasL urls={urls} dates={dates} />} />
        <Route
          path="/programa-s"
          element={<VentasS urls={urls} dates={dates} />}
        />
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
            <CierreVenta
              cursoDate={dates.programaDate}
              fbPermaUrl={urls.fbPermaUrl}
            />
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
            />
          }
        />
        <Route path="/repeticion" element={<Repeticion urls={urls} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
