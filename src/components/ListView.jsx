import React from "react";
import ShopItem from "./ShopItem";

function ListView({ items }) {
  return (
    <>
      {items.map((item, idx) => (
        <ShopItem key={idx} item={item} />
      ))}
    </>
  );
}
export default ListView;
