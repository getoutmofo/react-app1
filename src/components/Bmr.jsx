import React, { useState } from 'react';

export default function Bmr() {
     const[htext,setHtext]=useState(null);
        const[wtext,setWtext]=useState(null);
        const[age,setAtext]=useState(null);
        const[gender,setGetext]=useState("");
        const[btext,setBtext]=useState(null);
    function Bmri(){
        const wwtext=parseFloat(wtext);
        const hhtext=parseFloat(htext);
        const aage=parseFloat(age);
       
        if(gender==="male" || gender==="Male"){
            const bmr= 88.362+(13.397*wwtext)+(4.799*hhtext)-(5.677*aage);
            console.log(bmr);
            setBtext(bmr);
        }
        else{
            const bmr= 655+(9.563*wwtext)+(1.85*hhtext)-(4.676*aage);
            console.log(bmr);
            setBtext(bmr);
        }}
    function Again(){
            setAtext("");
            setBtext("");
            setGetext("");
            setHtext("");
            setWtext("");
        }
       
    return(
        <>
        
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
        <h1>BMR CALCULATOR</h1>
        <p>This process will tell how many calories you should take to maintain your body weight</p>
         <input className="form-control my-3 mx-2" type="text" placeholder="Enter your gender(type-male or female)" aria-label="default input example" style={{width:'300px'}} value={gender} onChange={(e) => setGetext(e.target.value)} />
        <input className="form-control my-3 mx-2" type="number" placeholder="Enter your height in cm" aria-label="default input example" style={{width:'300px'}} value={htext} onChange={(e) => setHtext(e.target.value)} />
        <input className="form-control my-3 mx-2" type="number" placeholder="Enter your weight in kg" aria-label="default input example" style={{width:'300px'}} value={wtext} onChange={(e) => setWtext(e.target.value)} />
        <input className="form-control my-3 mx-2" type="number" placeholder="Enter your age in years" aria-label="default input example" style={{width:'300px'}} value={age} onChange={(e) => setAtext(e.target.value)} />
        <button className="btn btn-tertiary " onClick={Bmri}>CALCULATE</button>
        <button className="btn btn-tertiary " onClick={Again}>AGAIN</button>
        {btext && (
                <div className="card text-center p-4 bg-light">
                    <h3>Your Results</h3>
                    <div className="display-4 my-3">{btext} claories</div>
                    <h2>Tip-</h2>
                    <p>You may add extra 500 calories to it,to start a healthy weightgain</p>
                    <p>You may reduce 500 calories to it,to start a healthy weightloss</p>
                    </div>)}
                    </div>
        </>
   
    )
}
