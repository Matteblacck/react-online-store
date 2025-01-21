import { useParams } from "react-router-dom";
import clotheData from "../ClothesItem/clotheData";
import styled from "styled-components";
import { useState, useContext } from "react";
import { CartContext } from "./Cart/CartContext";

const ProductImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 1200px) {
    width: 60%; /* Изменяем ширину на 90% для экранов меньше 1200px */
    margin: 0 auto; /* Центрируем изображение */
  }
  
`;

const ProductName = styled.h3`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: black;
`;
const ProductPrice = styled.p`
  font-size: 20px;
  font-weight:500;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: start;
`;
const Thumbnail = styled.img`
  width: 60px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 8px;
  
  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out ;
    
  }

  &.active {
    transform:scale(1);
    transition: 0.2s ease-in-out ;
  }
`;

const ProductDetails = styled.ul`
  margin-top: 4rem;
  font-size: 13px;
  color:black;
  font-weight: 400;
  text-align: start;
  text-transform: uppercase;
`;
const AddToCartButton = styled.button`
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width:20%;
    padding-top: 8px;
    @media (max-width: 1200px) {
        width: 70%;
    }
`
const SelectSizeButton = styled.select`
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 20%;
  padding-top: 8px;
  text-align: center; /* Центрируем текст внутри выпадающего списка */
  @media (max-width: 1200px) {
        width: 20%;
}
  
  /* Для лучшего центрирования в некоторых браузерах */
  option {
    text-align: center;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex; /* Включаем flexbox для использования align-items и justify-content */
  flex-direction: column; /* Элементы будут располагаться вертикально */
  
  @media (max-width: 1200px) {
    align-items: center; /* Центрируем элементы по горизонтали */
    justify-content: center; /* Центрируем элементы по вертикали */
  }
`;



export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = clotheData.find((item) => item.id === id);

  // Если продукт не найден
  if (!product) {
    return (
      <div className="container d-flex justify-content-center">
        <h1>Product not found!</h1>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [size, setSize] = useState('S')

  // Обработчик клика по миниатюре
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const {addToCart} = useContext(CartContext);



  return (
    <div className="container-custom d-flex row">
      <div className="col-12 col-xl-6">
        <ProductImage src={selectedImage} alt={product.name} />
      </div>
      <div className="col-12 col-xl-6 d-flex flex-column pt-5">
        <DescriptionWrapper>
            <ProductName>{product.name}</ProductName>
            {/* Контейнер для миниатюр */}
            <ThumbnailWrapper>
            {product.images.map((image, index) => (
                <Thumbnail
                key={index}
                src={image}
                className={selectedImage === image ? "active" : ""}
                onClick={() => handleThumbnailClick(image)}
                />
            ))}
            </ThumbnailWrapper>
            <div>
                <div className="pb-xl-5 pb-1">
                    <ProductDetails>
                        {product.description.map((ficha, index) => {
                            return <li
                            key={index}
                            >{ficha}</li>
                        })}
                    </ProductDetails>
                </div>
                <div className="pt-xl-5 pt-3 pb-4">
                    <ProductPrice>${product.price}</ProductPrice>
                    <div className="d-flex gap-2 flex-column flex-xl-row justify-content-start justify-content-xl-start">
                    <SelectSizeButton
                      className="w-100 w-md-auto"
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {product.type === "shoes" ? (
                        <>
                          <option value="38">38</option>
                          <option value="39">39</option>
                          <option value="40">40</option>
                          <option value="41">41</option>
                          <option value="42">42</option>
                          <option value="43">43</option>
                          <option value="44">44</option>
                        </>
                      ) : (
                        <>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </>
                      )}
                    </SelectSizeButton>
                        <AddToCartButton className="w-100 w-md-auto" onClick={() => addToCart(product, size)}>Add to cart</AddToCartButton>
                    </div>
                </div>
            </div>
        </DescriptionWrapper>
      </div>
    </div>
  );
}