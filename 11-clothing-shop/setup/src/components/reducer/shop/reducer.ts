import { ShopAction, ShopActionType } from "./actions";
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        items: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        items: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        totalCost: action.payload,
      };
    default:
      return state;
  }
};