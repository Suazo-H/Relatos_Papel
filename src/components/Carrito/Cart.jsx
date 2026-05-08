import { useContext } from "react";
import "./Cart.css";
import { GlobalContext } from "../../context/global/GlobalContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    isCartOpen,
    toggleCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    clearCart,
  } = useContext(GlobalContext);

  if (!isCartOpen) return null;

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Carrito</h1>
        <button type="button" onClick={toggleCart}>
          x
        </button>
      </div>

      <div className="cart-body">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <span className="cart-item-title">{item.title}</span>
                  <span className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="cart-footer">
        <p>
          <span>Total:</span>
          <span>${cartTotal.toFixed(2)}</span>
        </p>
        {cart.length > 0 && (
          <>
            <Link to="/checkout" onClick={toggleCart}>
              Finalizar Compra
            </Link>
            <button
              type="button"
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}
