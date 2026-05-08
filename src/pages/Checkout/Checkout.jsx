import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { GlobalContext } from "../../context/global/GlobalContext";

export default function Checkout() {

  const navigate = useNavigate();

  const { cart, clearCart, cartTotal } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleCheckout = () => {
    const newErrors = {};

    // Validar campos requeridos
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "Este campo es requerido";
      }
    });

    // Validar formato de email
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Formato de correo electrónico inválido";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    window.alert("¡Pedido realizado correctamente!");

    clearCart();

    navigate("/inicio");
  };

  return (
    <div className="checkout-container">

      {/* FORMULARIO */}
      <div className="checkout-form">

        <h1>Checkout</h1>

        <section>
          <h3>Información de contacto</h3>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Correo electrónico"
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </section>

        <section>
          <h3>Dirección de envío</h3>

          <div className="input-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Nombre completo"
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Dirección"
              onChange={handleChange}
              className={errors.address ? "input-error" : ""}
            />
            {errors.address && <span className="error-text">{errors.address}</span>}
          </div>

          <div className="checkout-row">

            <div className="input-group">
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Ciudad"
                onChange={handleChange}
                className={errors.city ? "input-error" : ""}
              />
              {errors.city && <span className="error-text">{errors.city}</span>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="country"
                value={formData.country}
                placeholder="País"
                onChange={handleChange}
                className={errors.country ? "input-error" : ""}
              />
              {errors.country && <span className="error-text">{errors.country}</span>}
            </div>

          </div>
        </section>

        <section>
          <h3>Información de pago</h3>

          <div className="input-group">
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              placeholder="Número de tarjeta"
              onChange={handleChange}
              className={errors.cardNumber ? "input-error" : ""}
            />
            {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
          </div>

          <div className="checkout-row">

            <div className="input-group">
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                placeholder="MM/YY"
                onChange={handleChange}
                className={errors.expiry ? "input-error" : ""}
              />
              {errors.expiry && <span className="error-text">{errors.expiry}</span>}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                placeholder="CVV"
                onChange={handleChange}
                className={errors.cvv ? "input-error" : ""}
              />
              {errors.cvv && <span className="error-text">{errors.cvv}</span>}
            </div>

          </div>
        </section>

      </div>

      {/* RESUMEN */}
      <div className="checkout-summary">

        <h2>Resumen de compra</h2>

        {
          cart?.length > 0 ? (
            cart.map((item) => (

              <div className="summary-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="summary-info">
                  <h4>{item.title}</h4>
                  <p>Cantidad: {item.quantity}</p>
                </div>

                <span>
                  ${item.price.toFixed(2)}
                </span>

              </div>

            ))
          ) : (
            <p>No hay productos en el carrito.</p>
          )
        }

        <div className="summary-total">
          <h3>Total</h3>
          <h3>${cartTotal.toFixed(2)}</h3>
        </div>

        <button
          className="checkout-button"
          onClick={handleCheckout}
        >
          Realizar pedido
        </button>

      </div>

    </div>
  );
}