import { Link } from "react-router-dom";
import "./header.css";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";

function Header() {
  const { user, basket, dispatch } = useAuth();

  const handleAuthentication = () => {
    localStorage.setItem("basket", JSON.stringify([]));

    dispatch({
      type: "EMPTY_BASKET",
    });

    auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src="/src/assets/jpg-logo.jpeg" alt="" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img src="/src/assets/searchIcon.png" alt="" />
      </div>
      <div className="header-nav">
        <Link to="/login">
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionOne">
              Hello {user ? `${user.email.split("@")[0]}` : "Guest"}
            </div>
            <div className="header-optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionOne">Your</div>
          <div className="header-optionTwo">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBaket">
            <img src="/src/assets/shopping-cart.png" alt="" />
            <span className="header-optionTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
