import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import LibroDetalle from "./pages/LibroDetalle/LibroDetalle.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <div id="app" className="app-Layout">
          <Menu />
          <Routes>
            <Route path="/" element={<MainContent />} >
              <Route index element={<Landing />} />
              <Route path="login" element={<Login />} />
              <Route path="inicio" element={<Inicio />} />
              <Route path="libros/:bookId" element={<LibroDetalle />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
