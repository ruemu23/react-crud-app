import React, { useState, useEffect } from 'react';
import '../css/style.css';
import ikoyi from '../images/ikoyi.jpeg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Select() {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch records from the backend when the component loads
    const fetchRecords = async () => {
      try {
        const response = await axios.get('https://dynamicweb.one/get-records');
        if (response.data.status === 'success') {
          setRecords(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.error("There was an error fetching the records:", error);
        setError("Error fetching records");
      }
    };

    
    fetchRecords();
  }, []);

  return (
    <div className="myGrid">
      <div className="column1">
        <img src={ikoyi} alt="Description of the image" />
        <h1 className="centeredText">Crud Tutorial</h1>
      </div>
      <div className="column2">
        <div className="centeredDiv">
          <div className='logo'>Logo</div>
          <h2>Select Record from Database</h2>

          {error && <p className="error-message">{error}</p>}

          {records.length > 0 ? (
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={index}>
                    <td>{record.fullname}</td>
                    <td>{record.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No records found</p>
          )}

          <p>Back to Crud Menu <NavLink to='/' className='bt decor'>Go to Menu</NavLink></p>
        </div>
      </div>
    </div>
  );
}

