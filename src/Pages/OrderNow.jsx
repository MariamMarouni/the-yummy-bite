import { useState } from 'react'
import { useCart } from '../Context/CartContext'
import '../css/OrderNow.css'

const OrderNow = () => {

  const { cart, subtotal, clearCart } = useCart()

  const [submitted, setSubmitted] = useState(false)

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    location: '',
    additionalRequests: ''
  })

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
  }
/*name could be name of phone nb or location,value is the value of name or phone or .... */
 

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)
    clearCart()
  }
/*when i click submit order e.preventDefault() to prevent Reload*/
 
if (submitted) {
    return (
      <div className="order-success">

        <div className="success-icon">🎂</div>

        <h1>Order Completed!</h1>

        <p>
          Thank you, {customer.name}! 💗
        </p>

        <p>
          Your order has been placed successfully.
          We appreciate your choice!
        </p>

        <button onClick={() => window.location.href = '/'}>
          Back to Home
        </button>

      </div>
    )
  }

  return (
    <div className="order-page">

      <h1>Complete Your Order 💗</h1>

      <div className="order-summary">

        <h2>Your Order</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (

          cart.map((item, index) => (

            <div className="order-item" key={index}>

              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Size: {item.sizeName}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price * item.quantity}</p>
              </div>

            </div>

          ))
        )}

        <h3 className="order-total">
          Total: ${subtotal.toFixed(2)}
        </h3>

      </div>

      <form className="order-form" onSubmit={handleSubmit}>

        <h2>Customer Information</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label>Delivery Location</label>
        <textarea
          name="location"
          value={customer.location}
          onChange={handleChange}
          placeholder="Enter your full address"
          required
        />

        <label>Free Topping or Filling 🎀</label>

        <p className="free-offer">
          <span>🎁 Gift: FREE TOPPING OR FILLING 💗</span>
        </p>

        <textarea
           name="additionalRequests"
           value={customer.additionalRequests}
           onChange={handleChange}
          placeholder="Example: Chocolate filling, strawberry topping, extra cream..."
         />

        <button type="submit" disabled={cart.length === 0}>
          Place My Order 💗
        </button>

      </form>

    </div>
  )
}

export default OrderNow