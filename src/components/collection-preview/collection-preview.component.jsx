import React from "react";
import CollectionItems from "../collection-items/collection-items.component";
import "./collection-preview.styles.scss";

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
