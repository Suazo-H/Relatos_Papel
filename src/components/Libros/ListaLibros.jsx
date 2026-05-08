import TarjetaLibro from "./TarjetaLibro";
import "./ListaLibros.css";

export default function ListaLibros({ books }) {
  if (books.length === 0) {
    return <div className="empty-state">No se encontraron libros</div>;
  }

  return (
    <div className="lista-libros">
      {books.map((book) => (
        <TarjetaLibro key={book.id} book={book} />
      ))}
    </div>
  );
}
