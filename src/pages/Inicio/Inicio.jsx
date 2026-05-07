import { useState } from "react";
import "./Inicio.css";

import { mockBooks } from "../../data/mockBooks";
import BarraBusqueda from "../../components/Libros/BarraBusqueda";
import ListaLibros from "../../components/Libros/ListaLibros";

export default function Inicio() {
  const [search, setSearch] = useState("");

  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-section">
      <div className="container">
        <h1 className="section-title">Catálogo de Libros</h1>
        <p className="section-subtitle">
          Explora nuestra colección y encuentra tu próxima lectura.
        </p>

        <BarraBusqueda value={search} onChange={setSearch} />

        <ListaLibros books={filteredBooks} />
      </div>
    </div>
  );
}
