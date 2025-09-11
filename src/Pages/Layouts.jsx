import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const Layouts = ({children}) => {
  return (
    <div>
    <Navbar/>
    <main className='w-full space-y-24 flex-col items-center  min-h-screen  '>{children}</main>
    <Footer/>
    </div>
  )
}
