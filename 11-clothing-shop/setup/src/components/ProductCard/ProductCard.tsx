import { AddCartButton, AddWishlistButton, SubTitle, TextContainer, Title, Wrapper, } from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ShopContext } from '../context/shop';
import { WishlistContext } from '../context/wishlist';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const { shopItems, addToCart, removeCartItem } = useContext(ShopContext);
  const { wishlistItems, addToWishlist, removeWishlistItem } = useContext(WishlistContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const itemInCart = shopItems.find((clothingItem: { name: string; }) => clothingItem.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [shopItems, name]);

  useEffect(() => {
    const itemInWishlist = wishlistItems.find((clothingItem: { name: string; }) => clothingItem.name === name);
    if (itemInWishlist) {
      setIsInWishlist(true);
    } else {
      setIsInWishlist(false);
    }

  }, [wishlistItems, name]);

  const handleCartClick = () => {
    const clothingItem = { name, imageUrl, price };
    if (isInCart) {
      removeCartItem(clothingItem);
      setIsInCart(false);
    } else {
      addToCart(clothingItem);
      setIsInCart(true);
    }
  }

  const handleWishlistClick = () => {
    const clothingItem = { name, imageUrl, price };
    if (isInWishlist) {
      removeWishlistItem(clothingItem);
      setIsInWishlist(false);
    } else {
      addToWishlist(clothingItem);
      setIsInWishlist(true);
    }
  }

  return (
    <Wrapper background={imageUrl}>
      <AddCartButton isInCart={isInCart} onClick={handleCartClick}>
        <p>{isInCart ? "-" : "+"}</p>
      </AddCartButton>
      <AddWishlistButton isInWishlist={isInWishlist} onClick={handleWishlistClick}>
        <p>{isInWishlist ? "-" : "+"}</p>
      </AddWishlistButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};