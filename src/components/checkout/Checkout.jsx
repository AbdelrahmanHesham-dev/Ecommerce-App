import "./checkout.css";
import { useAuth } from "../../context/GlobalState";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct.jsx";
import SubTotal from "../subTotal/SubTotal.jsx"

function Checkout() {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src="/src/assets/checkoutAd.jpg" alt="" />
        <div>
          <h3>Hello, {user ? `${user.email.split("@")[0]}` : "Guest"}</h3>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
          <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
