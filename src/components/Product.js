const Product = () => {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>Product</h3>
          <p className="product-price">$232</p>
          <p>product details</p>
        </div>
        <p className="product-actions">
          <button>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;
