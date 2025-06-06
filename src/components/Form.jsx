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
        
    }
    function Reset(){
        setText("");
        setWtext("");
        setBmi(null);
    }
const [wtext,setWtext]=useState("");
const [bmi,setBmi]=useState(null);
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
            <input className="form-control my-3 mx-5" type="text" placeholder="Enter your height" aria-label="default input example" style={{width:'300px'}} value={htext} onChange={handleChange} />
             <input className="form-control my-3 mx-5" type="text" placeholder="Enter your weight" aria-label="default input example" style={{width:'300px'}} value={wtext} onChange={(e) => setWtext(e.target.value)} />
             <button className="btn btn-tertiary " onClick={Add}>CALCULATE</button>
             <button className="btn btn-tertiary " onClick={Reset}> TRY AGAIN</button>
           
           {bmi && (
                <div className="card text-center p-4 bg-light">
                    <h3>Your Results</h3>
                    <div className="display-4 my-3">{bmi}</div>
                    </div>)}
</div>
        </div>
    )
}