import { Product } from "../../../models";

export type WishlistState = {
    wishlistItems: Product[],
    wishlistTotalCost: number,
    addToWishlist: any,
    removeWishlistItem: any,
}

export const wishlistInitialState = {
    wishlistItems: [],
    wishlistTotalCost: 0,
    addToWishlist: null,
    removeWishlistItem: null,
}