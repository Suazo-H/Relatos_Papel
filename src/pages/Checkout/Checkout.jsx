import React, { useContext, useState } from "react";
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckout = () => {

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

                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        onChange={handleChange}
                    />
                </section>

                <section>
                    <h3>Dirección de envío</h3>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre completo"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="address"
                        placeholder="Dirección"
                        onChange={handleChange}
                    />

                    <div className="checkout-row">

                        <input
                            type="text"
                            name="city"
                            placeholder="Ciudad"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="country"
                            placeholder="País"
                            onChange={handleChange}
                        />

                    </div>
                </section>

                <section>
                    <h3>Información de pago</h3>

                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Número de tarjeta"
                        onChange={handleChange}
                    />

                    <div className="checkout-row">

                        <input
                            type="text"
                            name="expiry"
                            placeholder="MM/YY"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="cvv"
                            placeholder="CVV"
                            onChange={handleChange}
                        />

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
                                    ${item.price}
                                </span>

                            </div>

                        ))
                    ) : (
                        <p>No hay productos en el carrito.</p>
                    )
                }

                <div className="summary-total">
                    <h3>Total</h3>
                    <h3>${cartTotal}</h3>
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