import { useAuth } from "../../context/GlobalState";
import './subTotal.css';
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "../../context/AppReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SubTotal() {
  const { basket } = useAuth();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyNowClick = () => {
    setShowPopup(true);
  };

  const { dispatch } = useAuth();
  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
    dispatch({
      type: "EMPTY_BASKET",
    });
  };

  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleBuyNowClick}>Buy Now</button>

      {showPopup && (
        <div className="fixed">
          <div className="popup">
            <img src="/public/image/done.png" alt="" />
            <p>You will now be directed to the home page.</p>
            <button className="popupBtn" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubTotal;
