import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './components/pages/HomePage.jsx'
import CartPage from './components/pages/Cart/CartPage.jsx'
import WearPage from './components/pages/WearPage.jsx'
import WearOutwearPage from './components/pages/WearOutwearPage.jsx'
import WearShoesPage from './components/pages/WearShooesPage.jsx'
import ProductDetailsPage from './components/pages/ProductDetailsPage.jsx'

const router = createBrowserRouter([
  {
    path: "/", // Корневой маршрут
    element: <App />, // Здесь рендерится App.jsx
    children: [
      { path: "/", element: <WearPage/>},
      { path: "/cart", element:<CartPage/>},
      { path: "/outwear", element: <WearOutwearPage/>},
      { path: "/shoes", element: <WearShoesPage/>},
      { path: "/:id", element: <ProductDetailsPage /> },
      { path: "/outwear:id", element: <WearOutwearPage/>},
      { path: "/shoes:id", element: <WearShoesPage/>},
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
