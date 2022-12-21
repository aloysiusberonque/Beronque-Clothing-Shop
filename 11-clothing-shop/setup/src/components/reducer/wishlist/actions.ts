import { Product } from "../../../models/Product";

export enum WishlistActionType {
    ADD = 'addWishlistClothingItem',
    REMOVE = 'removeWishlistClothingItem',
    UPDATE = 'updateWishlistTotalCost',
  }
  
  export type WishlistAction = {
    type: WishlistActionType;
    payload: any;
  };
  
  export const addWishlistClothingItem = (wishlistClothingItem: Product): WishlistAction => ({
    type: WishlistActionType.ADD,
    payload: wishlistClothingItem,
  });
  
  export const removeWishlistClothingItem = (wishlistClothingItem: Product): WishlistAction => ({
    type: WishlistActionType.REMOVE,
    payload: wishlistClothingItem,
  });

  export const updateWishlistTotalCost = (wishListTotalCost: number): WishlistAction => ({
    type: WishlistActionType.UPDATE,
    payload: wishListTotalCost,
  });