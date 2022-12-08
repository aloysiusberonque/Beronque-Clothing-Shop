import { Product } from "../../../models/Product";

export enum ShopActionType {
    ADD = 'addClothingItem',
    REMOVE = 'removeClothingItem',
    UPDATE = 'updateTotalCost',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const addClothingItem = (clothingItem: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: clothingItem,
  });
  
  export const removeClothingItem = (clothingItem: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: clothingItem,
  });

  export const updateTotalCost = (totalCost: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: totalCost,
  });