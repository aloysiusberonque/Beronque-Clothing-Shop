import { ProductsWrapper, Title } from './Products.styled';

import { ProductCard } from '../ProductCard';

import { shopData } from '../../data';

export const Products = () => {
  return (
    <>
      <Title>Welcome to the Clothing Shop</Title>
      <ProductsWrapper>
        {/* Maps all the shopData and uses the ProductCard as its format*/}
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
