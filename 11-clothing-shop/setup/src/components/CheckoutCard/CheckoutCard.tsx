import { Product } from "../../models";

import {
  Box,
  Label,
  ListItem,
  Title
} from "./CheckoutCard.styled";

export const CheckoutCard = (item: Product) => {

  const {
    imageUrl,
    name,
    price,
    quantity,
  } = item;

  return (
    <>
      <ListItem>
        <Label>
          <img src={imageUrl} />
        </Label>
        <Box><Title>Product:</Title> {name}</Box>
        <Box><Title>Price:</Title> {price}.00$</Box>
        <Box><Title>Quantity:</Title> {quantity}</Box>
        <Box><Title>Total:</Title> {price * quantity}.00$</Box>
      </ListItem>

    </>
  );
};
