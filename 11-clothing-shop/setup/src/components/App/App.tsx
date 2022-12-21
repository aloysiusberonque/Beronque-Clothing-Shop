import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Wishlist } from "../Wishlist";
import { Products } from "../Products";
import { ShopContext } from "../context/shop";
import { WishlistContext } from "../context/wishlist";
import { useReducer } from "react";
import { addClothingItem, initialState, removeClothingItem, shopReducer, updateTotalCost } from "../reducer/shop";
import { addWishlistClothingItem, wishlistInitialState, removeWishlistClothingItem, wishlistReducer, updateWishlistTotalCost } from "../reducer/wishlist";
import { Product } from "../../models";

export const App = () => {
  const [shopState, shopDispatch] = useReducer(shopReducer, initialState);
  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, wishlistInitialState);

  const updateShopPrice = (shopItems: [] = []) => {
    let shopTotalCost = 0;
    shopItems.forEach((product: { price: number; }) => (shopTotalCost = shopTotalCost + product.price));

    shopDispatch(updateTotalCost(shopTotalCost));
  };

  const removeCartItem = (clothingItem: Product) => {
    const updatedCart = shopState.shopItems.filter(
      (currentProduct: Product) => currentProduct.name !== clothingItem.name
    );
    updateShopPrice(updatedCart);

    shopDispatch(removeClothingItem(updatedCart));
  };

  // const addToCart = (clothingItem: Product) => {
  //   const updatedCart = shopState.products.concat(clothingItem);
  //   updateShopPrice(updatedCart);

  //   shopDispatch(addClothingItem(updatedCart));
  // };

  const addToCart = (product: Product) => {
    const updatedCart = shopState.shopItems.concat(product);
    updateShopPrice(updatedCart);

    shopDispatch(addClothingItem(updatedCart));
  };


  const updateWishlistPrice = (wishlistItems: [] = []) => {
    let wishlistTotalCost = 0;
    wishlistItems.forEach((wishlistClothingItem: { price: number; }) => (wishlistTotalCost = wishlistTotalCost + wishlistClothingItem.price));

    wishlistDispatch(updateWishlistTotalCost(wishlistTotalCost));
  };

  const removeWishlistItem = (clothingItem: Product) => {
    const updatedWishlist = wishlistState.wishlistItems.filter(
      (currentProduct: Product) => currentProduct.name !== clothingItem.name
    );
    updateWishlistPrice(updatedWishlist);

    wishlistDispatch(removeWishlistClothingItem(updatedWishlist));
  };

  const addToWishlist = (clothingItem: Product) => {
    const updatedWishlist = wishlistState.wishlistItems.concat(clothingItem);
    updateWishlistPrice(updatedWishlist);

    wishlistDispatch(addWishlistClothingItem(updatedWishlist));
  };
  
  const shopValue = {
    shopTotalCost: shopState.shopTotalCost,
    shopItems: shopState.shopItems,
    addToCart,
    removeCartItem,
  }

  const wishlistValue = {
    wishlistTotalCost: wishlistState.wishlistTotalCost,
    wishlistItems: wishlistState.wishlistItems,
    addToWishlist,
    removeWishlistItem,
  }

  return (
    <WishlistContext.Provider value={wishlistValue}>
    <ShopContext.Provider value={shopValue}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
    // </WishlistContext.Provider>
  );
};