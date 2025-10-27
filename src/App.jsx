// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Services from './pages/services'
import Networks from './pages/networks'
import Security from './pages/security'
import Products from './pages/products'
import Contact from './pages/contact'
import Realisation from './pages/realisation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="networks" element={<Networks />} />
        <Route path="security" element={<Security />} />
        <Route path="products" element={<Products />} />
        <Route path="realisation" element={<Realisation />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Add more routes as needed */}
      </Route>
    </Routes>
  )
}

export default App
