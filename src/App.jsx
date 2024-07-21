import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import  Navbar  from './components/navbar'
import {Routes,Route} from  'react-router-dom'
import  Home  from './components/Home'
import ProductList  from './components/productlist'

import ProductDetaile from './components/productdetail'

  


const App =() => {
  
  const handleClick=(item)=>{
  console.log(item)
  }

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='product' element={<ProductList/>}/>
      <Route path='product/:productId' element={<ProductDetaile handleClick={handleClick}/>}/>
      {/* <Route path='Addcart' element={<Addcart/>}/> */}
     
      

     </Routes>
    
    
     
    </>
    
  )
}

export default App
