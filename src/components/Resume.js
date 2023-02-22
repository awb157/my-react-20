import React from 'react';
import { Parallax } from 'react-parallax';
function Resume() {
  return (
    <div>
           <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gwd6xFplutiexjdV6e9eD4yrwcPNI061GQ&usqp=CAU"
        bgImageAlt="the dog"
        strength={-200}
    >
        <section className="my-5 resumetext section">
      <div className="my-2">
      <p>
        Download my <a href="https://www.linkedin.com/">resume</a>
        </p>
        <h3>Front-end Topics</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          
        </ul>
        <h3>Back-end Topics</h3>
        <ul className="skills">
          <li>Node JS</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
    <div style={{ height: '200px' }} />
    </Parallax>
    </div>
  );
}

export default Resume;