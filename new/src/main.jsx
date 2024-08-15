import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'
import Nav from './components/index/navbar.jsx'
import Banner from './components/index/banner.jsx'
import Characteristics from './components/index/characteristics.jsx'
import Pricing from './components/index/pricing.jsx'
import Testimonials from './components/index/Testimonials.jsx'
import Footer from './components/index/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    <Banner/>
    <Characteristics/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
  </StrictMode>,
)
