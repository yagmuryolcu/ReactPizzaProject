import { useState, useEffect } from 'react';
import './App.css';
import { FormHeader } from './components/FormHeader';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <FormHeader />
      <Form />
    </>
  );
}

export default App;
