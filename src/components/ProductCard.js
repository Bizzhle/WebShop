import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ value }) {
  const sign = "€";

  return (
    <div className="product-card">
      <Link to={`/posts/${value.id}`}>
        <div className="product-card_container">
          <div className="product-card_image">
            <img src={value.image} alt="" />
          </div>
          <div className="product-card_info">
            <h3 className="product-card_info_name">{value.title}</h3>

            <p className="product-card_info_price">
              {sign}
              {value.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
