import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import '../css/Cart.css'

const Cart = () => {

  const {
    cart,
    updateQuantity,
    removeFromCart,
    subtotal
  } = useCart()

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart 🛒</h1>

        <p>Your cart is empty!</p>

        <Link to="/Menu" className="cart-btn">
          Explore Our Sweets
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">

      <h1>My Shopping Cart 🛒</h1>

      <div className="cart-items">

        {cart.map((item) => (

          <div className="cart-item" key={item.cartItemId}>

            <img src={item.image} alt={item.name} />

            <div className="cart-info">

              <h2>{item.name}</h2>

              <p>Size: {item.sizeName}</p>

              <p>Serves: {item.serves} people</p>

              <p>Price: ${item.price}</p>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    updateQuantity(
                      item.cartItemId,
                      item.quantity - 1
                    )
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.cartItemId,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.cartItemId)}
              >
                Remove
              </button>

            </div>

            <strong>
              ${(item.price * item.quantity).toFixed(2)}
            </strong>

          </div>

        ))}

      </div>

      <div className="cart-summary">

        <h2>Order Summary</h2>

        <p>
          Subtotal:
          <strong>${subtotal.toFixed(2)}</strong>
        </p>

        <Link to="/OrderNow" className="cart-btn">
          Continue to Checkout
        </Link>

      </div>

      <Link to="/Menu" className="continue-shopping">
        ← Continue Shopping
      </Link>

    </div>
  )
}

export default Cart