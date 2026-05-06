import './Cart.css'

export default function Cart(){

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Carrito</h1>
                <button type="button">x</button>
            </div>

            <div className="cart-footer">
                <p>Total: </p>
            </div>
        </div>
    );
}