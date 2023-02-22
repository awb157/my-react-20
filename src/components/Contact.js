import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setemail('');
    setmessage('');
  };

  return (
    <div>
      {/* <p>
        Hello {firstName} {lastName}
      </p> */}
               <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Gwd6xFplutiexjdV6e9eD4yrwcPNI061GQ&usqp=CAU"
        bgImageAlt="the dog"
        strength={-200}
    >
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
          <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <div style={{ height: '200px' }} />
      </Parallax>
    </div>
  );
}

export default Contact;