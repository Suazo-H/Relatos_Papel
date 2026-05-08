import "./BarraBusqueda.css";

export default function BarraBusqueda({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros por título..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
