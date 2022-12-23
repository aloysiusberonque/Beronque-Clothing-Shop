import { useContext } from "react";
import { FaGift } from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";

import {
  AddButton,
  Icon,
  SubTitle,
  TextContainer,
  Title,
  WishlistButton,
  Wrapper,
} from "./ProductCard.styled";

import { 
  add, 
  addWishlist, 
  remove, 
  removeWishlist,
} from "../../reducers";
import {
  CartContext,
  CartDispatchContext,
  WishlistContext,
  WishlistDispatchContext,
} from "../../contexts";
import { Product } from "../../models";

export const ProductCard = (item: Product) => {
  const cart = useContext(CartContext);
  const wishlist = useContext(WishlistContext);
  const cartDispatch = useContext(CartDispatchContext);
  const wishlistDispatch = useContext(WishlistDispatchContext);

  const { 
    id, 
    imageUrl, 
    name, 
    price,
  } = item;

  // Checks if the specific ProductCard has any duplicates inside the CartContext
  // Returns true if there is a duplicate
  function checkCart(id: number) {
    return cart.some((item: Product) => item.id === id);
  }

  // Checks if the specific ProductCard has any duplicates inside the WishlistContext
  // Returns true if there is a duplicate
  function checkWishlist(id: number) {
    return wishlist.some((item: Product) => item.id === id);
  }

  return (
    <Wrapper background={imageUrl}>

      <WishlistButton
        isInCart={checkWishlist(id)}
        onClick={() => {
          checkWishlist(id)
          // If the Product is already in the wishlist, you can remove it from the wishlist
            ? wishlistDispatch(removeWishlist({ ...item }))
          // If the Product is not yet in the wishlist, you can add it to the wishlist
            : wishlistDispatch(addWishlist({ ...item }));
        }}
      >
        <Icon>
          <FaGift />
        </Icon>
      </WishlistButton>
      
      <AddButton
        isInCart={checkCart(id)}
        onClick={() => {
          checkCart(id)
          // If the Product is already in the cart, you can remove it from the cart
            ? cartDispatch(remove({ ...item }))
          // If the Product is not yet in the cart, you can add it to the cart
            : cartDispatch(add({ ...item }));
        }}
      >
        <p>{checkCart(id) ? <MdOutlineRemoveShoppingCart /> : <MdOutlineShoppingCart />}</p>
      </AddButton>

      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>

    </Wrapper>
  );
};
