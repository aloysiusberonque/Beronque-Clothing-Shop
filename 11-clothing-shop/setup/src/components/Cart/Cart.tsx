import { useContext } from "react";

import { ProductsWrapper, Title } from "./Cart.styled";

import { CartProductCard } from "../CartProductCard";

import { CartContext } from "../../contexts";

export const Cart = () => {
  const cart = useContext(CartContext);

  return (
    <>
      <Title>{cart.length ? 'Your Cart' : 'Cart is Empty'}</Title>
      <ProductsWrapper>
        {/* Maps all CartProductCard present in CartContext and supplies all the data present in CartContext to CartProductCard*/}
        {cart.map((data, index) => (
          <CartProductCard
            key={index}
            {...data}
          />
        ))}
      </ProductsWrapper>
    </>
  );
};
