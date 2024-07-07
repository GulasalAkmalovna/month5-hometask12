import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home.jsx'
import Cart from './routes/cart/Cart.jsx'
import Nav from './components/Nav.jsx'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/> 
      </Routes>
    </>
  )
}

export default App
