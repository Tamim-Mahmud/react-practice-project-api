import React, { useEffect, useState } from "react";
import SingleCart from "./SingleCart";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const Cart = () => {
  const [data, setData] = useState([]);
  const [showAll,setShowAll]=useState(false);
  const [uniqueId,setUniqueId]=useState(null);

  const [singleData, setSingleData]=useState({});

  console.log(uniqueId);

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

  useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`).then(res =>res.json()).then(data => setSingleData(data.data))
  }, [uniqueId])
//  console.log(data);
  return (
  <>
    <div className="flex flex-wrap items-center justify-center gap-6 my-6">
    {
        data.slice(0,showAll? 12:6).map((singleData,index) => {
            return <SingleCart key={index} setUniqueId={setUniqueId} singleData={singleData}  />
        })
    }
    </div>
    {
      (!showAll) && <p className="mb-5" onClick={handleShowAll}>
      <Button>Show All</Button>
    </p>
    }
    <Modal singleData={singleData} />
    
  </>
  );
};

export default Cart;
