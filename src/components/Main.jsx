import './Main.css';
import  { Link } from 'react-router-dom';
function Main() {
  return (
    <>
      <main>
        <div id="second-food-section">
          <section className="siparis-ver">
            <div className="birinci-siparis">
              <div className="siparis-detay">
                <h2 className="siparis-basligi">
                  Özel<br />Lezzetus
                </h2>
                <p className="siparis-icerigi">Position: Absolute Acı Burger</p>
                <Link to="/form" className="siparis-butonu">
                  SİPARİŞ VER
                  </Link>
              </div>
            </div>

            <div className="layout">
              <div className="ikinci-siparis">
                <div className="siparis-detay">
                  <h2 className="siparis-basligi">
                    Hackathlon <br />Burger Menu
                  </h2>
                <Link to="/form" className="siparis-butonu">
                    SİPARİŞ VER
                    </Link>
                </div>
              </div>

              <div className="ucuncu-siparis">
                <div className="siparis-detay">
                  <h2 className="siparis-basligi">
                    <span className="kirmizi-yazi">Çoooook</span> hızlı
                    <br />
                    npm gibi kurye
                  </h2>
                <Link to="/form" className="siparis-butonu">
                    SİPARİŞ VER
                    </Link>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Menü kısmı */}
        <div className="second-slogan">
          <h2>en çok paketlenen ürünler</h2>
          <p className="lezzet">
            Acıktıran Kodlara Doyuran Lezzet
          </p>
        </div>

        <div className="menu-2">
          <ul id="pills-tab">
            <li>
              <button id="pills-ramen-tab">
                <img src="/iteration-2-images/foot-icons/1.svg" alt="Ramen" />
                Ramen
              </button>
            </li>
            <li>
              <button id="pills-pizza-tab">
                <img src="/iteration-2-images/foot-icons/2.svg" alt="Pizza" />
                Pizza
              </button>
            </li>
            <li>
              <button id="pills-burger-tab">
                <img src="/iteration-2-images/foot-icons/3.svg" alt="Burger" />
                Burger
              </button>
            </li>
            <li>
              <button id="pills-fries-tab">
                <img src="/iteration-2-images/foot-icons/4.svg" alt="French Fries" />
                French fries
              </button>
            </li>
            <li>
              <button id="pills-fastfood-tab">
                <img src="/iteration-2-images/foot-icons/5.svg" alt="Fast food" />
                Fast food
              </button>
            </li>
            <li>
              <button id="pills-drinks-tab">
                <img src="/iteration-2-images/foot-icons/6.svg" alt="Soft drinks" />
                Soft drinks
              </button>
            </li>
          </ul>
        </div>

        {/* Yemekler */}
        <section className="pizza-section">
          <div className="pizza-box">
            <img src="iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
            <div className="pizza-content">
              <p className="pizza-name">Terminal Pizza</p>
            </div>
            <div className="pizza-info-group">
              <p>4.9</p>
              <div className="right-group">
                <span>(200)</span>
                <span>
                  <b>60₺</b>
                </span>
              </div>
            </div>
          </div>

          <div className="pizza-box">
            <img src="iteration-2-images/pictures/food-2.png" alt="Position Absolute Pizza" />
            <div className="pizza-content">
              <p className="pizza-name">Position Absolute Pizza</p>
            </div>
            <div className="pizza-info-group">
              <p>4.9</p>
              <div className="right-group">
                <span>(200)</span>
                <span>
                  <b>60₺</b>
                </span>
              </div>
            </div>
          </div>

          <div className="pizza-box">
            <img src="iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
            <div className="pizza-content">
              <p className="pizza-name">useEffect Tavuklu Burger</p>
            </div>
            <div className="pizza-info-group">
              <p>4.9</p>
              <div className="right-group">
                <span>(200)</span>
                <span>
                  <b>60₺</b>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
