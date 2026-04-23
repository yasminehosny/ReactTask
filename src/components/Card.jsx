import { useState } from "react";

function Card({ item }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={item.thumbnail}
        className="card-img-top"
        style={{ height: "150px", objectFit: "cover" }}
        alt={item.title}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>

        <p className="card-text">
          {showMore
            ? item.description
            : item.description.slice(0, 60)}
        </p>

        <button
          className="btn btn-primary mt-auto"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default Card;