import "./Landing.css";

export default function Landing(){
    return(
        <div className="landing-container">
            <div className="landing-content">
                <h1>Descubre tu próxima gran lectura en Relatos de Papel</h1>
                <p className="landing-text">Explora una amplia colección de libros y encuentra historias que te inspiren, enseñen y acompañen.</p>
            </div>
            <div className="landing-image">
                <img alt="Libros apilados" src="/libros.png"/>
            </div>
        </div>
    );
}