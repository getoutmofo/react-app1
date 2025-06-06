import React, { useState } from 'react'

export default function Form() {
    const [htext, setText] = useState("");
    
    
    function handleChange(e) {
        setText(e.target.value); 
    }
    
    function Add() {
        const numValue = parseFloat(htext);
        const hght=numValue/100;
        const numValue2 = parseFloat(wtext);
        const bmi=numValue2/(hght*hght);
        setBmi(bmi);
        if(bmi<=18.5){
            setCat("you are underweight!");
        }
        if(bmi>18.5 && bmi<25.5){
            setCat("you are healthy and fit!");
        }
        if(bmi>=25.5 && bmi<30){
            setCat("you are overweight!");
                    }
       if(bmi>30){
        setCat("you are obese!")
       }
    }
    function Reset(){
        setText("");
        setWtext("");
        setBmi(null);
        setCat("");
    }
const [wtext,setWtext]=useState("");
const [bmi,setBmi]=useState(null);
const [cat,setCat]=useState("");
    return (
        <div>
        
     <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
            <h1>BMI CALCULATOR</h1>
            <p>These calculations will tell your weight category</p>
            <ol>
                        <li>If your result is under 18.5,then you are underweight</li>
                        <li>If your result is between 18.5-25.5,then you are Healthy and fit</li>
                        <li>If your result is between 25.5-30,then you are overweight</li>
                        <li>If your result is above 30,then you are obese</li>
                    </ol>
            <input className="form-control my-3 mx-5" type="text" placeholder="Enter your height in cm" aria-label="default input example" style={{width:'300px'}} value={htext} onChange={handleChange} />
             <input className="form-control my-3 mx-5" type="text" placeholder="Enter your weight in kg" aria-label="default input example" style={{width:'300px'}} value={wtext} onChange={(e) => setWtext(e.target.value)} />
             <button className="btn btn-tertiary " onClick={Add}>CALCULATE</button>
             <button className="btn btn-tertiary " onClick={Reset}> TRY AGAIN</button>
           
           {bmi && cat && (
                <div className="card text-center p-4 bg-light">
                    <h3>Your Results</h3>
                    <div className="display-4 my-3">{bmi}</div>
                    <h4>{cat}</h4>
                    </div>)}
</div>
        </div>
    )
}
