import { useContext } from "react";
import { WishlistContext, } from "../context/wishlist";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { wishlistItems, wishlistTotalCost } = useContext(WishlistContext);
  return (
    <>
      <Title>Your cart totalCost is {wishlistTotalCost}.00$</Title>
      <ProductsWrapper>
        {wishlistItems.map((clothingItem: Product, index) => (
          <ProductCard {...clothingItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};