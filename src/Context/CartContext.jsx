//createContext is a function that creates a commoncontext object.I can put all the cakes information in the cart.
//useContact is used to access the context value in any componemt.
import { createContext, useContext, useState } from 'react'


const CartContext = createContext()//name of the context object.

//export:beacause i want to use it in other components,useContext is a hook that allows me to access the context value in any component and it will return CartContext.
export const useCart = () => useContext(CartContext)


// The CartProvider from its name its a provider,it will provide the other pages with the cart information inside the CartContext.
export const CartProvider = ({ children }) => {

  //cart is empty
  const [cart, setCart] = useState([])

  // Add a cake to the cart
  const addToCart = (cake, sizeIndex) => {

    const size = cake.sizes[sizeIndex]//0 for small, 1 for medium, 2 for large
    const cartItemId = `${cake.id}-${sizeIndex}`//i create a new id if the costumer choose the same cake with different size, so i can add it to the cart as a new item instead of updating the quantity of the existing item

    setCart(prev => {

      const existing = prev.find(
        item => item.cartItemId === cartItemId
      )

      /*if the cake with the same size is already in the cart, increase its quantity by 1, otherwise add a new item to the cart with quantity 1*/
      if (existing) {
        return prev.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      const newItem = {
        cartItemId: cartItemId,
        id: cake.id,
        name: cake.name,
        image: cake.image,
        sizeName: size.name,
        price: size.price,
        serves: size.serves,
        quantity: 1
      }

      return [...prev, newItem]
    })
  }

  // Change quantity(here if I add 2 choclate cake,i dont want to be choclate cake ,choclate cake so i add the updateQuantity function)
  const updateQuantity = (cartItemId, newQuantity) => {

    if (newQuantity < 1) return

    setCart(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }
 
  // Remove a cake
  const removeFromCart = (cartItemId) => {
    setCart(prev =>
      prev.filter(item => item.cartItemId !== cartItemId)
    )
  }
/* filter function is used to create a new array that contains only the items that do not match the specified cartItemId,if == it will remove that item. */
 

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
   //To clear cart after finishing the order
   const clearCart =()=>{
    setCart([])
   }
  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        subtotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
//Provider component is part of the context API, it will provide the cart information to all the components that are wrapped inside it. 
//children can be Menu,OrderNow ,Cart,app.js 