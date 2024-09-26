import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState.jsx";
import Footer from "./components/footer/Footer.jsx";
import Checkout from "./components/checkout/Checkout.jsx";

function App() {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<h1>page is not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
