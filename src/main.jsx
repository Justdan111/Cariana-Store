import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './context/ProductContext.jsx'
import SidebarProvider from './context/SidebarContext.jsx'
import CartProvider from './context/CartContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx';
import { WishListProvider } from './context/WishListContext.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <SidebarProvider>
 < WishListProvider>
    <CartProvider>
  <ProductProvider>
    <AuthContextProvider>
    
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    </AuthContextProvider>

  </ProductProvider>
  </CartProvider>
  </WishListProvider>
  </SidebarProvider>
  </QueryClientProvider>
)
