import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormHeader from './components/FormHeader';
import Form from './components/Form';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Success from './components/Success';
import { useState } from 'react';
import './index.css';




function App() {

      const [siparis,setSiparis] =useState(null);

  return (
    <Router>
      <Switch>
        {/* Anasayfa */}
        <Route path="/" exact>
          <Header />
          <Navbar />
          <Main />
          <Footer />
        </Route>

        {/* Form sayfası */}
        <Route path="/form" exact>
          <FormHeader />
          <Form setSiparis= {setSiparis} />
          <Footer /> 
        </Route>

        {/* Sipariş Başarı Sayfası */}
        <Route path="/success" exact>
          <Success siparis={siparis} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
