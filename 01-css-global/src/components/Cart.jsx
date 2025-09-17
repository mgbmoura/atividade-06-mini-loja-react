import PropTypes from 'prop-types';
import { CartItem } from './CartItem';

export function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveFromCart }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button onClick={onClose} className="cart-close-button">&times;</button>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <p className="cart-empty-message">Seu carrinho está vazio.</p>
          ) : (
            cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onUpdateQuantity={onUpdateQuantity} 
                onRemoveFromCart={onRemoveFromCart} 
              />
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>{formattedTotalPrice}</span>
            </div>
            <button className="button solid checkout-button">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};
