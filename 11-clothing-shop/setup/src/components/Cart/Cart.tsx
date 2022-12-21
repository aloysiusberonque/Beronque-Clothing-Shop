import { useContext } from "react";
import { ShopContext, } from "../context/shop";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Cart.styled";

export const Cart = () => {
  const { shopItems, shopTotalCost } = useContext(ShopContext);
  return (
    <>
      <Title>Your cart totalCost is {shopTotalCost}.00$</Title>
      <ProductsWrapper>
        {shopItems.map((clothingItem: Product, index) => (
          <ProductCard {...clothingItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};