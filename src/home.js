import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Home() {
  return (
    <div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="bmi">BMI </Link></li>
          <li><Link to="bsa">BSA</Link></li>
        </ul>
      </nav>
      <p>Hello, a vitejte na me strance</p>
    </div>
  );
}



export default Home;