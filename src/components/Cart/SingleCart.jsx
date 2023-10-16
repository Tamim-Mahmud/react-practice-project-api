import React from "react";

const SingleCart = ({image,description,features,name,links,id}) => {
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full h-52 "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
