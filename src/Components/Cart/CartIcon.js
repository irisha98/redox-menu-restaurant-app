
import { useSelector } from 'react-redux';
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from './CartItem';
import { useState } from 'react';


const CartIcon = ({ onClick }) => {
   const totalPrice = useSelector(getTotalPrice);
   const [isOpen, setIsOpen] = useState(false);
   const cartItems = useSelector(getCartItems);
   const toggleCart = () => {
    setIsOpen(!isOpen);
   }
 
  return (
    <div className='cart-icon-fixed'>
    <div className="cart-icon-wrapper" onClick={toggleCart}>
       
      <img
        className="cart-image"
        src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"
        alt="cart"
      />
      <span className="cart-total">{totalPrice} ₽</span>
    </div>
    {isOpen && (
        <div className='cart-details'>
        {cartItems.map((item) => (
            <CartItem key={item.dishId} cartItem={item} />
        ))}
        
        </div>
    )}
    </div>
  );
};

export default CartIcon;

