import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Category } from './components/category';
import { Electronics } from "./categories/electronics.jsx"
import { Jewelery } from './categories/jewelery.jsx';
import { Mens } from './categories/mens.jsx';
import { Womens } from './categories/womens.jsx';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Category />
      <Routes>
        <Route path='/categories/electronics' element={<Electronics />}/>
        <Route path='/categories/jewelery' element={<Jewelery />}/>
        <Route path="men's clothing" element={<Mens/>}/>
        <Route path="women's clothing" element={<Womens/>}/>
      </Routes>
      <Home />
      <Footer />
    </div>
  )
}

export default App
