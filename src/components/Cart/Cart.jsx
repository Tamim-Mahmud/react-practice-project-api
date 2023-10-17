import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import Button from "../Button/Button";

const Cart = () => {
  const [data, setData] = useState([]);
  const [showAll,setShowAll]=useState(false);

  const handleShowAll = () => setShowAll(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `aiData.json`
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);
//  console.log(data);
  return (
  <>
    <div className="flex flex-wrap items-center justify-center gap-6 my-6">
    {
        data.slice(0,showAll? 12:6).map((singleData,index) => {
            return <SingleCart key={index} {...singleData}  />
        })
    }
    </div>
    {
      (!showAll) && <p className="mb-5" onClick={handleShowAll}>
      <Button>Show All</Button>
    </p>
    }
    
  </>
  );
};

export default Cart;
