import React from "react";

const SingleData = (props) => {
  const { id, name, description, image, features, published_in } = props;
  const setUniqId = props.setUniqId;
  return (
    <div className="card w-full bg-base-100 border-2 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div>
          <h1 className="text-warning">Features : </h1>
          {features.map((item) => (
            <li>{item}</li>
          ))}
        </div>
        <p>{published_in}</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setUniqId(id)}
            htmlFor="my-modal-5"
            className="btn btn-accent"
          >
            <span>Go</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
