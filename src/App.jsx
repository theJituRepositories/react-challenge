import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import Feedback from './components/feedback/feedback'
import Header from './components/header/header'
import About from './components/about/about'
import TickTacToe from './practise'
import FormUpdate from './form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return ( 
    <>
      <BrowserRouter>

     
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about/:id' element={<About />} />
        </Routes>
        <Feedback />
        <Footer />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </BrowserRouter>
      </>
  )
  
}
export default App
