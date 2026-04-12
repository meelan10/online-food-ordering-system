import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
const {getTotalCartAmount} =useContext(StoreContext)

  return (
    <div>
      <form className='place-order'>
       <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='first name' />
          <input type="text" placeholder="last Name" />
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
         <div className="multi-field">
          <input type="text" placeholder='city' />
          <input type="text" placeholder="State" />
        </div>
         <div className="multi-field">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder='Phone' />

       </div>
       <div className="place-order-right">

           <div className="cart-total">
        <h2>Cart Totals</h2>
        <div>
           <div className="cart-total-details">
            <p className="">Subtotal</p>
            <p className="">${getTotalCartAmount()+2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>${getTotalCartAmount() === 0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
          <button>Proceed to Payment</button>
      </div>
       </div>
      </form>
    </div>
  )
}

export default PlaceOrder
