import './styles/App.css'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import HeaderTitle from './components/Header/HeaderTitle'
import CartButton from './components/Header/CartButton'
import ModalMenuButton from './components/Header/ModalMenuButton'
import { CartProvider } from './components/pages/Cart/CartContext'

function App() {

  return (
    <>
    <CartProvider>
    <header>
      <div className='d-flex container mt-2 mb-2 align-items-center justify-content-between'>
        <div>
          <HeaderTitle/>
        </div>
        <div className='d-flex align-items-center'>
          <div className='pe-3'>
            <Link to="/cart">
              <CartButton/>
            </Link>
          </div> 
          <div>
            <ModalMenuButton/>
          </div>
        </div>
      </div>
    </header>

    <main>
       {/* Здесь рендерятся дочерние маршруты */}
      <Outlet />
    </main>

    <footer>
    </footer>
    </CartProvider>
    </>
  )
}

export default App
