import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);
  console.log(data);
  return (
  <>
    <div className="flex flex-wrap items-center justify-center gap-6 my-6">
    {
        data.map((singleData,index) => {
            return <SingleCart key={index} {...singleData}  />
        })
    }
    </div>
  </>
  );
};

export default Cart;
