import React from "react";

function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <img className="shop-item__img" src={item.img} alt={item.name} />
      <h2 className="shop-item__title">{item.name}</h2>
      <div className="shop-item__color">{item.color}</div>
      <div className="shop-item__price">${item.price}</div>
      <button className="shop-item__btn">Add to card</button>
    </div>
  );
}
export default ShopItem;
