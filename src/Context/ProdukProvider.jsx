import React, { createContext, useEffect, useState } from "react";

export const ProdukContext = createContext();

export const ProdukProvider = ({ children }) => {
  const [ListProduk, setListProduk] = useState([]);
  const [ListUser, setListUser] = useState([]);
  const [Produk, setProduk] = useState({});
  const [User,setUser] = useState({});
  const [Address,setAddress] = useState ([]);
  const [Order,setOrder] = useState([])
  const [Cart, setCart] = useState([]);
  

  return (
  <ProdukContext.Provider value={{Cart, setCart,ListProduk, setListProduk , Produk , setProduk , User, setUser, ListUser , setListUser,Address,setAddress,Order,setOrder}}>
    {children}
  </ProdukContext.Provider>
  )
};
