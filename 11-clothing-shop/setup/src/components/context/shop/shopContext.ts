import { createContext } from "react";
import { ShopState, initialState } from '../../reducer/shop';

export const ShopContext = createContext<ShopState>(initialState);