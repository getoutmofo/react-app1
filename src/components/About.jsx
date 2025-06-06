import React from 'react'

export default function About() {
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
      <div className="card" style={{width:"58rem", height:"18rem"}}>
  <div className="card-body">
    <h2 className="card-title">ABOUT US</h2>
    <p className="card-text">This app helps you track key health metrics with easy-to-use BMI (Body Mass Index) and BMR (Basal Metabolic Rate) calculators. BMI measures body fat based on height and weight, helping classify underweight, normal, overweight, or obese ranges. BMR calculates your daily calorie needs at rest, essential for weight management. Whether your goal is weight loss, muscle gain, or maintaining a healthy lifestyle, these tools provide valuable insights. With a clean interface and accurate calculations, our app empowers you to make informed health decisions. Stay proactive about your well-being—check your BMI and BMR today!</p>
    <a href="https://www.unicef.org/documents/prevention-overweight-and-obesity-children-and-adolescents"target='blank' className="card-link">BMI</a>
    <a href="https://en.wikipedia.org/wiki/Basal_metabolic_rate" target='blank' className="card-link">BMR</a>
  </div>
</div>
    </div>
    </div>
  )
}
