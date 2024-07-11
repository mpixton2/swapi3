import './App.css';
import Predict from './components/Predict';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

function App() {
  const [homeWorld, setHomeWorld] = useState('');
  const [unitType, setUnitType] = useState('stormtrooper');

  return (
    <div className="container">
      <h1 className="display-1 text-center">Star Wars Model Prediction</h1>

      <Router>
        <Routes>
          <Route path="/" element={
            <Form
              homeWorld={homeWorld}
              setHomeWorld={setHomeWorld}
              unitType={unitType}
              setUnitType={setUnitType}
            />
          } />
          <Route path="/predict" element={
            <Predict
              homeWorld={homeWorld}
              unitType={unitType}
            />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
