import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItemCard from './CartItemCard';
import styled from 'styled-components';
const ClearCartButton = styled.button`
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width:10%;
    padding-top: 8px;
    @media (max-width: 1200px) {
        width: 70%;
    }
`
export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  

  return (
    <>
        <div className='container pb-5'>
            <div className='pb-5'>
                <h1 className='pb-5'>In cart: {cart.length}</h1>
            </div>
            <div className='row pt-5'>
                <div className="col-12">
                    {cart.map((product) => (
                    <CartItemCard product={product} key={product.id}  removeFromCart={removeFromCart} />
                    ))}
                </div> 
            </div>
            {cart.length > 0 && <ClearCartButton onClick={() => clearCart()}>Clear cart</ClearCartButton>}
        </div>
    </>
  );
}