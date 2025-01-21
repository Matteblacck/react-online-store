import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 1rem;
  height: 200px; /* Уменьшаем высоту карточки для корзины */
  border: none;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 7rem; /* Отступ между карточками */
`;

const ProductImage = styled.img`
  width: 300px; /* Размер изображения в корзине */
  height: auto;
  margin-right: 1rem; /* Отступ между изображением и текстом */
  @media (max-width: 768px){
    width:250px;
  }
  @media (max-width: 500px){
    width:180px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: black;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: black;
`;

// const RemoveButton = styled.button`
//   margin-top: 10px;
//   padding: 5px 10px;
//   background-color: #f8f8f8;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 14px;
  
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;
const RemoveButton = styled.button`
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding-top: 8px;
    cursor: pointer;
    
`
export default function CartItemCard({ product, removeFromCart }) {
  const { id, name, image, price, size } = product;

  return (
    <Card>
    <ProductImage src={image} alt={name} />
    <div className='d-flex flex-column align-items-start'>
        <div>
            <ProductDetails>
            <div>
                <ProductName>{name}</ProductName>
                <p>Size: {size}</p>
            </div>
            <ProductPrice>${price}</ProductPrice>
            </ProductDetails>
        </div>
        <div>
            <RemoveButton onClick={() => removeFromCart(id)}>Remove</RemoveButton>
        </div>   
    </div>
    
      
    </Card>
  );
}