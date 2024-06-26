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
import { Pixel } from './utils/metaPixel';
import Privacidad from './routes/privacidad/Privacidad';
import CookiesNotice from './components/cookiesNotice/CookiesNotice';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
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
  const [cookiesEstablished, setCookiesEstablished] = useState(true);

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
        firstName: '',
        email: '',
      });
      setLoading(false);
      return;
    } catch (error) {
      setLoading(false);
      console.error(error);
      setFormValues({
        firstName: '',
        email: '',
      });
      alert('Ahh, algo salió malo, por favor vuelve a intentarlo.');
    }
  };

  const handleCookiesAccept = (e) => {
    e.preventDefault();
    // Pixel.grantConsent();
    setCookiesEstablished(true);
  };

  const handleCookiesReject = (e) => {
    e.preventDefault();
    // Pixel.revokeConsent();
    setCookiesEstablished(true);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Pixel /> */}
              <CookiesNotice
                cookiesEstablished={cookiesEstablished}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
              />
              <VentasL urls={urls} dates={dates} />
            </>
          }
        />
        <Route
          path="/programa-s"
          element={
            <>
              <CookiesNotice
                cookiesEstablished={cookiesEstablished}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
              />
              <VentasS urls={urls} dates={dates} />
            </>
          }
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
            <>
              <CookiesNotice
                cookiesEstablished={cookiesEstablished}
                onCookiesAccept={handleCookiesAccept}
                onCookiesReject={handleCookiesReject}
              />
              <Registro
                localDate={localDate}
                hour={hour}
                count={count}
                onSubmit={handleSubmit}
                onChange={handleChange}
                sentUser={sentUser}
                isValidForm={isValidForm}
                loading={loading}
                msgSuccess={msgSuccess}
                setSentUser={setSentUser}
                formValues={formValues}
              />
            </>
          }
        />
        <Route path="/repeticion" element={<Repeticion urls={urls} />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
