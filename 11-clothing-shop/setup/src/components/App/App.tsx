import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Products } from "../Products";
import { ShopContext } from "../context/shop";
import { useReducer } from "react";
import { addClothingItem, initialState, removeClothingItem, shopReducer, updateTotalCost } from "../reducer/shop";
import { Product } from "../../models";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const updatePrice = (items: [] = []) => {
    let totalCost = 0;
    items.forEach((clothingItem: { price: number; }) => (totalCost = totalCost + clothingItem.price));

    dispatch(updateTotalCost(totalCost));
  };

  const removeItem = (clothingItem: Product) => {
    const updatedCart = state.items.filter(
      (currentProduct: Product) => currentProduct.name !== clothingItem.name
    );
    updatePrice(updatedCart);

    dispatch(removeClothingItem(updatedCart));
  };

  const addToCart = (clothingItem: Product) => {
    const updatedCart = state.items.concat(clothingItem);
    updatePrice(updatedCart);

    dispatch(addClothingItem(updatedCart));
  };
  
  const value = {
    totalCost: state.totalCost,
    items: state.items,
    addToCart,
    removeItem
  }
  return (
    <ShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
  );
};