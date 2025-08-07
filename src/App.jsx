import './App.css'
import Navbar from "./componets/navbar/NavBar";
import ItemListContainer from './componets/item/ItemListcontainer';
import ItemDetailContainer from './componets/item/ItemDetailContainer';
import { CartProvider } from './context/CartContext';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './componets/Cart/Cart';
import Checkout from './componets/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>

    
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>      }                     />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;