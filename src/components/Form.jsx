import { useState , useEffect} from 'react'
import axios from 'axios'
import './Form.css'

 export function Form() {

const [isSubmitting, setIsSubmitting] = useState(false);
const [formValid, setFormValid] = useState(false);
const [hamur, setHamur] = useState("");
const [malzemeler, setMalzemeler] = useState([]);
const [adet, setAdet] = useState(1);
const [isim,setIsim] =useState("");
const [boyut, setBoyut] = useState("");
const [siparisNotu, setSiparisNotu] = useState("");


const increaseAdet = () => {
  setAdet(adet + 1);
};

const decreaseAdet = () => {
  if (adet > 1) {
    setAdet(adet - 1);
  }
};
 const ilk_fiyat = 85.5;
  const extra = 5;

  const handleChange = (event) => {
    setHamur(event.target.value);
  };

  const handleMalzemeChange = (event) => {
    const { value,checked } =event.target;
    if (checked) {
      if (malzemeler.length < 10) {
        setMalzemeler([...malzemeler,value]);
      }else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
         event.target.checked = false;  
         return;
      }

    } else {
    if (malzemeler.length <= 4) {
      alert("En az 4 malzeme seçmelisiniz.");
      event.target.checked = true; // Checkbox'ı tekrar işaretli yap
      return;
    }
    setMalzemeler(malzemeler.filter((malzeme) => malzeme !== value));
  }
};

   
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validasyon kontrolleri
  if (isim.trim().length < 3) {
    alert("İsim en az 3 karakter olmalı.");
    return;
  }

  if (!boyut) {
    alert("Pizza boyutu seçmelisiniz.");
    return;
  }

  if (!hamur) {
    alert("Hamur kalınlığı seçmelisiniz.");
    return;
  }

  if (malzemeler.length < 4) {
    alert("En az 4 malzeme seçmelisiniz.");
    return;
  }

  if (malzemeler.length > 10) {
    alert("En fazla 10 malzeme seçebilirsiniz.");
    return;
  }

  if (!formValid) {
    alert("Formda eksik alanlar mevcut. Lütfen tüm alanları doldurun");
    return;
  }

  setIsSubmitting(true);

  const siparisData = {
    isim: isim.trim(),
    boyut: boyut,
    hamur: hamur,
    malzemeler: malzemeler,
    adet: adet,
    siparisNotu: siparisNotu,
    toplam: toplam.toFixed(2),
    pizzaAdi: "Position Absolute Acı Pizza"
  };

   try {
   
    const response = await axios.post(
    'https://reqres.in/api/users',
    siparisData,
    {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }
  );

    console.log("API Response:", response.data);
    
    console.log("=== SİPARİŞ ÖZETİ ===");
    console.log("Pizza:", "Position Absolute Acı Pizza");
    console.log("Boyut:", boyut);
    console.log("Hamur:", hamur);
    console.log("Malzemeler:", malzemeler.join(", "));
    console.log("Adet:", adet);
    console.log("İsim:", isim);
    console.log("Sipariş Notu:", siparisNotu || "Not eklenmedi");
    console.log("Toplam Tutar:", toplam.toFixed(2) + "₺");
    console.log("Sipariş ID:", response.data.id);
    console.log("Sipariş Tarihi:", response.data.createdAt);
    console.log("=====================");
    
    alert("Siparişiniz başarıyla alındı! ");
     setIsim("");
    setBoyut("");
    setHamur("");
    setMalzemeler([]);
    setAdet(1);
    setSiparisNotu("");
    
  } catch (error) {
    console.error("Sipariş gönderilirken hata oluştu:", error);
    alert("Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
  } finally {
    setIsSubmitting(false);
  }
};

   

  const toplam =(ilk_fiyat + malzemeler.length *extra) * adet;

    
  useEffect(() => {
    const isValid =
      hamur !== "" &&
      boyut !== "" &&
      malzemeler.length >= 4 &&
      malzemeler.length <= 10 &&
      isim.trim().length >= 3;

    setFormValid(isValid);
  }, [hamur, malzemeler,boyut, isim]);



  return (
    <>
    <form onSubmit={handleSubmit}>

    <div id="pizza-section">
      <div id= "pizza-secimi">
            <div className="pizza-name">
            <h1>Position Absolute Acı Pizza</h1>
            <div className="pizza-sabit-fiyat">
                 <p><span className="pizza-fiyat">85.50₺</span></p>
            <div className="pizza-puan">
            <span>4.9</span>
           <span>(200)</span>
            </div>
    </div>
      </div>
      </div>
         <div className="pizza-aciklama">

      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
         daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
          Küçük bir pizzaya bazen pizzetta denir.</p>
          </div>
       <div id="pizza-boyut-kalınlık">

           <div className="boyut-form">
       <p><b>Boyut Seç </b> <span style={{ color: "#CE2829" }}>*</span></p>
       
      <label htmlFor="pizza-kucuk">
      <input type="radio" id="pizza-kucuk" name="pizzaBoyutu" value="Küçük" checked={boyut === "Küçük"} onChange={(e) => setBoyut(e.target.value)} required/>
      Küçük
      </label>
  
      <label htmlFor="pizza-orta">
    <input type="radio" id="pizza-orta" name="pizzaBoyutu" value="Orta" checked={boyut === "Orta"} onChange={(e) => setBoyut(e.target.value)} required/>
    Orta
   </label>
  
   <label htmlFor="pizza-buyuk">
    <input type="radio" id="pizza-buyuk" name="pizzaBoyutu" value="Büyük" checked={boyut === "Büyük"} onChange={(e) => setBoyut(e.target.value)} required/>
    Büyük
     </label>
    </div>
   <div className="hamur-form">
    <p><b>Hamur Seç </b> <span style={{ color: "#CE2829" }}>*</span></p>
      
      <div className='hamur-secimi'>
      <select
        id="hamur"
        name="hamur"
        value={hamur}
        onChange={handleChange}
        required
      >
        <option value="" disabled hidden>Hamur Kalınlığı</option>
        <option value="ince">İnce Hamur</option>
        <option value="orta">Orta Hamur</option>
        <option value="kalin">Kalın Hamur</option>
      </select>
    </div>
    </div>
    <div id="ek-malzeme-section">
    <p><b>Ek Malzemeler</b></p>
    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
    </div>
    <br/>
    <div className="urunler">
      <label>
    <input type="checkbox" name="malzemeler" value="Pepperoni"  onChange={handleMalzemeChange}   checked={malzemeler.includes("Pepperoni")}
/>
    Pepperoni 
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Sosis"   onChange={handleMalzemeChange}  checked={malzemeler.includes("Sosis")}
/>
    Sosis
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Kanada Jambonu"  onChange={handleMalzemeChange}checked={malzemeler.includes("Kanada Jambonu")}
/>
    Kanada Jambonu
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Tavuk Izgara"  onChange={handleMalzemeChange}    checked={malzemeler.includes("Tavuk Izgara")}/>
    Tavuk Izgara
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Soğan"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Soğan")} />
    Soğan
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Domates"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Domates")}/>
    Domates
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Mısır"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Mısır")}/>
    Mısır
  </label>
 <label>
    <input type="checkbox" name="malzemeler" value="Sucuk"  onChange={handleMalzemeChange}   checked={malzemeler.includes("Sucuk")}/>
    Sucuk
  </label>
  <label>
    <input type="checkbox" name="malzemeler" value="Jalepeno"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Jalepeno")}/>
    Jalepeno
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Sarımsak"  onChange={handleMalzemeChange} checked={malzemeler.includes("Sarımsak")}/>
    Sarımsak
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Biber"  onChange={handleMalzemeChange} checked={malzemeler.includes("Biber")}/>
    Biber
  </label>
 <label>
    <input type="checkbox" name="malzemeler" value="Sucuk"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Sucuk")}/>
    Sucuk
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Ananas"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Ananas")}/>
    Ananas
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Kabak"  onChange={handleMalzemeChange}  checked={malzemeler.includes("Kabak")}/>
    Kabak
  </label>
  
  </div>
  <br/>

  <div className="isim-alani">
      
  <label htmlFor="isim"><b>İsim</b> <span style={{ color: "#CE2829" }}>*</span></label>
  <input
    type="text"
    id="isim"
    name="isim"
    placeholder="Adınızı girin"
    minLength={3}
    required
    value ={isim}
    onChange= {(e) =>setIsim(e.target.value)}
  />
