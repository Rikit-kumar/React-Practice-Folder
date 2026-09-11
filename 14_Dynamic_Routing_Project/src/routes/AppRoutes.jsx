import {Route, Routes} from 'react-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Whishlist from '../pages/Whishlist'
import ProductDetail from '../pages/ProductDetail'


const AppRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/wishlist' element={<Whishlist />} />
        <Route path='/detail/:id' element={<ProductDetail />}  />
    </Routes>
  )
}

export default AppRoutes