import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
import products from "./../data/products";

function Store() {
  const cards = products;
  const items = products;

  // viewCard true - карточки, false - список
  const [viewCard, setViewCard] = useState(true);
  const [icon, setIcon] = useState("view_list");

  const viewHandler = () => {
    setViewCard((prev) => !prev);
    setIcon((prev) => (prev === "view_module" ? "view_list" : "view_module"));
  };

  return (
    <div>
      <IconSwitch icon={icon} onSwitch={viewHandler} />
      {viewCard ? <CardsView cards={cards} /> : <ListView items={items} />}
    </div>
  );
}

export default Store;
