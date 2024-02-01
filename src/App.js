import { Routes, useNavigate, Route } from 'react-router-dom';
import './App.css';
import { useRef } from 'react';
import VentasL from './routes/ventasL/VentasL';
import VentasS from './routes/ventasS/VentasS';
import CierreRegistro from './routes/cierreRegistro/CierreRegistro';
import CierreVenta from './routes/cierreVenta/CierreVenta';
import Registro from './routes/registro/Registro';
import Repeticion from './routes/repeticion/Repeticion';

function App() {
  const navigate = useNavigate();
  const navigation = useRef(useNavigate());

  return (
    <div className="app">
      <Routes>
        <Route path="ventas-l" element={<VentasL />} />
        <Route path="ventas-s" element={<VentasS />} />
        <Route path="cierre-r" element={<CierreRegistro />} />
        <Route path="cierre-v" element={<CierreVenta />} />
        <Route path="registro" element={<Registro />} />
        <Route path="repeticion" element={<Repeticion />} />
      </Routes>
    </div>
  );
}

export default App;
