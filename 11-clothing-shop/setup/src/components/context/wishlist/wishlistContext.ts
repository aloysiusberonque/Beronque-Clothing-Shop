import { createContext } from "react";
import { WishlistState, wishlistInitialState } from '../../reducer/wishlist';

export const WishlistContext = createContext<WishlistState>(wishlistInitialState);