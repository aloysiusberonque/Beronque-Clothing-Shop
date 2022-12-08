import { AddButton, SubTitle,TextContainer,Title,Wrapper,} from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ShopContext} from '../context/shop';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {items, addToCart, removeItem} = useContext(ShopContext);
  const [isInCart, setIsInCart] = useState(false);
  
  useEffect(() => {
    const itemInCart = items.find((clothingItem: { name: string; }) => clothingItem.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [items, name]);
  
  const handleClick = () => {
    const clothingItem = {name, imageUrl, price};
    if(isInCart){
      removeItem(clothingItem);
      setIsInCart(false);
    } else{
      addToCart(clothingItem);
      setIsInCart(true);
    }
  }
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};