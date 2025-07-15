import './App.css'
import Navbar from "./componets/navbar/NavBar";
import ItemListContainer from './componets/item/ItemListcontainer';
import ItemDetailContainer from './componets/item/ItemDetailContainer';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;