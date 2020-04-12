import React from "react";

import ContentItem from "../ContentItem/ContentItem";

const Content = ({ items, onDecreaseQty, onIncreaseQty, onDeleteItem }) => (
  <tbody>
    {items.map(({ name, quantity, id }, index) => (
      <ContentItem
        id={id}
        key={id}
        index={index + 1}
        name={name}
        quantity={quantity}
        onDecreaseQty={() => onDecreaseQty(index)}
        onIncreaseQty={() => onIncreaseQty(index)}
        onDeleteItem={() => onDeleteItem(id)}
      />
    ))}
  </tbody>
);

export default Content;
