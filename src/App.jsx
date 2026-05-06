import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Perfil from "./pages/Perfil/Perfil.jsx";
import LibroDetalle from "./pages/LibroDetalle/LibroDetalle.jsx";
import GlobalProvider from "./context/global/GlobalProvider.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Menu from "./components/Menu/Menu.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import {AuthProvider} from "./context/auth/authProvider.jsx";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute.jsx";

function App() {
  return (
      <GlobalProvider>
        <AuthProvider>
            <BrowserRouter>
              <div id="app" className="app-Layout">
                <Menu />
                <Routes>
                  <Route path="/" element={<MainContent />} >
                    <Route index element={<Landing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="inicio" element={<Inicio />} />
                    <Route path="libros/:bookId" element={<LibroDetalle />} />
                    {/*Vista protegida del checkout*/}
                    <Route path="checkout" element={
                      <PrivateRoute>
                        <Checkout />
                      </PrivateRoute>
                    } />
                    {/*Vista protegida del perfil de usuario*/}
                    <Route path="perfil" element={
                      <PrivateRoute>
                        <Perfil />
                      </PrivateRoute>
                    } />
                  </Route>
                </Routes>
                <Footer />
              </div>
            </BrowserRouter>
        </AuthProvider>
      </GlobalProvider>
  );
}

export default App;
