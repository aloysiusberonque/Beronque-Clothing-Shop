import { useContext } from "react";
import { ShopContext, } from "../context/shop";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Cart.styled";

export const Cart = () => {
  const { items, totalCost } = useContext(ShopContext);
  return (
    <>
      <Title>Your cart totalCost is {totalCost}.00$</Title>
      <ProductsWrapper>
        {items.map((clothingItem: Product, index) => (
          <ProductCard {...clothingItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};