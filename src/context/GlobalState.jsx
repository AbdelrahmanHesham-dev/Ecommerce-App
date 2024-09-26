/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./AppReducer.jsx";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;

export const useAuth = () => {
  return useContext(GlobalContext);
};
