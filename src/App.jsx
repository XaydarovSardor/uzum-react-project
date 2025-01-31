import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import { Category } from './components/category';
import { Categories } from './components/categories';
import { Product } from './components/product';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Categories/>
      <Routes>
        <Route path='categories/:category' element={<Category/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
