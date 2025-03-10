import { Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './pages/Home'
import AddBook from "./pages/AddBook";

const App = () => {
  return (
    <div className='min-h-screen'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<AddBook />} />
            </Routes>
    </div>
  )
}

export default App
