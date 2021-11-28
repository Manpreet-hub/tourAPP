import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <h3 className="tour-price">${price}</h3>
          <p className="tour-description">
            {readMore ? info : `${info.substring(0, 200)}`}
            <button
              className="small-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "show less" : "read more"}
            </button>
          </p>
          <button className="btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
