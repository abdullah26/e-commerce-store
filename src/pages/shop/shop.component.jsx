import React from "react";
import shopData from "../../pages/shop/new.shop.data";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherSectionProps }) => (
          <CollectionPreview key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
