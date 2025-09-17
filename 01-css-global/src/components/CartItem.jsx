export function CartItem({ item, onUpdateQuantity, onRemoveFromCart }) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(item.price * item.quantity);

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.title}</h4>
        <div className="cart-item-quantity">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
      </div>
      <div className="cart-item-subtotal">
        <span>{formattedPrice}</span>
        <button onClick={() => onRemoveFromCart(item.id)} className="cart-item-remove">
          Remover
        </button>
      </div>
    </div>
  );
}
