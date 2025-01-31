import "./footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Biz haqimizda</h4>
          <ul>
            <li><a href="#">Topshirish punktlari</a></li>
            <li><a href="#">Vakansiyalar</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Foydalanuvchilarga</h4>
          <ul>
            <li><a href="#">Biz bilan bog'lanish</a></li>
            <li><a href="#">Savol-Javob</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tadbirkorlarga</h4>
          <ul>
            <li><a href="#">Uzumda soting</a></li>
            <li><a href="#">Sotuvchi kabinetiga kirish</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ilovani yuklab olish</h4>
          <div className="app-links">
            <a href="#"><img src="appstore.png" alt="AppStore" /></a>
            <a href="#"><img src="googleplay.png" alt="Google Play" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Uzum ijtimoiy tarmoqlarda</h4>
          <div className="social-icons">
            <a href="#"><img src="instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="telegram.png" alt="Telegram" /></a>
            <a href="#"><img src="youtube.png" alt="YouTube" /></a>
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  )
}

export default Footer