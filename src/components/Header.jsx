import './Header.css';
function Header() {
  return (
    <>
      <header>
        <section className="first-food-section">
          <div className="food-container">
            <h1>Teknolojik Yemekler</h1>
            <br />
            <div className="first-slogan">
              <p className="food-heading">fırsatı kaçırma</p>
              <span>
                KOD ACIKTIRIR <br /> PİZZA, DOYURUR
              </span>
            </div>
            <a href="#" className="hungry-button">ACIKTIM</a>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
