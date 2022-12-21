import { Product } from "../../../models";

export type ShopState = {
    shopItems: Product[],
    shopTotalCost: number,
    addToCart: any,
    removeCartItem: any,
}

export const initialState = {
    shopItems: [],
    shopTotalCost: 0,
    addToCart: null,
    removeCartItem: null,
}