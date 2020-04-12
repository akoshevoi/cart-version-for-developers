import React from "react";

import "./ContentItem.css";

function ContentItem({
  index,
  name,
  quantity,
  onDecreaseQty,
  onIncreaseQty,
  onDeleteItem
}) {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>
        <button
          className="btn-content btn-content-minus"
          onClick={onDecreaseQty}
        >
          &ndash;
        </button>
        <span className="content-qty">{quantity}</span>
        <button
          className="btn-content btn-content-plus"
          onClick={onIncreaseQty}
        >
          &#10010;
        </button>
        <button
          className="btn-content btn-content-delete"
          onClick={onDeleteItem}
        >
          &#10006;
        </button>
      </td>
    </tr>
  );
}

export default ContentItem;
