import React from "react";

function ShopCard({ card }) {
  return (
    <div className="shop-card">
      <h2 className="shop-card__title">{card.name}</h2>
      <div className="shop-card__color">{card.color}</div>
      <img className="shop-card__img" src={card.img} alt={card.name} />
      <div className="shop-card__footer">
        <div className="shop-card__price">${card.price}</div>
        <button className="shop-card__btn">Add to card</button>
      </div>
    </div>
  );
}
export default ShopCard;
