import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useContext} from "react";

import { CartContext, CartDispatchContext } from "../../contexts";
import { Product } from "../../models";
import { add, remove, update } from "../../reducers";

import {
  AddButton,
  MinusButton,
  PlusButton,
  QuantityButtonContainer,
  QuantityContainer,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from "./CartProductCard.styled";

export const CartProductCard = (item: Product) => {
  const cart = useContext(CartContext);
  const cartDispatch = useContext(CartDispatchContext);

  const { id, name, imageUrl, price, quantity } = item;

  // Checks if that specific item.id that has been supplied to CartProductCard already existed in the entire CartContext
  function checkCart(id: number) {
    return cart.some((item: Product) => item.id === id);
  }

  // A function that adds a quantity of a specific product card
  const addQuantity = () => {
    const tempQuantity = item.quantity + 1;
    const tempItem = {
      ...item,
      quantity: tempQuantity,
    };

    // Using the cartDispatch function and the update type and function that receives the object tempItem to update the quantity of that specific cart product card
    cartDispatch(update(tempItem));
  };

  // A function that removes a quantity of a specific product card
  const subtractQuantity = () => {
    // To avoid 0 quantity
    if (quantity === 1) return;

    const tempQuantity = quantity - 1;
    const tempItem = {
      ...item,
      quantity: tempQuantity,
    };

    // Using the cartDispatch function and the update type and function that receives the object tempItem to update the quantity of that specific cart product card
    cartDispatch(update(tempItem));
  };

  return (
    <Wrapper background={imageUrl}>
      <AddButton
        isInCart={checkCart(id)}
        onClick={() => {
          checkCart(id)
            // Supplying the data to the remove function
            ? cartDispatch(remove({ ...item }))
            // Supplying the data to the add function
            : cartDispatch(add({ ...item }));
        }}
      >
        <p>{<MdOutlineRemoveShoppingCart />}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <QuantityContainer>
          <SubTitle>Quantity Ordered: {quantity}</SubTitle>
          <QuantityButtonContainer>
            <MinusButton isInCart={checkCart(id)} onClick={subtractQuantity}>
              <p>–</p>
            </MinusButton>
            <PlusButton isInCart={checkCart(id)} onClick={addQuantity}>
              <p>+</p>
            </PlusButton>
          </QuantityButtonContainer>
        </QuantityContainer>
        <SubTitle>Total Price: {price * quantity}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
