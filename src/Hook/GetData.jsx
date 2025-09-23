import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layouts } from "../Pages/Layouts";
export const GetData = (Url) => {
  const [Data, setData] = useState([]);
  const [loaing, setloading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setloading(true);
    const FetchData = async () => {
      if (Url) {
        try {
        const res =  await axios.get(Url,{
            signal: controller.signal
          });
          setData(res.data)
          setloading(false);
        } catch (err) {
          setloading(false);
          console.error("Get Data gagal :", err.message);
        }
      }
    };
    FetchData();
    return () => {
       controller.abort();
    }
  }, [Url]);
  return { Data };
  return <Layouts></Layouts>;
};
