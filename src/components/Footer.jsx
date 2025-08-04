import './Footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-part">
          <section className="contact-and-menu">
            <section className="contact">
              <h2>Teknolojik Yemekler</h2>
              <ul>
                <li>
                  <img src="/images/iteration-2-images/footer/icons/icon-1.png" />
                  <p>
                    341 Londonderry Road, <br />
                    Istanbul Türkiye
                  </p>
                </li>
                <li>
                  <img src="/images/iteration-2-images/footer/icons/icon-2.png" />
                  <p>aciktim@teknolojikyemekler.com</p>
                </li>
                <li>
                  <img src="/images/iteration-2-images/footer/icons/icon-3.png" />
                  <p>+90 216 123 45 67</p>
                </li>
              </ul>
            </section>

            <div className="hot-menu">
              <p>Hot Menu</p>
              <ul>
                <li>Terminal Pizza</li>
                <li>5 Kişilik Hackathlon Pizza</li>
                <li>useEffect Tavuklu Pizza</li>
                <li>Beyaz Console Frosty</li>
                <li>Testler Geçti Mutlu Burger</li>
                <li>Position Absolute Acı Burger</li>
              </ul>
            </div>

            <section className="instagram-img">
              <p>Instagram</p>
              <ul>
                <li><img src="/images/iteration-2-images/footer/insta/li-0.png" /></li>
                <li><img src="/images/iteration-2-images/footer/insta/li-1.png" /></li>
                <li><img src="/images/iteration-2-images/footer/insta/li-2.png" /></li>
                <li><img src="/images/iteration-2-images/footer/insta/li-3.png" /></li>
                <li><img src="/images/iteration-2-images/footer/insta/li-4.png" /></li>
                <li><img src="/images/iteration-2-images/footer/insta/li-5.png" /></li>
              </ul>
            </section>
          </section>

          <section className="footer-icon">
            <p>© 2023 Teknolojik Yemekler.</p>
            <i className="fab fa-twitter"></i>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
