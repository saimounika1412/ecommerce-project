import { Routes,Route } from 'react-router';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() =>{
        axios.get('http://localhost:3000/api/cart-items')
    .then((response) => {
        setCart(response.data);
    });
}, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element=
      {<CheckoutPage cart={cart}/>} />
    </Routes>
  )
}

export default App
