/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
const Service = ({ service }) => {
  const { price, title: name, img: photo } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title text-3xl">{name}</h2>
        <div className="card-actions justify-between items-center">
          <p className="text-primary text-xl font-medium">Price: ${price}</p>
          <button className="btn btn-ghost text-xl font-bold">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
