import { createContext, type Dispatch } from "react";

import { WishlistAction } from "../reducers";
import { Product } from "../models";

// The initial format of the wishlist for its global state
export const initialWishlist: Product[] = [];
// The initial format of the wishlist dispatch for its dispatch functionalities
export const initialWishlistDispatch: Dispatch<WishlistAction> = () => {};

// This would be the global state of the wishlist
export const WishlistContext = createContext(initialWishlist);
// This would be the dispatch function that has corresponding actions that would affect the global state
export const WishlistDispatchContext = createContext(initialWishlistDispatch);

