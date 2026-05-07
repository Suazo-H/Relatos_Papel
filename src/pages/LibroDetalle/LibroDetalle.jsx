import { useParams, useNavigate } from "react-router-dom";
import { mockBooks } from "../../data/mockBooks";
import "./LibroDetalle.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/global/GlobalContext";

export default function LibroDetalle() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleCart } = useContext(GlobalContext);

  const libro = mockBooks.find((item) => item.id === Number(bookId));

  if (!libro) {
    return (
      <section className="page-section">
        <div className="container">
          <div className="empty-state">
            <h2>Libro no encontrado</h2>
            <p>El libro solicitado no existe o no está disponible.</p>
            <button className="primary-btn" onClick={() => navigate("/inicio")}>
              Volver al catálogo
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <button className="detalle-volver" onClick={() => navigate("/inicio")}>
          ← Volver al catálogo
        </button>

        <div className="detalle-libro card">
          <div className="detalle-imagen-contenedor">
            <img
              src={libro.image}
              alt={libro.title}
              className="detalle-imagen"
            />
          </div>

          <div className="detalle-contenido">
            <span className="detalle-genero">{libro.genre}</span>

            <h1 className="detalle-titulo">{libro.title}</h1>

            <p className="detalle-autor">
              por <strong>{libro.author}</strong>
            </p>

            <div className="detalle-rating">
              ⭐ {libro.rating} · {libro.reviews} reseñas
            </div>

            <p className="detalle-sinopsis">{libro.synopsis}</p>

            <div className="detalle-info-grid">
              <div>
                <span>Año</span>
                <strong>{libro.publishedYear}</strong>
              </div>

              <div>
                <span>Páginas</span>
                <strong>{libro.pages}</strong>
              </div>

              <div>
                <span>Idioma</span>
                <strong>{libro.language}</strong>
              </div>

              <div>
                <span>Formato</span>
                <strong>{libro.format}</strong>
              </div>

              <div>
                <span>Editorial</span>
                <strong>{libro.publisher}</strong>
              </div>

              <div>
                <span>ISBN</span>
                <strong>{libro.isbn}</strong>
              </div>
            </div>

            <div className="detalle-compra">
              <div>
                <span className="detalle-precio">${libro.price}</span>

                <p
                  className={
                    libro.stock > 0
                      ? "detalle-stock disponible"
                      : "detalle-stock agotado"
                  }
                >
                  {libro.stock > 0
                    ? `Disponible · ${libro.stock} unidades`
                    : "Sin stock disponible"}
                </p>
              </div>

              <button
                className="book-detail-btn"
                disabled={libro.stock === 0}
                onClick={() => addToCart(libro)}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
