import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form.component';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      </header>
      <Form />
    </div>
  );
}

export default App;
