import { useContext } from "react";

import { WishlistWrapper, Title } from "./Wishlist.styled";

import { ProductCard } from "../ProductCard";

import { WishlistContext } from "../../contexts";

export const Wishlist = () => {
  const wishlist = useContext(WishlistContext);

  return (
    <>
      <Title>{wishlist.length ? 'Your Wishlist' : 'Wishlist is Empty' }</Title>
      <WishlistWrapper>
        {/* Maps all ProductCard present in WishlistContext and supplies all the data present in WishlistContext to ProductCard*/}
        {wishlist.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </WishlistWrapper>
    </>
  );
};
