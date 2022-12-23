import { useContext } from "react";

import { ProductsWrapper, Title } from "./Checkout.styled";

import { CheckoutCard } from "../CheckoutCard";

import { CartContext } from "../../contexts";
import { Product } from "../../models";

export const Checkout = () => {
  const cart = useContext(CartContext);

  const getTotal = (cart: Product[]) => {
    var res = 0;

    cart.map((item: Product) => {
      const { price, quantity } = item;
      res += price * quantity;
    });

    return res;
  };

  return (
    <>
      <Title>
        {/* To check if cart is not empty */}
        {cart.length
          ? `Your cart total is ${getTotal(cart)}.00$` 
          : "Checkout is Empty"}
      </Title>
      <ProductsWrapper>
        {cart.map((data, index) => (
          <CheckoutCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
