import PropTypes from 'prop-types';

export function ProductCard({ product, onAddToCart }) {
  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      {product.rating && (
        <p className="product-rating">
          Avaliação: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      )}
      <p className="product-price">R$ {product.price}</p>
      <button onClick={handleAddToCart} className="button add-to-cart-button">
        Adicionar ao Carrinho
      </button>
      <button className="button buy-button">Comprar</button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
