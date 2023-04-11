import './App.css';
import BmiCalculator from './bmi';
import BsaCalculator from './bsa';
import Home from './home';
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Bsa" element={<BsaCalculator />} />
        <Route path="Bmi" element={<BmiCalculator />} />
      </Routes>
    </div>


  );
}

export default App;
