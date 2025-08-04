import './Navbar.css';
function Navbar() {
  return (
    <>
       <nav className="food-categories">
        <a href="#" className="icon-label">
            <img src="/images/iteration-2-images/icons/1.svg" alt="Noodle Resmi" />
            <span>YENİ! Kore</span>
        </a>
        <a href="#" className="icon-label">
            <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza Resmi" />
            <span>Pizza</span>
        </a>
        <a href="#" className="icon-label">
            <img src="/images/iteration-2-images/icons/3.svg" alt="Burger Resmi" />
            <span>Burger</span>
        </a>
        <a href="#" className="icon-label">
            <img src="/images/iteration-2-images/icons/4.svg" alt="Patates Kızartması Resmi" />
            <span>Kızartmalar</span>
        </a>
        <a href="#" className="icon-label">
            <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food Resmi" />
            <span>Fast food</span>
        </a>
        <a href="#" className="icon-label">
            <img src="/images/iteration-2-images/icons/6.svg" alt="İçecek Resmi" />
            <span>Gazlı İçecek</span>
        </a>
    </nav>
    </>
  );
}

export default Navbar;
