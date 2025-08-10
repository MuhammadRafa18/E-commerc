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

export const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutCompany' element={<AboutCompany/>}/>
        <Route path='/Category_Produk' element={<CategoryProduk/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/LoginWithTelp' element={<LoginWithTelp/>}/>
        <Route path='/LoginWithEmail' element={<LoginWithEmail/>}/>
        <Route path='/Vertivikasi' element={<Vertivikasi/>}/>
        <Route path='/Order' element={<Order/>} />
        <Route path='/AccountAddres' element={<AccountAddres/>} />
        <Route path='/AccountFavorit' element={<AccountFavorit/>} />
        <Route path='/AccountOrder' element={<AccountOrder/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Faq' element={<Faq/>} />
        <Route path='/DetailFaq' element={<DetailFaq/>} />
        <Route path='/FormAddress' element={<FormAddress/>} />
        <Route path='/Order' element={<Order/>} />
        <Route path='/Order' element={<Order/>} />
        <Route path='/Order' element={<Order/>} />
        <Route path='/Order' element={<Order/>} />

    </Routes>
  )
}
