import { useState, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext.jsx";
import { useLogin } from "../../hooks/useLogin.js";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [fieldsError, setFieldsError] = useState({});
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { handleLogin, error, clearError } = useLogin();

  {
    /*Dirigir al perfil si el usuario se autentica*/
  }
  if (user) {
    const from = location.state?.from || "/perfil";
    return <Navigate to={from} replace />;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (fieldsError[name]) {
      setFieldsError((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (error) {
      clearError();
    }
  }

  {
    /*Validar los campos del formulario*/
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const newFieldsError = {};
    if (!formData.username.trim()) {
      newFieldsError.username = "Debe ingresar un usuario";
    }
    if (!formData.password.trim()) {
      newFieldsError.password = "Debe ingresar una contraseña";
    }

    if (Object.keys(newFieldsError).length > 0) {
      setFieldsError(newFieldsError);
      return;
    }

    const res = await handleLogin(formData.username, formData.password);

    if (res.exito) {
      setFormData({ username: "", password: "" });
      setFieldsError({});
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p>Bienvenido a Relatos de Papel.</p>
        </div>

        {/*Mensaje según ruta de origen*/}
        {location.state?.from === "/perfil" && (
          <div className="login-message">
            <p>Inicia sesión y comienza tu próximo viaje.</p>
          </div>
        )}
        {location.state?.from === "/checkout" && (
          <div className="login-message">
            <p>Debes iniciar sesión para realizar una compra.</p>
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="error-flag">{error}</div>}

          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingresar usuario"
              value={formData.username}
              onChange={handleChange}
              className={fieldsError.username ? "error" : ""}
            />
            {fieldsError.username && (
              <span className="error-message">{fieldsError.username}</span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresar contraseña"
              value={formData.password}
              onChange={handleChange}
              className={fieldsError.password ? "error" : ""}
            />
            {fieldsError.password && (
              <span className="error-message">{fieldsError.password}</span>
            )}
          </div>

          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
