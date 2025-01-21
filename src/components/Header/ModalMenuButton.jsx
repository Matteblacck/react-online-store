import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: 40vh;
  height: 100vh;
  background: rgba(255, 255, 255, 0.3);  /* Начальный прозрачный белый фон */
  display: flex;
  justify-content: center;
  align-items: center;  /* Центрирование контента по вертикали */
  z-index: 1000;
  opacity: 0;  /* Начальная прозрачность */
  animation: fadeIn 0.5s forwards;  /* Анимация плавного появления */
  
  /* Когда модальное окно открыто, фоновая прозрачность увеличивается до 0.9 */
  &.open {
    background: rgba(255, 255, 255, 1);
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;  /* Начальная прозрачность */
    }
    100% {
      opacity: 1;  /* Окончательная прозрачность */
    }
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  padding: 2rem;
  justify-content: center;
  text-align: center;
`;

const MenuItemButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 25px;
  margin: 10px 0; /* Отступ между кнопками */
  position: relative; /* Для работы с псевдоэлементом */
  color: black;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0; /* Полоска внизу текста */
    left: 50%; /* Начинаем из центра */
    width: 0;
    height: 3px; /* Толщина полоски */
    background-color: black;
    transform: translateX(-50%); /* Центрируем полоску по горизонтали */
    transition: all 0.3s ease-out; /* Плавность проявления */
  }

  &:hover::after {
    width: 100%; /* Расширение до полной ширины кнопки */
    transform: translateX(-50%); /* Остаёмся центрированными */
  }
`;

const TitleContainer = styled.div`
  width: 100%;

  text-align: center;
  margin-bottom: 8rem;  /* Отступ снизу для разделения */
`;

export default function ModalMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
        style={{ background: 'transparent', border: 'none', padding: '10px' }}
        onClick={toggleModal}
      >
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <ModalOverlay className={isOpen ? 'open' : ''}>
          <ModalContainer>
            <TitleContainer>
              <h1>MATTEBLACK</h1>
            </TitleContainer>
            <Link to="/">
              <MenuItemButton
              onClick={toggleModal}
              >ALL CLOTHES</MenuItemButton>
            </Link>
            <Link to="/outwear">
              <MenuItemButton 
              onClick={toggleModal}
              >OUTWEAR</MenuItemButton>
            </Link>
            <Link to="/shoes">
              <MenuItemButton
              onClick={toggleModal}
              >SHOES</MenuItemButton>
            </Link>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}