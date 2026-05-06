import { useNavigate } from "react-router-dom";
import "./TargetaLibro.css";

export default function TargetaLibro({ book }) {

    const navigate = useNavigate();

    return (
        <div
            className="book-card"
            onClick={() => navigate(`/libros/${book.id}`)}
        >

            {/* IMAGEN */}
            <div className="book-image-container">
                <img
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                />
            </div>

            {/* CONTENIDO */}
            <div className="book-content">

                <h3 className="book-title">
                    {book.title}
                </h3>

                <p className="book-author">
                    {book.author}
                </p>

                <span
                    className={`book-stock ${
                        book.stock > 0
                            ? "in-stock"
                            : "out-stock"
                    }`}
                >
                    {
                        book.stock > 0
                            ? "Disponible"
                            : "Sin stock"
                    }
                </span>

                <span className="book-price">
                    ${book.price}
                </span>

            </div>
        </div>
    );
}