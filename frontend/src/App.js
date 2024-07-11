import './App.css';
import Predict from './components/Predict';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";

// TODO: Create a React router for Form and Predict

function App() {
  const [homeWorld, setHomeWorld] = useState('');
  const [unitType, setUnitType] = useState('stormtrooper');

  return (
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
  );
}

export default App;
