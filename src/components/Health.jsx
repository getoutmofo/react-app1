import React from 'react'
import { useState } from 'react';
export default function Health() {
    const [count, setCount] = useState(1);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  if(count>=5){
    setCount(4);
  }

return (
    <div>
       <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '2rem',
     
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    }}>
      <div>
      
      {count === 1 && <><h1>Hello!</h1><p>
        Health is one of the most valuable aspects of human life, influencing our happiness, productivity, and overall quality of life. Good health enables us to enjoy daily activities, pursue our goals, and contribute meaningfully to society. Here’s why health should be a top priority for everyone:

1. Physical Well-being
A healthy body functions efficiently, reducing the risk of chronic diseases like diabetes, heart disease, and obesity.

Proper nutrition, exercise, and rest strengthen immunity, helping the body fight infections and illnesses.

2. Mental and Emotional Stability
Good health is not just about the body—it also includes mental and emotional well-being.

Poor physical health can lead to stress, anxiety, and depression, while a healthy lifestyle improves mood and cognitive function.

3. Increased Productivity
Healthy individuals have more energy, focus, and stamina, making them more productive at work, school, and daily tasks.

Illnesses lead to absenteeism and reduced efficiency, affecting personal and professional growth.

4. Longevity and Quality of Life
Maintaining good health increases life expectancy and ensures more years of active, independent living.

Chronic diseases and poor lifestyle choices can shorten lifespan and reduce mobility in later years.

5. Financial Benefits
Medical treatments and hospitalizations can be expensive. Preventive healthcare (like regular check-ups and a balanced diet) reduces long-term healthcare costs.

Healthy people spend less on medications and avoid loss of income due to sickness.

6. Stronger Relationships
When you’re healthy, you can engage more with family and friends, participate in social activities, and maintain emotional connections.

Poor health can lead to isolation and dependency on others.

7. Personal Fulfillment
A healthy lifestyle allows you to pursue hobbies, travel, and enjoy life’s experiences to the fullest.

Being fit and active boosts confidence and self-esteem.
        </p></>
      }
        {count === 2 && <><h1>Benefits of BMI</h1><p>
           The Body Mass Index (BMI) is a simple and widely used screening tool that helps estimate body fat based on height and weight, categorizing individuals into underweight, normal weight, overweight, or obese ranges, which can indicate potential health risks such as heart disease, diabetes, and high blood pressure when outside the normal range. It is valuable for tracking weight management progress, setting fitness goals, and guiding public health policies by identifying at-risk populations. While BMI is quick and useful for raising health awareness, it has limitations—it doesn’t distinguish between muscle and fat, account for body composition, or consider factors like age, gender, or bone density, meaning it should be used alongside other health assessments for a more complete evaluation.** 
            </p></>}
            {count === 3 && <><h1>Benefits of BMR</h1><p>
           Basal Metabolic Rate (BMR) is the number of calories your body needs to perform essential life-sustaining functions like breathing, circulation, and cell production while at complete rest, making it a crucial metric for understanding your body's energy requirements. Knowing your BMR helps in designing effective weight management plans—whether for weight loss, gain, or maintenance—by determining your daily caloric needs when combined with activity levels. It also provides insights into metabolic health, as unusually high or low BMR values may indicate thyroid issues or other metabolic conditions. However, BMR is influenced by factors like age, gender, muscle mass, and genetics, so it should be used alongside other health metrics for a comprehensive approach to nutrition and fitness.**
            </p></>}
{count === 4 && <><h1>Conclusion</h1><p>
    Body Mass Index (BMI) and Basal Metabolic Rate (BMR) are two essential tools in health and fitness, each serving distinct yet complementary purposes. BMI provides a quick assessment of weight status, helping identify potential risks for obesity-related diseases like diabetes and heart conditions. While it has limitations—such as not accounting for muscle mass or body composition—it remains a valuable initial screening tool for public health and personal wellness. On the other hand, BMR calculates the minimum calories your body needs at rest, offering a foundation for personalized diet and fitness plans. Understanding your BMR ensures more accurate calorie tracking, whether the goal is weight loss, muscle gain, or metabolic health maintenance.

Together, BMI and BMR contribute to a holistic approach to health. BMI highlights weight-related risks, while BMR fine-tunes nutritional and exercise strategies. However, neither should be used in isolation—factors like muscle mass, activity levels, and medical history must also be considered. By combining these metrics with other health assessments, individuals can make informed decisions, optimize their fitness journeys, and improve long-term well-being. Ultimately, awareness of both BMI and BMR empowers better lifestyle choices, leading to a healthier, more balanced life.
            </p></>}
            <div className='container d-flex justify-content-between'>
      <button onClick={decrease}>&larr;-</button>
      <h6>Page: {count}</h6>
      <button onClick={increase}>+&rarr;</button>
      </div>
    </div>
  







    </div>
    </div>
  )
}
