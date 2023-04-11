import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BsaCalculator() {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bsa, setBsa] = useState(0);

    function calculateBsa() {
        const heightInMeters = height / 100;
        const bsaValue = Math.sqrt((heightInMeters * weight) / 3600).toFixed(2);
        setBsa(bsaValue);
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
                Height (cm):
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <br />
            <label>
                Weight (kg):
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br />
            <button onClick={calculateBsa}>Calculate BSA</button>
            <br />
            {bsa > 0 && <p>Your BSA is: {bsa} m<sup>2</sup></p>}
        </div>
    );
}

export default BsaCalculator;