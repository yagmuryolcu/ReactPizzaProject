import './Success.css';
import Footer from './Footer';

function Success({ siparis }) {
  if (!siparis) {
    return <p>Veri bulunamadı. Lütfen siparişi tekrar oluşturun.</p>;
  }

  return (
    <>
      <div className="success-container">
        <h1 className="title">Teknolojik Yemekler</h1>
        <p className="heading">lezzetin yolda</p>
        <p className="siparis">SİPARİŞ ALINDI</p>
        <hr />
        
        <div className="siparis-detay">
          <p className="pizza-adi"><strong>{siparis.pizzaAdi}</strong></p>
          <p><strong>Boyut:</strong> {siparis.boyut}</p>
          <p><strong>Hamur:</strong> {siparis.hamur}</p>
          <p><strong>Ek Malzemeler:</strong> {siparis.malzemeler.map((m, i) => (
            <span key={i} className="malzeme">{m}{i < siparis.malzemeler.length - 1 ? ', ' : ''}</span>
          ))}</p>
        </div>
        
        <div className="fiyat-kutusu">
          <p className="baslik"><strong>Sipariş Toplamı</strong></p>
          <div className="satir">
            <p>Seçimler</p>
            <p>{(siparis.malzemeler.length * 5).toFixed(2)}₺</p>
          </div>
          <div className="satir">
            <p>Toplam</p>
            <p>{siparis.toplam}₺</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;