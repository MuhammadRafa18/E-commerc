import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../component/Home'
import { CategoryProduk } from '../component/CategoryProduk'
import { ContactUs } from '../component/ContactUs'
import { Login } from '../component/Login'
import { Register } from '../component/Register'
import { LoginWithTelp } from '../component/LoginWithTelp'
import { Vertivikasi } from '../component/Vertivikasi'
import { LoginWithEmail } from '../component/LoginWithEmail'
import { AboutCompany } from '../component/AboutCompany'
import { Order } from '../component/Order'
import { AccountAddres } from '../component/AccountAddres'
import { AccountFavorit } from '../component/AccountFavorit'
import { AccountOrder } from '../component/AccountOrder'
import { Cart } from '../component/Cart'
import { Faq } from '../component/Faq'
import { DetailFaq } from "../component/DetailFaq"
import { FormAddress } from "../component/FormAddress"
import { Setting } from "../component/Setting"
import { ProductDetail } from "../component/ProductDetail"
import { DetailOrder } from "../component/DetailOrder"
import { RouteUser } from './RouteUser'
import { RouteGuest } from './RouteGuest'
import { Search } from '../component/Search'


 
export const MainRoute = () => {
  return (
    <Routes>
        {/* Route User */}
        <Route path='/' element={<Home/>}/>
        <Route path='/Search' element={<Search/>} />
        <Route path='/AboutCompany' element={<AboutCompany/>}/>
        <Route path='/Category_Produk' element={<CategoryProduk/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Login' element={<RouteGuest><Login/></RouteGuest>}/>
        <Route path='/Register' element={<RouteGuest><Register/></RouteGuest>}/>
        <Route path='/LoginWithTelp' element={<RouteGuest><LoginWithTelp/></RouteGuest>}/>
        <Route path='/LoginWithEmail' element={<RouteGuest><LoginWithEmail/></RouteGuest>}/>
        <Route path='/Vertivikasi' element={<RouteGuest><Vertivikasi/></RouteGuest>}/>
        <Route path='/Order' element={<Order/>} />
        <Route path='/AccountAddres' element={<RouteUser><AccountAddres/></RouteUser>} />
        <Route path='/AccountFavorit' element={<RouteUser><AccountFavorit/></RouteUser>} />
        <Route path='/AccountOrder' element={<RouteUser><AccountOrder/></RouteUser>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Faq' element={<Faq/>} />
        <Route path='/DetailFaq/:faq' element={<DetailFaq/>} />
        <Route path='/FormAddress' element={<RouteUser><FormAddress/></RouteUser>} />
        <Route path='/FormAddress/:id' element={<RouteUser><FormAddress/></RouteUser>} />
        <Route path='/Setting' element={<RouteUser><Setting/></RouteUser>} />
        <Route path='/ProductDetail/:id' element={<ProductDetail/>} />
        <Route path='/DetailOrder/:id' element={<RouteUser><DetailOrder/></RouteUser>} />
     
      

    </Routes>
  )
}
