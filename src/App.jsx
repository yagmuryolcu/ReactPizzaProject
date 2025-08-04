import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormHeader from './components/FormHeader';
import Form from './components/Form';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
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
          <Form />
          <Footer /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
