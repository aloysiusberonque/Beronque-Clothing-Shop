import { WishlistAction, WishlistActionType } from "./actions";
import { WishlistState } from "./state";

export const wishlistReducer = (state: WishlistState, action: WishlistAction) => {
  switch (action.type) {
    case WishlistActionType.ADD:
      return {
        ...state,
        wishlistItems: action.payload,
      };

    case WishlistActionType.REMOVE:
      return {
        ...state,
        wishlistItems: action.payload,
      };

    case WishlistActionType.UPDATE:
      return {
        ...state,
        wishlistTotalCost: action.payload,
      };
    default:
      return state;
  }
};