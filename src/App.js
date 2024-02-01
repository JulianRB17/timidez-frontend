import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';
import VentasL from './routes/ventasL/VentasL';
import VentasS from './routes/ventasS/VentasS';
import CierreRegistro from './routes/cierreRegistro/CierreRegistro';
import CierreVenta from './routes/cierreVenta/CierreVenta';
import Registro from './routes/registro/Registro';
import Repeticion from './routes/repeticion/Repeticion';

function App() {
  const navigate = useNavigate();
  const navigation = useRef(useNavigate());

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [isValidForm, setValidForm] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(true);
  const [sentUser, setSentUser] = useState(false);

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
      const data = { user: 'usuario', email: 'eva' };
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
        <Route path="/" element={<VentasL />} />
        <Route path="/ventas-s" element={<VentasS />} />
        <Route path="/cierre-r" element={<CierreRegistro />} />
        <Route path="/cierre-v" element={<CierreVenta />} />
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
        <Route path="/repeticion" element={<Repeticion />} />
      </Routes>
    </div>
  );
}

export default App;
