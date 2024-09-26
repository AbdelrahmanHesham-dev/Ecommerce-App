import "./login.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setErrorMessage("");
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    setShowNameInput(false);
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });

    setShowNameInput(true);
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="/public/login-logo.png" alt="" />
      </Link>
      <div className="login-container">
        <h1>{showNameInput ? "Create Account" : "Sign in"}</h1>
        <form action="">
          {showNameInput && (
            <>
              <label htmlFor="text">Full Name</label>
              <input type="text" />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIn}>
            Sign in
          </button>
          {errorMessage && (
            <p className="error-message" style={{ color: "red" }}>
              {"Incorrect email or password. Please try again."}
            </p>
          )}
          <p>
            By continuing, you agree to the Amazon fake clone Terms of Use and
            Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
