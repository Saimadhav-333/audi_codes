import React from "react";

const Card = ({ cID,cName, desc, image, price }) => {
  return (
    <>
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={cID}
      />
      <div className="card-body">
        {/* <h5 className="card-title">{cID}</h5> */}
        <h1 className="card-title">{cName}</h1>
        <p className="card-text">{desc}</p>
        <h1> {`INR `}{price}</h1>
        {/* <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Learn More
        </a> */}
      </div>
    </div>
    </>
  );
};

export default Card;
