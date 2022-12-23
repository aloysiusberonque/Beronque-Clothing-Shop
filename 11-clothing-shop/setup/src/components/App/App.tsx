import { IconContext } from "react-icons";
import { Link, Route, Routes } from "react-router-dom";
import { useReducer } from "react";

import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Checkout } from "../Checkout";
import { Products } from "../Products";
import { Wishlist } from "../Wishlist";

import {
  CartContext,
  CartDispatchContext,
  WishlistContext,
  WishlistDispatchContext,
  initialCart,
  initialWishlist,
} from "../../contexts";
import { cartReducer, wishlistReducer } from "../../reducers";

export const App = () => {
  // cart state: for the global state, dispatch: for the changing of the cart state, cartReducer: the reducer in which the functionalities of the actions are executed, initialCart: the default state
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // wishlist state: for the global state, dispatchWishlist: for the changing of the wishlist state, wishlistReducer: the reducer in which the functionalities of the actions are executed, initialWishlist: the default state
  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, initialWishlist);
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        <WishlistContext.Provider value={wishlist}>
          <WishlistDispatchContext.Provider value={dispatchWishlist}>
            <IconContext.Provider value={{ size: '15' }}>
              <Wrapper>
                <TitleWrapper>
                  <h1>Clothing Shop Starter Project</h1>
                </TitleWrapper>
                <LinksWrapper>
                  <Link to="/">Home</Link>
                  <Link to="/cart">Cart</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <Link to="/checkout">Checkout</Link>
                </LinksWrapper>
                <Routes>
                  <Route path="/" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Wrapper>
            </IconContext.Provider>
          </WishlistDispatchContext.Provider>
        </WishlistContext.Provider>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
};
