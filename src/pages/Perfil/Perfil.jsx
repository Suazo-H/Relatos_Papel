import React, { useContext } from "react";
import { AuthContext } from "../../context/auth/authContext.jsx";
import { useLogin } from "../../hooks/useLogin.js";
import "./Perfil.css";

export default function Perfil() {
  const { user } = useContext(AuthContext);
  const { logout } = useLogin();

  if (!user) {
    return null;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <h1>Mi Perfil</h1>
      </div>

      <div className="perfil-info">
        <h2>Información general</h2>
        <div className="perfil-details">
          <div className="perfil-name">
            <h3>{user.username}</h3>
          </div>
          <div className="perfil-data">
            <label>Nombre: </label>
            <span>{user.customer.name}</span>
          </div>
          <div className="perfil-data">
            <label>Correo: </label>
            <span>{user.customer.email}</span>
          </div>
          <div className="perfil-data">
            <label>Teléfono: </label>
            <span>{user.customer.phone}</span>
          </div>
          <div className="perfil-data">
            <label>Dirección: </label>
            <span>{user.customer.address}</span>
          </div>
          <div className="perfil-data">
            <label>Miembro desde: </label>
            <span>{user.customer.memberSince}</span>
          </div>
        </div>
      </div>
      <section className="perfil-orders">
        <h2>Mis pedidos</h2>
        <div className="pedidos-details">
          {user.recentOrders.length === 0 ? (
            <div className="no-orders">
              <p>No tienes pedidos recientes.</p>
            </div>
          ) : (
            <div className="pedido-list">
              {user.recentOrders.map((order) => (
                <div key={order.id} className="pedido-info">
                  <h3>Pedido #{order.id}</h3>
                  <p>Fecha: {order.date}</p>
                  <p>Estado: {order.status}</p>

                  <div className="pedido-items">
                    <h4>Libros ({order.items.length})</h4>
                    {order.items.map((item, index) => (
                      <div key={index} className="pedido-item">
                        <span className="item-name">
                          Item {index + 1}: {item.name}{" "}
                        </span>
                        <span className="item-quantity">
                          Cantidad: {item.quantity}{" "}
                        </span>
                        <span className="item-price">
                          Precio: ${item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pedido-footer">
                    <span className="pedido-total">Total: ${order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="perfil-logout-btn">
          <button id="logout-btn" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      </section>
    </div>
  );
}
