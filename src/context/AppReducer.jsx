export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
};

export const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  user: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      { const updatedBasketAdd = [...state.basket, action.item];
      localStorage.setItem("basket", JSON.stringify(updatedBasketAdd)); 
      return {
        ...state,
        basket: updatedBasketAdd,
      }; }
    case "EMPTY_BASKET":
      localStorage.setItem("basket", JSON.stringify([])); 
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
