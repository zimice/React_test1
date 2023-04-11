import React, { useState } from 'react';
import { Link } from "react-router-dom"



function BmiCalculator() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    function calculateBmi() {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
    }

    return (


        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bmi">BMI </Link></li>
                    <li><Link to="/bsa">BSA</Link></li>
                </ul>
            </nav>
            <label>
                Weight (kg):
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br />
            <label>
                Height (cm):
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <br />
            <button onClick={calculateBmi}>Calculate BMI</button>
            <br />
            {bmi > 0 && <p>Your BMI is: {bmi}</p>}
        </div>
    );
}

export default BmiCalculator;