import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormHeader from './components/FormHeader';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <FormHeader />
      <Switch>
        <Route path="/form" exact>
          <Form />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
