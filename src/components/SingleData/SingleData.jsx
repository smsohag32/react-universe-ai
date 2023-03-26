import React from "react";

const SingleData = ({
  id,
  name,
  description,
  image,
  features,
  published_in,
}) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <label htmlFor="my-modal-5" className="btn btn-accent">
            <span>Go</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
