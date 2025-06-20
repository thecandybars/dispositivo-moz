import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Mapa from "./pages/mapa/MapaIndex";
import Excavacion from "./pages/excavacion/Excavacion";
import Piezas from "./pages/piezas/Piezas";
import Layout from "./layout/Layout";
import Inicio from "./pages/inicio/Inicio";
import Creditos from "./pages/creditos/Creditos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="mapa" element={<Mapa />} />
          <Route path="excavacion" element={<Excavacion />} />
          <Route path="piezas" element={<Piezas />} />
          <Route path="creditos" element={<Creditos />} />
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
