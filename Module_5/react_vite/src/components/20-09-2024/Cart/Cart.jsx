// Cart Screen
import { useState } from 'react'
import './App.css'

const App = () => {
  const [itemsInCart, setItemsInCart] = useState(0);

  const addQty = () => {
    setItemsInCart(itemsInCart + 1)
  }

  const reduceQty = () => {
    setItemsInCart(itemsInCart - 1)
  }

  const cartItems = [
    {
        "id": "rec1JZlfCIBOPdcT2",
        "title": "Samsung Galaxy S8",
        "price": "399.99",
        "img": "https://www.course-api.com/images/cart/phone-1.png",
        "amount": 1
    },
    {
        "id": "recB6qcHPxb62YJ75",
        "title": "google pixel",
        "price": "499.99",
        "img": "https://www.course-api.com/images/cart/phone-2.png",
        "amount": 1
    },
    {
        "id": "recdRxBsE14Rr2VuJ",
        "title": "Xiaomi Redmi Note 2",
        "price": "699.99",
        "img": "https://www.course-api.com/images/cart/phone-3.png",
        "amount": 1
    },
    {
        "id": "recwTo160XST3PIoW",
        "title": "Samsung Galaxy S7",
        "price": "599.99 ",
        "img": "https://www.course-api.com/images/cart/phone-4.png",
        "amount": 1
    }
]

  return (
    <div>
      <h1>Accordion</h1>

      {
        itemsInCart
      }
      <div className='accordion'>
      {
        cartItems.map(cartData => {
          return <CartItem title={cartData.title} price={cartData.price} image={cartData.img} addQty={addQty}  reduceQty={reduceQty}/>
        })
      }
    
      </div>
    </div>
  )
}

export default App
