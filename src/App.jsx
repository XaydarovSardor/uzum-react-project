import React from 'react'
import Button from '@mui/material/Button';
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
