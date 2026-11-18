import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cakes } from '../Data/cakes'
import { useCart } from '../Context/CartContext'
import '../css/Menu.css'

const Menu = () => {

  const [picked, setPicked] = useState({})

  const { addToCart, cart } = useCart()
//addToCart is function to add product to my cart,cart is array contains he product in my cart

  const chooseSize = (cakeId, sizeNumber) => {
    setPicked({ ...picked, [cakeId]: sizeNumber })
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )
//to count nb of products my cart

  return (
    <div className="menu-page">

      <h1>Our Sweets</h1>

      <p className="menu-intro">
        "Life is short, eat something sweet!🤪"
        Pick your favorite treat and let happiness begin! 💗
      </p>

      <Link to="/Cart" className="btn-explore">
        🛒 My Cart ({cartCount})
      </Link>

      <div className="cake-list">

        {cakes.map((cake) => {

          const sizeNumber = picked[cake.id] ?? 0
          const size = cake.sizes[sizeNumber]

          return (
            <article key={cake.id} className="cake-card">
              <h2>{cake.name}</h2>

              <img
                src={cake.image}
                alt={cake.name}
                className="cake-image"
              />

              <p className="cake-desc">
                {cake.description}
              </p>

              <ul className="sizes">

                {cake.sizes.map((s, i) => (
                  <li key={s.name}>

                    <button
                      type="button"
                      className={
                        i === sizeNumber
                          ? 'size-btn active'
                          : 'size-btn'
                      }
                      onClick={() => chooseSize(cake.id, i)}
                    >
                      {s.name}
                    </button>

                  </li>
                ))}

              </ul>

              <p className="serves">
                Serves {size.serves} people
              </p>

              <p className="cake-price">
                ${size.price}
              </p>

              <button
                type="button"
                className="btn-explore"
                onClick={() => addToCart(cake, sizeNumber)}
              >
                Add to Cart 🛒
              </button>

            </article>
          )
        })}

      </div>
    </div>
  )
}

export default Menu