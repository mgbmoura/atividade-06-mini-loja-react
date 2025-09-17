export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-logo">🎮 Mini Loja +praTi</h3>
          <p>
            Sua loja de colecionáveis e cultura geek. Encontre os melhores produtos, HQs, action figures e muito mais!
          </p>
        </div>
        <div className="footer-section links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Promoções</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Siga-nos</h4>
          <div className="social-icons">
            <a href="#">FB</a> 
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
        <div className="footer-section payments">
          <h4>Formas de Pagamento</h4>
          <div className="payment-icons">
            <span>💳</span>
            <span>📄</span>
            <span>📱</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Mini Loja +praTi | Todos os direitos reservados.
      </div>
    </footer>
  );
}
