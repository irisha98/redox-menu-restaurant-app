import { getCartItems} from "../../redux/cartSlice";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector(getCartItems);

  return (
    <div>
      {cartItems.map(cartItem => <CartItem key={cartItem.dishId} cartItem={cartItem}/>)}
    </div>
  );
}

export default Cart;