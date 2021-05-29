import React from "react";

import "./collection-items.styles.scss";

const CollectionItems = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    {console.log(imageUrl)}
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name} </span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItems;
