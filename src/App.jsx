import { Suspense, useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import { image1, image12, bodyImage} from "./assets/index"
import Layout from './Layout/MainLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Cardapio from './pages/cardapio/Cardapio'


function App() {

  return (
    <Suspense fallback={<div>loading...</div>}>

      <Routes>
        <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/cardapio' element={<Cardapio/>}/>
        </Route>
      </Routes>

    </Suspense>
  )
}

export default App
