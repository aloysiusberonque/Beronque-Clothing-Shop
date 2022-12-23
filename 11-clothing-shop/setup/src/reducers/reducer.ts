import {
  CartAction,
  CartActionType,
  WishlistAction,
  WishlistActionType,
} from "./actions";
import { Product } from "../models";

export const cartReducer = (state: Product[], action: CartAction) => {
  switch (action.type) {
    // Adds the action.payload to the global state
    case CartActionType.ADD:
      return [...state, action.payload];

    // Filtering out the product.id from the global state if the action.payload.id doesn't match with it
    case CartActionType.REMOVE:
      return state.filter((product) => product.id != action.payload.id);

    // Given the specific global state id and the action.payload.id, it will update the global state's quantity to the action.payload.quantity 
    case CartActionType.UPDATE:
      return state.map((item) => {
        return item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item;
      });

    default:
      return;
  }
};

export const wishlistReducer = (state: Product[], action: WishlistAction) => {
  switch (action.type) {
    case WishlistActionType.ADD:
      return [...state, action.payload];

    case WishlistActionType.REMOVE:
      return state.filter((product) => product.id != action.payload.id);

    default:
      return;
  }
};
