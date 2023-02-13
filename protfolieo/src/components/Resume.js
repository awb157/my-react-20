import React from 'react';

function Resume() {
  return (
    <div>
        <section className="my-5">
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
    </div>
  );
}

export default Resume;