import { useState } from 'react'
import './App.css'

function App() {
  
 const [hamur, setHamur] = useState("");

  const handleChange = (e) => {
    setHamur(e.target.value);
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form gönderildi.");
    console.log("Hamur:", hamur);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>

    <div id="pizza-section">
      <div id= "pizza-secimi">
            <div className="pizza-name">
            <h1>Position Absolute Acı Pizza</h1>
            <p><b>85.50₺</b></p>
            <div className="pizza-puan">
            <span>4.9</span>
           <span>(200)</span>
            </div>
    </div>
      </div>

      <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,
         daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
          Küçük bir pizzaya bazen pizzetta denir.</p>
       <div id="pizza-boyut-kalınlık">

           <div className="boyut-form">
       <p><b>Boyut Seç </b> <span style={{ color: "red" }}>*</span></p>
      <br />  
      <label htmlFor="pizza-kucuk">
      <input type="radio" id="pizza-kucuk" name="pizzaBoyutu" value="Küçük" />
      Küçük
      </label>
  
      <label htmlFor="pizza-orta">
    <input type="radio" id="pizza-orta" name="pizzaBoyutu" value="Orta" />
    Orta
   </label>
  
   <label htmlFor="pizza-buyuk">
    <input type="radio" id="pizza-buyuk" name="pizzaBoyutu" value="Büyük" />
    Büyük
     </label>
    </div>
   <div className="hamur-form">
    <p><b>Hamur Seç </b> <span style={{ color: "red" }}>*</span></p>
      <br />
      <select
        id="hamur"
        name="hamur"
        value={hamur}
        onChange={handleChange}
        required
      >
        <option value=""disabled hidden>Hamur Kalınlığı</option>
        <option value="ince">İnce Hamur</option>
        <option value="orta">Orta Hamur</option>
        <option value="kalin">Kalın Hamur</option>
      </select>
    </div>
    <div id="ek-malzeme-section">
    <p><b>Ek Malzemeler</b></p>
    <br />
    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <label>
    <input type="checkbox" name="malzemeler" value="Pepperoni" />
    Pepperoni
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Sosis" />
    Sosis
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Kanada Jambonu" />
    Kanada Jambonu
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Tavuk Izgara" />
    Tavuk Izgara
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Soğan" />
    Soğan
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Domates" />
    Domates
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Mısır" />
    Mısır
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Jalepeno" />
    Jalepeno
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Sarımsak" />
    Sarımsak
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Biber" />
    Biber
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Sucuk" />
    Sucuk
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Ananas" />
    Ananas
  </label>

  <label>
    <input type="checkbox" name="malzemeler" value="Kabak" />
    Kabak
  </label>
</div>
   
    </div>
   </div>


  </form>
    </>
    
  );
}

export default App
