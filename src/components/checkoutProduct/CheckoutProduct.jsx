/* eslint-disable react/prop-types */
import './checkoutProduct.css';
import { useAuth } from "../../context/GlobalState";

function CheckoutProduct({ id, image, title, price, rating }) {
  const { dispatch } = useAuth();
  const removeFromBaskeet = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <img src="/src/assets/star.png" alt="" />
              </p>
            ))}
        </div>
        <button onClick={removeFromBaskeet}>Remove Frome Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
