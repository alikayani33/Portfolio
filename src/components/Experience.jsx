import React from 'react'
import experience from './data/experience.json';

const Experience = () => {
  return (
    <>
      <div id ="Experience" className="container ex">
<h1>EXPERIENCE</h1>
{experience.map((data)=>{
  return(
    <>
    <div key ={data.id} className='ex-items text-center my-5'
    data-aos="zoom-in"
      data-aos-duration = "1000"
    >
      
     
      <div className="right">
      <h5 style={{color: 'Yellow'}}>{data.organisation}</h5>
        <h2>{data.role}</h2>
        <h4>
          <span style={{color: 'palegreen'}}>
          {data.startDate}{"  "}{data.endDate}
          </span>
          <span style={{color:'gold'}}>
          {"  "}{data.location}
            </span>
        </h4>
        
        <h5 style={{color: 'orange'}}>{data.experiences[0]}</h5>
        <h5 style={{color: 'orange'}}>{data.experiences[1]}</h5>
      </div>


    </div>
    
    </>
  )
})}

      </div>
    </>
  )
}

export default Experience
