import React, { useEffect, useState } from 'react'
import  axios  from 'axios'
import { Layouts } from '../Pages/Layouts';
export const GetData = (Url) => {
   const [Produk,setProduk] = useState([]);
    useEffect(() => {
      
        axios
        .get(Url)
        .then((res) => {
            setProduk(res.data.products
);
        })
        .catch((err) => {
            console.error("Data gagal di akses", err)
        })
       
      
    },[])
  return { Produk }
  return (
    <Layouts>
        

    
      
    
    </Layouts>
  )
}