</div>
    <div className="siparis-notu">
  
         <label htmlFor="siparis-notu"><b>Sipariş Notu </b></label>
        <textarea 
         name="siparis-notu"
         id="siparis-notu" 
         rows="3"
         cols="50"
         placeholder="Siparişine eklemek istediğin bir not var mı?"
         value={siparisNotu}
         onChange={(e) => setSiparisNotu(e.target.value)}
         ></textarea>
         <hr />
         

         
     <div className="siparis-wrapper">
  <div className="counter">
    <div className="counter-buttons">
      <button id="decrease" type="button" onClick={decreaseAdet}>-</button>
      <div id="value">{adet}</div>
      <button id="increase" type="button" onClick={increaseAdet}>+</button>
    </div>
  </div>
    <div className="siparis-sag-kisim">

  <div className="siparis-toplami">
    <p className="baslik"><b>Sipariş Toplamı</b></p>
    <div className="secim-satiri">
      <p className="secimler">Seçimler</p>
    <p className="secim-fiyati">{malzemeler.length * extra * adet}₺</p>
    </div>
    <div className="secim-satiri">
      <p className="toplam-label">Toplam</p>
      <p className="toplam-fiyat">{toplam.toFixed(2)}₺</p>
    </div>
    </div>
    <button 
      type="submit" 
      className="siparis-ver-btn"
      disabled={!formValid || isSubmitting}>
      {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
    </button>
  </div>
</div>
    </div>
   </div>
</div>

  </form>
    </>
    
  );
}

export default Form