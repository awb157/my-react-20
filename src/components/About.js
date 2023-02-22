import React from 'react';
import { Parallax } from 'react-parallax';
import pic from "../austin.png"
function About() {
  return (
    <div>
         <div className="abouttext">
                {/* <img src="./assets/fam pic .png"> */}
                <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gwd6xFplutiexjdV6e9eD4yrwcPNI061GQ&usqp=CAU"
        bgImageAlt="the dog"
        strength={-200}
    >
      <img className='aboutpic' src={pic}></img>
                <p> Fill in about me after I wright an 'About me'</p>

       
        <div style={{ height: '350px' }} />
    </Parallax>  </div>
    </div>
  );
}

export default About;