
import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../redux/cartSlice";

const Dish = ({ dish }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector(getCartItems);
  const inCart = cartItems.some((i) => i.dishId === dish.id);

  return (
    <div className="dish-card">
      <img src={`./${dish.img}.png`} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.price} ₽</p>
      <p className="description">{dish.description}</p>

      <div className="dish-buttons">
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button
          className={`add-btn ${inCart ? "in-cart" : ""}`}
          onClick={() => dispatch(addItemToCart({ dish, quantity }))}
        >
          {inCart ? "В корзине" : "В корзину"}
        </button>
      </div>
    </div>
  );
};

export default Dish;

