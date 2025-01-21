import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  padding: 1rem;
  height: 600px;
  border: none;
  border-radius: 8px;
  text-align: center;

  /* Flexbox для структурирования содержимого */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Содержимое сверху */
  align-items: center;
`;

const ProductImage = styled.img`
  width: 90%;
  height: auto;
  margin-bottom: 1rem; /* Отступ между изображением и текстом */
`;

const ProductDetails = styled.div`
  margin-top: auto; /* Заставляем блок с текстом "прилипнуть" к нижней части карточки */
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0.5rem; /* Отступ между названием и ценой */
  color:black;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

export default function ClothesItemCard({ id, name, image, price }) {
  
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductDetails>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductDetails>
    </Card>
  </Link>
    
  );
}