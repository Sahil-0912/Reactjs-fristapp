import React from 'react'; 
import data from "../layout/Data";
import Card from "../layout/Card";

function About() {
  return (
    <div className="container my-5">
      <div className="row">
        {data.map((element, index) => (
          <div className="col-lg-4" key={index}>
            <Card 
              title={element.title} 
              para={element.para} 
              image={element.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
