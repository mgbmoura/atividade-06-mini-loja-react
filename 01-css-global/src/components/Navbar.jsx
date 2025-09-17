import PropTypes from 'prop-types';

export function Navbar({ cartItems = [] }) {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mini Loja +praTi</div>
      
      <div className="navbar-actions">
        <div className="cart-badge">
          <span>🛒</span>
          {cartItemCount > 0 && <div className="cart-count">{cartItemCount}</div>}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
};
