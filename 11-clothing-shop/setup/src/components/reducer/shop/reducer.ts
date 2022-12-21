import { ShopAction, ShopActionType } from "./actions";
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        shopItems: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        shopItems: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        shopTotalCost: action.payload,
      };
    default:
      return state;
  }
};