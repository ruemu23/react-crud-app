import React, { useState } from 'react';
import '../css/style.css';
import ikoyi from '../images/ikoyi.jpeg';
import { NavLink } from 'react-router-dom';
import { BsPersonBadge, BsEnvelopeAtFill } from "react-icons/bs";
import axios from 'axios';

export default function Insert() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [formid, setFormid] = useState('');

  const handleFormidSubmit = async (formType) => {
    setFormid(formType); // Set formid before submission

    const data = {
      fullname: fullname,
      email: email,
      formid: formType,
    };

    // Log the data before submission
    console.log("Data to be sent:", data);

    try {
      const response = await axios.post('https://dynamicweb.one/crud', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Server response:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error!", error);
      alert("Error processing the request.");
    }
  };

  return (
    <div className="myGrid">
      <div className="column1">
        <img src={ikoyi} alt="Description of the image" />
        <h1 className="centeredText">Crud Tutorial</h1>
      </div>
      <div className="column2">
        <div className="centeredDiv">
          <div className='logo'>Logo</div>
          <form>
            <div className="input-container">
              <input 
                type="text" 
                placeholder="Fullname" 
                value={fullname} 
                onChange={(e) => setFullname(e.target.value)} 
                required 
              />
              <span className='icon1'><BsPersonBadge /></span>
            </div>
            
            <div className="input-container">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <span className='icon1'><BsEnvelopeAtFill /></span>
            </div>

            <div className="button-group">
              <button 
                type="button" 
                className="buttoner" 
                onClick={() => handleFormidSubmit('insert-form')}
              >
                Insert Record
              </button>
              <button 
                type="button" 
                className="buttoner" 
                onClick={() => handleFormidSubmit('update-form')}
              >
                Update Record
              </button>
              <button 
                type="button" 
                className="buttoner" 
                onClick={() => handleFormidSubmit('delete-form')}
              >
                Delete Record
              </button>
            </div>
          </form>
          <p>Back to Crud Menu <NavLink to='/' className='bt decor'>Go to Menu </NavLink></p>
        </div>
      </div>
    </div>
  );
}
