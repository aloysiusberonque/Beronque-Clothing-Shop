import { Product } from "../../../models";

export type ShopState = {
    items: Product[],
    totalCost: number,
    addToCart: any,
    removeItem: any
}

export const initialState = {
    items: [],
    totalCost: 0,
    addToCart: null,
    removeItem: null,
}